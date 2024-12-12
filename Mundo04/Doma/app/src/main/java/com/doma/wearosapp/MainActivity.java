package com.doma.wearosapp;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.media.AudioDeviceInfo;
import android.media.AudioDeviceCallback;
import android.media.AudioManager;
import android.os.Bundle;
import android.provider.Settings;
import android.speech.RecognizerIntent;
import android.speech.tts.TextToSpeech;
import android.widget.Button;
import android.widget.Toast;
import android.content.ActivityNotFoundException;

import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import java.util.ArrayList;
import java.util.Locale;

public class MainActivity extends Activity implements TextToSpeech.OnInitListener {

    private AudioHelper audioHelper;
    private Context context;
    private AudioManager audioManager;
    private AudioDeviceCallback audioDeviceCallback;
    private TextToSpeech textToSpeech;

    private static final int REQ_CODE_SPEECH_INPUT = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        context = this;
        audioHelper = new AudioHelper(context);
        textToSpeech = new TextToSpeech(this, this);

        Button btnVoiceCommand = findViewById(R.id.btnVoiceCommand);
        btnVoiceCommand.setOnClickListener(view -> startVoiceInput());

        audioManager = (AudioManager) getSystemService(Context.AUDIO_SERVICE);

        audioDeviceCallback = new AudioDeviceCallback() {
            @Override
            public void onAudioDevicesAdded(AudioDeviceInfo[] addedDevices) {
                super.onAudioDevicesAdded(addedDevices);
                if (audioHelper.audioOutputAvailable(AudioDeviceInfo.TYPE_BLUETOOTH_A2DP)) {
                    Toast.makeText(context, "Fone de ouvido Bluetooth conectado.", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onAudioDevicesRemoved(AudioDeviceInfo[] removedDevices) {
                super.onAudioDevicesRemoved(removedDevices);
                if (!audioHelper.audioOutputAvailable(AudioDeviceInfo.TYPE_BLUETOOTH_A2DP)) {
                    Toast.makeText(context, "Fone de ouvido Bluetooth desconectado.", Toast.LENGTH_SHORT).show();
                }
            }
        };

        audioManager.registerAudioDeviceCallback(audioDeviceCallback, null);

        boolean isSpeakerAvailable = audioHelper.audioOutputAvailable(AudioDeviceInfo.TYPE_BUILTIN_SPEAKER);
        boolean isBluetoothHeadsetConnected = audioHelper.audioOutputAvailable(AudioDeviceInfo.TYPE_BLUETOOTH_A2DP);

        if (isSpeakerAvailable || isBluetoothHeadsetConnected) {
            Toast.makeText(context, "Saída de áudio disponível.", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(context, "Nenhuma saída de áudio disponível. Conecte um dispositivo Bluetooth.", Toast.LENGTH_LONG).show();
            openBluetoothSettings();
        }

        createNotificationChannel();
    }

    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS) {
            int result = textToSpeech.setLanguage(new Locale("pt", "BR"));
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                Toast.makeText(context, "Idioma não suportado.", Toast.LENGTH_SHORT).show();
            } else {
                speak("Bem-vindo ao aplicativo da Doma.");
            }
        } else {
            Toast.makeText(context, "Inicialização do TextToSpeech falhou.", Toast.LENGTH_SHORT).show();
        }
    }

    private void speak(String text) {
        textToSpeech.speak(text, TextToSpeech.QUEUE_FLUSH, null, "MessageID");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (textToSpeech != null) {
            textToSpeech.stop();
            textToSpeech.shutdown();
        }
        audioManager.unregisterAudioDeviceCallback(audioDeviceCallback);
    }

    private void startVoiceInput() {
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, Locale.getDefault());
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT, "Diga algo...");
        try {
            startActivityForResult(intent, REQ_CODE_SPEECH_INPUT);
        } catch (ActivityNotFoundException a) {
            Toast.makeText(context, "Reconhecimento de voz não suportado.", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == REQ_CODE_SPEECH_INPUT && resultCode == RESULT_OK && data != null) {
            ArrayList<String> result = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
            assert result != null;
            String spokenText = result.get(0);
            processVoiceCommand(spokenText);
        }
    }

    private void processVoiceCommand(String command) {
        if (command.equalsIgnoreCase("ler mensagens")) {
            speak("Você não tem novas mensagens.");
        } else if (command.equalsIgnoreCase("alerta de segurança")) {
            sendSecurityAlert();
        } else if (command.equalsIgnoreCase("ler notificações")) {
            speak("Você tem novas notificações.");
        } else if (command.equalsIgnoreCase("instrução de segurança")) {
            speak("Em caso de emergência, siga as saídas de emergência mais próximas.");
        } else {
            speak("Comando não reconhecido.");
        }
    }

    @SuppressLint("WearRecents")
    private void openBluetoothSettings() {
        Intent intent = new Intent(Settings.ACTION_BLUETOOTH_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        startActivity(intent);
    }

    private void createNotificationChannel() {
        CharSequence name = "Canal de Notificações";
        String description = "Descrição do Canal";
        int importance = NotificationManager.IMPORTANCE_DEFAULT;
        NotificationChannel channel = new NotificationChannel("CHANNEL_ID", name, importance);
        channel.setDescription(description);
        NotificationManager notificationManager = getSystemService(NotificationManager.class);
        notificationManager.createNotificationChannel(channel);
    }

    private void sendNotification() {
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, "CHANNEL_ID")
                .setSmallIcon(R.drawable.ic_launcher_foreground)
                .setContentTitle("Nova notificação")
                .setContentText("Alerta de segurança ativado!")
                .setPriority(NotificationCompat.PRIORITY_DEFAULT);

        NotificationManagerCompat notificationManager = NotificationManagerCompat.from(this);
        notificationManager.notify(1001, builder.build());

        // Leitura da notificação em voz alta
        speak("Alerta de segurança ativado!");
    }

    private void sendSecurityAlert() {
        sendNotification();
        speak("Atenção! Alerta de segurança ativado. Proceda com cautela.");
    }
}

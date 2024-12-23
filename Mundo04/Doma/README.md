# Nível 03 - RPG0025 - Lidando com sensores em dispositivos móveis

O aplicativo deverá ser capaz de ler mensagens e notificações em voz alta, responder a comandos de voz e fornecer alertas de segurança e instruções através de áudio. Este aplicativo não apenas melhora a eficiência e a comunicação interna na empresa "Doma", mas também demonstra a aplicação prática de tecnologias wearables para criar soluções acessíveis e inclusivas no local de trabalho.

## Contextualização

Para uma melhoria na eficiência e na comunicação interna, a empresa “Doma” quer desenvolver um aplicativo Wear OS para assistência aos funcionários que têm necessidades especiais, uma forma de solidificar a interação entre os mesmos. Assim, com os aplicativos wearables podem usar áudio para fornecer informações em tempo real, como leitura de mensagens de texto, notificações, lembretes e respostas a comandos de voz. Isso pode ser especialmente útil para pessoas com deficiência visual. Além de serem úteis para treinamento e educação. Aplicativos podem usar áudio para fornecer instruções, dicas e feedbacks durante o aprendizado ou a prática de novas habilidades. Outra funcionalidade que a empresa quer adotar, é um aplicativo wearable que pode usar o áudio para fornecer alertas de segurança, como notificações de emergência, alertas de tempestades, notícias importantes ou informações críticas.

## Requisitos Funcionais

- Configuração do Ambiente:
  - a) Certifique-se de ter seu ambiente configurado;
  - b) Prepare um ambiente de simulação para Wear OS ou conecte um dispositivo wearable real.
    
- Implementação de Saídas de áudio:
  - a) AudioDeviceInfo.TYPE_BUILTIN_SPEAKER, em dispositivos com um alto-falante integrado;
  - b) AudioDeviceInfo.TYPE_BLUETOOTH_A2DP quando um fone de ouvido Bluetooth estiver pareado e conectado;
  - c) Utilize o método getDevices() com o valor de FEATURE_AUDIO_OUTPUT para enumerar todas as saídas de áudio.
    
- Detecção Dinâmica de Dispositivos de Áudio:
  - a) Seu app pode registrar um callback para detectar quando isso acontece usando registerAudioDeviceCallback.
    
- Facilitando a Conexão Bluetooth:
  - a) Se o app exigir que um fone de ouvido seja conectado para continuar, em vez de mostrar uma mensagem de erro, ofereça a opção de direcionar o usuário diretamente às configurações do Bluetooth para facilitar a conexão. Para isso, envie uma intent com ACTION_BLUETOOTH_SETTINGS.
 
- Reprodução de Áudio:
  - a) Depois de detectar uma saída de áudio adequada, o processo para tocar áudio no Wear OS é o mesmo usado em dispositivos móveis ou outros dispositivos.

- Uso de Alto-falantes em Dispositivos Wear OS:
  - a) Para dispositivos Wear OS que incluem alto-falantes, incorpore funcionalidades de áudio para enriquecer a experiência do usuário;
  - b) Exemplos de uso incluem alarmes de relógio com notificações sonoras, apps de fitness com instruções de voz para exercícios, e apps educativos com feedback auditivo.

## Imagens do App em execução:
<div align="center">
 <img src="https://i.imgur.com/5NYzik2.png" height="200" />
 <img src="https://i.imgur.com/sbiz1Uo.png" height="200" />
 <img src="https://i.imgur.com/dFZiCfD.png" height="200" />
</div>

<br>
  
[<- Retornar ao Mundo04](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo04)


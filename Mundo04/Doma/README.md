<p float="left">
 <img src="https://i.imgur.com/v95orpk.png" width="100%" />
</p>

# Mundo 04 - Nível 03: Lidando com sensores em dispositivos móveis

## Contextualização
Para uma melhoria na eficiência e na comunicação interna, a empresa “Doma” quer desenvolver um aplicativo Wear OS para assistência aos funcionários que têm necessidades especiais, uma forma de solidificar a interação entre os mesmos. Assim, com os aplicativos wearables podem usar áudio para fornecer informações em tempo real, como leitura de mensagens de texto, notificações, lembretes e respostas a comandos de voz. Isso pode ser especialmente útil para pessoas com deficiência visual. Além de serem úteis para treinamento e educação. Aplicativos podem usar áudio para fornecer instruções, dicas e feedbacks durante o aprendizado ou a prática de novas habilidades. Outra funcionalidade que a empresa quer adotar, é um aplicativo wearable que pode usar o áudio para fornecer alertas de segurança, como notificações de emergência, alertas de tempestades, notícias importantes ou informações críticas.

## Requisitos Funcionais

1. Configuração do Ambiente:
•	Certifique-se de ter seu ambiente configurado.
•	Prepare um ambiente de simulação para Wear OS ou conecte um dispositivo wearable real.
2.	 Implementação de Saídas de áudio:
•	AudioDeviceInfo.TYPE_BUILTIN_SPEAKER, em dispositivos com um alto-falante integrado.
•	AudioDeviceInfo.TYPE_BLUETOOTH_A2DP quando um fone de ouvido Bluetooth estiver pareado e conectado.
•	Utilize o método getDevices() com o valor de FEATURE_AUDIO_OUTPUT para enumerar todas as saídas de áudio
3.	Detecção Dinâmica de Dispositivos de Áudio:
•	Seu app pode registrar um callback para detectar quando isso acontece usando registerAudioDeviceCallback
4.	Facilitando a Conexão Bluetooth:
•	Se o app exigir que um fone de ouvido seja conectado para continuar, em vez de mostrar uma mensagem de erro, ofereça a opção de direcionar o usuário diretamente às configurações do Bluetooth para facilitar a conexão. Para isso, envie uma intent com ACTION_BLUETOOTH_SETTINGS
5.	 Reprodução de Áudio:
•	Depois de detectar uma saída de áudio adequada, o processo para tocar áudio no Wear OS é o mesmo usado em dispositivos móveis ou outros dispositivos.
6.	Uso de Alto-falantes em Dispositivos Wear OS:
•	Para dispositivos Wear OS que incluem alto-falantes, incorpore funcionalidades de áudio para enriquecer a experiência do usuário.
•	Exemplos de uso incluem alarmes de relógio com notificações sonoras, apps de fitness com instruções de voz para exercícios, e apps educativos com feedback auditivo.

## Foram utilizados nesse projeto:

- Tecnologias: Java e AndroidStudio

## Imagens do App em execução:
<div align="center">
 <img src="https://i.imgur.com/5NYzik2.png" height="200" />
 <img src="https://i.imgur.com/sbiz1Uo.png" height="200" />
 <img src="https://i.imgur.com/dFZiCfD.png" height="200" />
</div>

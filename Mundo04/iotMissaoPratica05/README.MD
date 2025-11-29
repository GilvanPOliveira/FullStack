# Nível 05 - RPG0027 - Vamos interligar as coisas com a nuvem!

Espera-se que tenha sido realizado com sucesso a visualização em tempo real de dados provenientes de sensores conectados ao Azure Hub IoT. A visualização deverá ser realizada através de aplicativos locaiscomo através do Serviço de Aplicativo do Azure.

## Contextualização

Nesta Missão Prática você aprenderá a visualizar dados em tempo real provenientes de sensores conectados ao seu hub IoT. Isso será realizado por meio da execução de um aplicativo web Node.js em seu computador local. Após a configuração bem-sucedida e execução do aplicativo web local, você terá a opção de hospedá-lo no Serviço de Aplicativo do Azure para facilitar o acesso e a escalabilidade. O fluxo de dados seguirá o caminho delineado na figura abaixo. O dispositivo simulado coletará dados de temperatura e umidade, os quais serão enviados para o Azure IoT Hub e exibidos através do Serviço de Aplicativo do Azure (Web App).  

Quando dados de telemetria são recebidos pelo ponto de extremidade do Hub IoT é possível, além de gerar a visualização em tempo real, configurar um aplicativo lógico que pode desencadear uma série de ações. Estas incluem o armazenamento dos dados em um blob no Armazenamento do Azure, o envio de alertas por e-mail em casos de anomalias nos dados e até mesmo a programação de visitas técnicas em resposta a falhas relatadas pelo dispositivo.As mensagens recebidas pelo seu hub IoT seguem um formato semelhante ao apresentado abaixo, contendo os dados de telemetria no corpo (body) e a propriedade temperatureAlert nas propriedades do aplicativo (applicationProperties). As propriedades do sistema não são exibidas. 

Com os dados de temperatura disponíveis no formato JSON apresentado acima, diversas ações podem ser desencadeadas para otimizar o 
gerenciamento e a resposta a condições específicas. Por exemplo, ao monitorar a propriedade "temperatureAlert" no conjunto de propriedades do aplicativo, é possível automatizar a detecção de anomalias térmicas. Caso a temperatura detectada ultrapasse um limiar crítico, configurando a propriedade como "true", sistemas automatizados podem ser acionados para notificar por e mail sobre a situação, alertar equipes responsáveis e armazenar os dados em um blob no Armazenamento do Azure para referência futura ou análise. Essa abordagem proporciona uma resposta proativa a condições adversas, permitindo a implementação eficiente de medidas corretivas ou preventivas com base nos dados em tempo real coletados dos sensores. 

Nesta missão prática, o foco inicial será na visualização dos dados de temperatura provenientes dos sensores, conforme apresentados no formato JSON fornecido. No entanto, é importante ressaltar que as ações implementadas durante esta etapa serão inicialmente limitadas à visualização em tempo real. O objetivo principal é proporcionar uma compreensão sólida do fluxo de dados e do processo de exibição no Serviço de Aplicativo do Azure. 

Entretanto, encorajamos os alunos a explorar e expandir ainda mais as funcionalidades. Com base no conhecimento adquirido, os participantes têm a oportunidade de desenvolver e incorporar novas funcionalidades ao aplicativo, como a integração de alertas automáticos, armazenamento avançado ou a implementação de outros recursos personalizados. Esta abordagem permite uma aprendizagem prática e flexível, incentivando a criatividade e a aplicação de conceitos em cenários mais complexos, à medida que os alunos aprimoram suas habilidades no gerenciamento de dados IoT. 

## Resultados Esperados

Ao finalizar esta atividade, espera-se que o aluno tenha realizado com sucesso a visualização em tempo real de dados provenientes de sensores conectados ao Azure Hub IoT. A visualização deverá ser realizada através de aplicativos locais como através do Serviço de Aplicativo do Azure. 

## Foram utilizados nesse projeto:

- Tecnologias:  Hub IoT (Microsoft Azure), Raspberry Pi Azure IoT Online Simulator, VSCode e uma Biblioteca pré-estabelecida (Azure-Samples/web-apps-node-iot-hub-data visualization).

## Imagem do Projeto em execução

<div align="center">
 <img src="https://i.imgur.com/2NuhOnc.png" height="200" />
</div>

<br>
  
[<- Retornar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo04)

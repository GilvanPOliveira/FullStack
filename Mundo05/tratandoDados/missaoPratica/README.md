# Nível 03 - Missão Prática - TRATANDO A IMENSIDÃO DOS DADOS

Através dessa atividade o aluno realizará a limpeza de um conjunto de dados, tornando-o apto a ser usado em tarefas de mineração/análise de dados.

## Contextualização

Como Analista de Dados, você recebeu, em um novo projeto, um conjunto de dados. Sua principal tarefa é tratar os dados desse conjunto a fim de que possam ser utilizados para a descoberta de conhecimento através de sua posterior análise e interpretação. Para tal tarefa, você deverá utilizar a linguagem Python e a biblioteca Pandas. O passo-a-passo de todo o processo de tratamento dos dados é apresentado a seguir, no roteiro de prática.

## Procedimentos

1. Para essa atividade você deverá, obrigatoriamente, utilizar o conjunto de dados (fornecido
anteriormente, na seção “Contextualização”) composto pelas colunas ID;Duration;Date;Pulse;Maxpulse;Calories
2. Crie um novo arquivo/script;
3. Leia o conteúdo do CSV fornecido, atentando-se para a necessidade ou não de incluir parâmetros adicionais como os relativos ao separador dos dados, a engine e o enconding;
4. Atribua os dados lidos a uma variável;
5. Verifique se os dados foram importados adequadamente:
    a. Imprima as informações gerais sobre o conjunto de dados;
    b. Imprima as primeiras e últimas N linhas do arquivo.
6. Crie uma nova variável e atribua a ela uma cópia do conjunto de dados original (variável criada no passo 4);
7. Nessa nova variável, contendo uma cópia dos dados:
    a. Substitua todos os valores nulos da coluna ‘Calories’ por 0;
    b. Imprima o conjunto de dados para verificar se a mudança acima foi aplicada com sucesso;
8. Ainda na nova variável:
    a. Substitua os valores nulos da coluna ‘Date’ por ‘1900/01/01’;
    b. Imprima o conjunto de dados e confira se a mudança foi aplicada com sucesso;
    c. Transforme os dados da coluna ‘Date’ em datetime usando o método ‘to_datetime’;
9. Tendo  seguido todas as instruções anteriores, ao executar o passo anterior você deverá ter encontrado um erro informando que o valor ‘1900/01/01’ não corresponde ao formato ‘%Y/%m/%d’. Para resolver esse problema:
    a. Substitua, na coluna ‘Date’, o valor ‘1900/01/01’ por ‘NaN’;
    b. Utilizando o método ‘to_datetime’, repita o passo de transformação dos dados da coluna ‘Date’ para datetime;
    c. Imprima o conjunto de dados para verificar se as mudanças acima foram aplicadas com sucesso;
10. Nesse ponto, você deverá ter esbarrado em outro erro, informando agora que o valor "20201226" não corresponde ao formato "'%Y/%m/%d'" . Você precisará, agora, na coluna ‘Date”, transformar especificamente esse valor, atualmente uma string, para o formato datetime. Para isso você deverá combinar os métodos ‘replace’ e ‘to_datetime’;
11. Após o passo anterior, execute novamente a transformação de todos os dados da coluna ‘Date’
para o formato datetime (usando o to_datetime). Imprima o conjunto de dados atual para verificar se todas as transformações foram executadas com sucesso;
12. Por fim, remova os registros contendo valores nulos. Nesse ponto, apenas a coluna ‘Date’ possui um registro que atende a essa premissa (linha 22). Logo, utilize-a como base para realizar a transformação solicitada;
13. Imprima o dataframe e verifique se todas as transformações foram executadas conforme solicitado nos passos anteriores.

<br>
  
[<- Retornar ao Projeto](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo05/tratandoDados)

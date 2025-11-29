# Nível 02 - RPG0015  - Vamos manter as informações!

Modelagem e implementação de um banco de dados simples, utilizando como base o SQL Server.

## 1º Procedimento | Criando o Banco de Dados

- Baixar e executar a ferramenta de modelagem:
    - a) Acessar o endereço [DbDesigner](https://sourceforge.net/projects/dbdesigner-fork/);
    - b) Efetuar o download do DBDesigner Fork no formato Zip;
    - c) Descompactar e executar o aplicativo;
      
- Definir o modelo de dados para um sistema com as características apresentadas nos tópicos seguintes:
    - a) Deve haver um cadastro de usuários para acesso ao sistema, os quais irão atuar como operadores para a compra e venda de produtos;
    - b) Deve haver um cadastro de pessoas físicas e pessoas jurídicas, com os dados básicos de identificação, localização e contato, diferenciando-
se apenas pelo uso de CPF ou CNPJ;
    - c) Deve haver um cadastro de produtos, contendo identificador, nome, quantidade e preço de venda;
    - d) Os operadores (usuários) poderão efetuar movimentos de compra para um determinado produto, sempre de uma pessoa jurídica, indicando
a quantidade de produtos e preço unitário;
    - e) Os operadores (usuários) poderão efetuar movimentos de venda para um determinado produto, sempre para uma pessoa física, utilizando
o preço de venda atualmente na base.

- Observação: No futuro sistema, criado na plataforma Java, será utilizada a herança na definição de pessoas físicas e jurídicas.

- Utilizar o SQL Server Management Studio para criar a base de dados modelada no tópico anterior:
    - a) Logar como usuário sa (System Administrator) e adicionar o logon loja, com senha loja;
    - b) Logar novamente com o usuário loja, que deve ter permissão para criação de tabelas e demais estruturas
do banco de dados;
    - c) Utilizar o editor de SQL para criar as estruturas do modelo;
    - d) Definir uma sequence para geração dos identificadores de pessoa, dado o relacionamento 1x1
com pessoa física ou jurídica;
    - e) Salvar o script completo para criação do banco de dados em um arquivo com extensão .sql.

## 2º Procedimento | Alimentando a Base

- Utilizar o SQL Server Management Studio para alimentar as tabelas com dados básicos do sistema:
    - a) Logar como usuário loja, senha loja;
    - b) Utilizar o editor de SQL para incluir dados na tabela de usuários, de forma a obter um conjunto.
      
    - Observação: Usuário op1, com senha op1, e usuário op2, com senha op2, sem criptografia. Para sistemas
reais seria necessário armazenar o hash da senha, codificado para Base64.

    - c) Inserir alguns produtos na base de dados, obtendo um conjunto como o que é apresentado a seguir

- Criar pessoas físicas e jurídicas na base de dados:
    - a) Obter o próximo id de pessoa a partir da sequence;
    - b) Incluir na tabela pessoa os dados comuns;
    - c) Incluir em pessoa física o CPF, efetuando o relacionamento com pessoa;
    - d) Incluir em pessoa jurídica o CNPJ, relacionando com pessoa.

- Criar algumas movimentações na base de dados, obtendo um conjunto como o que é apresentado a seguir, onde E representa Entrada e S representa Saída.

- Efetuar as seguintes consultas sobre os dados inseridos:
    - a) Dados completos de pessoas físicas;
    - b) Dados completos de pessoas jurídicas;
    - c) Movimentações de entrada, com produto, fornecedor, quantidade, preço unitário e valor total;
    - d) Movimentações de saída, com produto, comprador, quantidade, preço unitário e valor total;
    - e) Valor total das entradas agrupadas por produto;
    - f) Valor total das saídas agrupadas por produto;
    - g) Operadores que não efetuaram movimentações de entrada (compra);
    - h) Valor total de entrada, agrupado por operador;
    - i) Valor total de saída, agrupado por operador;
    - j) Valor médio de venda por produto, utilizando média ponderada.

 <br>
  
[<- Retornar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo03)

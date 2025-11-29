# Nível 04 - RPG0017  - Vamos integrar sistemas

Implementação de sistema cadastral com interface Web, baseado nas tecnologias de Servlets, JPA e JEE.

## 1º Procedimento | Camadas de Persistência e Controle

- Configurar a conexão com SQL Server via NetBeans e o pool de conexões no GlassFish Server 6.2.1:
    - a) Na aba de Serviços, divisão Banco de Dados, clique com o botão direito em Drivers e escolha Novo Driver;
    - b) Na janela que se abrirá, clicar em Add (Adicionar), selecionar o arquivo mssql-jdbc-12.2.0.jre8.jar, que é parte do arquivo zip encontrado no endereço seguinte, e finalizar com Ok: [mssql-
jdbc-12.2.0.jre8.jar](https://learn.microsoft.com/pt-br/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver16);
    - c) O reconhecimento será automático, e podemos definir uma conexão com o clique do botão direito sobre o driver e escolha de Conectar Utilizando;
    - d) Para os campos database, user e password, utilizar o valor loja, de acordo com os elementos criados em exercício anterior sobre a criação do banco de dados de exemplo, marcando também a opção Lembrar Senha;
    - e) Para o campo JDBC URL deve ser utilizada a seguinte expressão: jdbc:sqlserver://localhost:1433;databaseName=loja;encrypt=true;trustServerCertificate=true;
    - f) Clicar em Testar Conexão e, estando tudo certo, Finalizar;
    - g) Na divisão Servidores, verificar se o GlassFish 6.2.1 (ou posterior) está instalado, e caso não esteja, adicionar o servidor, via clique com o botão direito e escolha da opção Add Server, efetuando o download a partir da própria janela que se abrirá;
    - h) Copiar o arquivo mssql-jdbc-12.2.0.jre8.jar para o subdiretório lib, a partir do diretório de base do GlassFish;
    - i) Iniciar o servidor GlassFish a partir do NetBeans;
    - j) Através da linha de comando, executar o comando asadmin, no diretório bin do GlassFish;
    - k) No prompt do asadmin, executar o comando apresentado a seguir:
    <br>
    
    ````
    create-jdbc-connection-pool
    --datasourceclassname com.microsoft.sqlserver.jdbc.SQLServerDataSource
    --restype javax.sql.DataSource
    --property driverClass=com.microsoft.sqlserver.jdbc.SQLServerDriver:portNumber=1433:password=loja:user=loja:serverName=localhost:databaseName=loja:trustServerCertificate=true:URL="jdbc\\:sqlserver\\://localhost\\:1433\\;databaseName\\=loja\\;encrypt\\=true\\;trustServerCertificate\\=true\\;"
    ````

    - l) Será solicitado o identificador do pool, que será SQLServerPool;
    - m) Testar o pool de conexões através do comando apresentado a seguir: ping-connection-pool SQLServerPool;
    - n) Obtendo sucesso na operação, criar o registro JNDI, ainda no asadmin, através do comando apresentado a seguir:
    <br>
    
    ````
    create-jdbc-resource --connectionpoolid
    SQLServerPool jdbc/loja
    ````
    
    - o) Atualizar o servidor no ambiente do NetBeans e verificar se tudo foi gerado corretamente

- Criar o aplicativo corporativo no NetBeans:
    - a) Criar um projeto do tipo Ant..Java Enterprise..Enterprise Application;
    - b) Adotar o nome CadastroEE, com escolha do servidor GlassFish, além de plataforma Jakarta JEE 8;
    - c) Serão gerados três projetos, onde o principal encapsula o arquivo EAR, tendo os outros dois, CadastroEE-ejb e CadastroEE-war, como projetos dependentes, relacionados aos elementos JPA, JE e Web.

- Definir as camadas de persistência e controle no projeto CadastroEE-ejb:
    - a) Criar as entidades JPA através de New Entity Classes from Database;
    - b) Selecionar jdbc/loja como Data Source, e selecionar todas as tabelas;
    - c) No passo seguinte, definir o pacote como cadastroee.model, além de marcar a opção para criação do arquivo persistence.xml;
    - d) Em seguida, adicionar os componentes EJB ao projeto, através da opção New Session Beans for Entity Classes;
    - e) Selecionar todas as entidades, marcar a geração da interface local, além de definir o nome do pacote como cadatroee.controller.
    - f) Serão gerados todos os Session Beans, com o sufixo Facade, bem como as interfaces, com o sufixo FacadeLocal.

- Efetuar pequenos acertos no projeto, para uso do Jakarta:
    - a) Adicionar a biblioteca Jakarta EE 8 API ao projeto CadatroEE-ejb;
    - b) Criados os componentes e ajustadas as bibliotecas, o projeto deverá ficar como apresentado a seguir;
    - c) Modificar TODAS as importações de pacotes javax para jakarta, em todos os arquivos do projeto CadastroEE-ejb;
    - d) Na entidade Produto, mudar o tipo do atributo precoVenda para Float no lugar de BigDecimal;
    - e) Modificar o arquivo persistence.xml para o que é apresentado a seguir:
    <br>
    
    ````
    <?xml version="1.0" encoding="UTF-8"?>
    <persistence version="1.0"xmlns="http://java.sun.com/xml/ns/persistence"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/persistence http://java.sun.com/xml/ns/persistence/persistence_1_0.xsd">
      <persistence-unit name="CadastroEE-ejbPU"transaction-type="JTA">
        <jta-data-source>jdbc/loja</jta-data-source>
        <exclude-unlisted-classes>false</exclude-unlisted-classes>
        <properties/>
      </persistence-unit>
    </persistence>
    ````

- Criar um Servlet de teste no projeto CadastroEE-war:
    - a) Utilizar o clique do botão direito e escolha da opção New..Servlet;
    - b) Definir o nome do Servlet como ServletProduto, e nome do pacote como cadastroee.servlets;
    - c) Marcar opção Add information to deployment descriptor, algo que ainda é necessário quando o GlassFish 6 é utilizado;
    - d) Adicionar, no código do Servlet, a referência para a interface do EJB: @EJB ProdutoFacadeLocal facade;
    - e) Modificar a resposta do Servlet, utilizando o facade para recuperar os dados e apresentá-los na forma de lista HTML.

- Efetuar novos acertos no projeto, para uso do Jakarta:
    - a) Adicionar a biblioteca Jakarta EE Web 8 API ao projeto CadatroEE-war;
    - b) Criado o Servlet e ajustadas as bibliotecas;
    - c) Modificar TODAS as importações de pacotes javax para jakarta, em todos os arquivos do projeto CadastroEE-war;
    - d) Modificar o arquivo web.xml para o que é apresentado a seguir:
    <br>
    
    ````
    <?xml version="1.0" encoding="UTF-8"?>
    <web-app version="4.0" xmlns="http://xmlns.jcp.org/xml/ns/javaee"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd">
      <servlet>
        <servlet-name>ServletProduto</servlet-name>
        <servlet-class>cadastroee.servlets.ServletProduto</servlet-class>
      </servlet>
      <servlet>
        <servlet-name>ServletProdutoFC</servlet-name>
        <servlet-class>cadastroee.servlets.ServletProdutoFC</servlet-class>
      </servlet>
      <session-config>
        <session-timeout>30</session-timeout>
      </session-config>
    </web-app>
    ````

- Executar o projeto:
    - a) A execução deve ser efetuar com o uso de Run ou Deploy no projeto principal (CadastroEE), simbolizado por um triângulo;
    - b) Acessar o endereço a seguir, para testar o Servlethttp://localhost:8080/CadastroEE-war/ServletProduto;
    - c) Tendo alimentado a base via SQL Server Management Studio, ou pela aba de serviços do NetBeans;

## 2º Procedimento | Interface Cadastral com Servlet e JSPs

- Criar um Servlet com o nome ServletProdutoFC, no projeto CadastroEE-war:
    - a) Utilizar o padrão Front Controller;
    - b) Adicionar uma referência para ProdutoFacadeLocal, utilizando o nome facade para o atributo;
    - c) Apagar o conteúdo interno do método processRequest, e efetuar nele as modificações seguintes;
    - d) Capturar o parâmetro acao a partir do request, o qual poderá assumir os valores listar, incluir, alterar, excluir, formIncluir e formAlterar;
    - e) Definir a variável destino, contendo o nome do JSP de apresentação, que terá os valores ProdutoDados.jsp, para acao valendo formAlterar ou formIncluir, ou ProdutoLista.jsp, para as demais opções;
    - f) Para o valor listar, adicionar a listagem de produtos como atributo da requisição (request), com a consulta efetuada via facade;
    - g) Para o valor formAlterar, capturar o id fornecido como parâmetro do request, consultar a entidade via facade, e adicioná-la como atributo da requisição (request);
    - h) Para o valor excluir, capturar o id fornecido como parâmetro do request, remover a entidade através do facade, e adicionar a listagem de produtos como atributo da requisição (request);
    - i) Para o valor alterar, capturar o id fornecido como parâmetro do request, consultar a entidade através do facade, preencher os demais campos com os valores fornecidos no request, alterar os dados via facade e adicionar a listagem de produtos como atributo da requisição (request);
    - j) Para o valor incluir, instanciar uma entidade do tipo Produto, preencher os campos com os valores fornecidos no request, inserir via facade e adicionar a listagem de produtos como atributo da requisição (request);
    - k) Ao final redirecionar para destino via RequestDispatcher, obtido a partir do objeto request.

- Criar a página de consulta, com o nome ProdutoLista.jsp:
    - a) Incluir um link para ServletProdutoFC, com acao formIncluir, voltado para a abertura do formulário de inclusão;
    - b) Definir uma tabela para apresentação dos dados;
    - c) Recuperar a lista de produtos enviada pelo Servlet;
    - d) Para cada elemento da lista, apresentar id, nome, quantidade e preço como células da tabela;
    - e) Criar, também, de forma dinâmica, links para alteração e exclusão, com a chamada para ServletProdutoFC, passando as ações corretas e o id do elemento corrente;

- Criar a página de cadastro, com o nome ProdutoDados.jsp: 
    - a) Definir um formulário com envio para ServletProdutoFC, modo post;
    - b) Recuperar a entidade enviada pelo Servlet;
    - c) Definir a variável acao, com valor incluir, para entidade nula, ou alterar, quando a entidade é fornecida;
    - d) Incluir um campo do tipo hidden, para envio do valor de acao.
    - e) Incluir um campo do tipo hidden, para envio do id, apenas quando o valor de acao for alterar;
    - f) Incluir os campos para nome, quantidade e preço de venda, preenchendo os dados quando a entidade é fornecida;
    - g) Concluir o formulário com um botão de envio, com o texto adequado para as situações de inclusão ou alteração de dados;

- Testar as funcionalidades do sistema:
    - a) Listar os produtos com a chamada para o endereço seguinte: http://localhost:8080/CadastroEE-war/ServletProdutoFC?acao=listar;
    - b) Efetuar uma inclusão a partir do link da tela de listagem;
    - c) Efetuar uma alteração a partir do link dinâmico da listagem;
    - d) Efetuar uma exclusão a partir do link dinâmico da listagem.

## 3º Procedimento | Melhorando o Design da Interface

- Incluir as bibliotecas do framework Bootstrap nos arquivos ProdutoLista.jsp e ProdutoDados.jsp:
    - a) Visitar o site do BootStrap, no endereço https://getbootstrap.com/;
    - b) Rolar para baixo até encontrar a inclusão via CDN;
    - c) Clicar no botão para cópia do link CSS e colar na divisão head de cada uma das páginas JSP;
    - d) Clicar no botão para cópia do link para a biblioteca Java Script e colar na divisão head de cada uma das páginas JSP.

- Modificar as características de ProdutoLista.jsp:
    - a) Adicionar a classe container ao body;
    - b) Adicionar as classes btn, btn-primary e m-2 no link de inclusão;
    - c) Adicionar as classes table e table-striped na tabela;
    - d) Adicionar a classe table-dark ao thead;
    - e) Adicionar as classes btn, btn-primary e btn-sm no link de alteração;
    - f) Adicionar as classes btn, btn-danger e btn-sm no link de exclusão.

- Modificar as características de ProdutoDados.jsp:
    - a) Adicionar a classe container ao body;
    - b) Encapsule cada par label / input em div com classe mb-3;
    - c) Adicionar a classe form ao formulário;
    - d) Adicionar a classe form-label em cada label;
    - e) Adicionar a classe form-control em cada input;
    - f) Adicionar as classes btn e btn-primary ao botão de inclusão;
    - g) Ajustar as características para obter o design apresentado a seguir.

 <br>
  
[<- Retornar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo03)

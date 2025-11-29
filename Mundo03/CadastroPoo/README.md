# Nível 01 - RPG0014 - Iniciando o caminho pelo Java

Implementação de um cadastro de clientes em modo texto, com persistência em arquivos, baseado na tecnologia Java.

## 1º Procedimento | Criação das Entidades e Sistema de Persistência

- Criar um projeto do tipo Ant..Java Application no NetBeans, utilizando o nome CadastroPOO para o projeto.
- Criar um pacote com o nome "model", para as entidades e gerenciadores.
- No pacote model criar as entidades, com as seguintes características:
    - a) Classe Pessoa, com os campos id (inteiro) e nome (texto), método exibir, para impressão dos dados, construtor padrão e completo, além de getters e setters para todos os campos;
    - b) Classe PessoaFisica, herdando de Pessoa, com o acréscimo dos campos cpf (texto) e idade (inteiro), método exibir polimórfico, construtores, getters e setters;
    - c) Classe PessoaJuridica, herdando de Pessoa, com o acréscimo do campo cnpj (texto), método exibir polimórfico, construtores, getters e setters;
    - d) Adicionar interface Serializable em todas as classes.

- No pacote model criar os gerenciadores, com as seguintes características:
    - a) Classe PessoaFisicaRepo, contendo um ArrayList de PessoaFisica, nível de acesso privado, e métodos públicos inserir, alterar, excluir, obter e obterTodos, para gerenciamento das entidades contidas no ArrayList;
    - b) Classe PessoaJuridicaRepo, com um ArrayList de PessoaJuridica, nível de acesso privado, e métodos públicos inserir, alterar, excluir, obter e obterTodos, para gerenciamento das entidades contidas no ArrayList;
    - c) Em ambos os gerenciadores adicionar o método público persistir, com a recepção do nome do arquivo, para armazenagem dos dados no disco;
    - d) Em ambos os gerenciadores adicionar o método público recuperar, com a recepção do nome do arquivo, para recuperação dos dados do disco Os métodos persistir e recuperar devem ecoar (throws) exceções;
    - e) O método obter deve retornar uma entidade a partir do id;
    - f) Os métodos inserir e alterar devem ter entidades como parâmetros;
    - g) O método excluir deve receber o id da entidade para exclusão;
    - h) O método obterTodos deve retornar o conjunto completo de entidades.
  
- Alterar o método main da classe principal para testar os repositórios:
    - a) Instanciar um repositório de pessoas físicas (repo1);
    - b) Adicionar duas pessoas físicas, utilizando o construtor completo;
    - c) Invocar o método de persistência em repo1, fornecendo um nome de arquivo fixo, através do código;
    - d) Instanciar outro repositório de pessoas físicas (repo2);
    - e) Invocar o método de recuperação em repo2, fornecendo o mesmo nome de arquivo utilizado anteriormente;
    - f) Exibir os dados de todas as pessoas físicas recuperadas;
    - g) Instanciar um repositório de pessoas jurídicas (repo3);
    - h) Adicionar duas pessoas jurídicas, utilizando o construtor completo;
    - i) Invocar o método de persistência em repo3, fornecendo um nome de arquivo fixo, através do código;
    - j) Instanciar outro repositório de pessoas jurídicas (repo4);
    - k) Invocar o método de recuperação em repo4, fornecendo o mesmo nome de arquivo utilizado anteriormente;
    - l) Exibir os dados de todas as pessoas jurídicas recuperadas.
      
- Verificar as funcionalidades solicitadas e os arquivos gerados

## 2º Procedimento | Criação do Cadastro em Modo Texto

- Alterar o método main da classe principal do projeto, para implementação do cadastro em modo texto:
    - a) Apresentar as opções do programa para o usuário, sendo 1 para incluir, 2 para alterar, 3 para excluir, 4
para exibir pelo id, 5 para exibir todos, 6 para salvar dados, 7 para recuperar dados e 0 para finalizar a execução;
    - b) Selecionada a opção incluir, escolher o tipo (Física ou Jurídica), receber os dados a partir do teclado e
adicionar no repositório correto;
    - c) Selecionada a opção alterar, escolher o tipo (Física ou Jurídica), receber o id a partir do teclado, apresentar os dados atuais, solicitar os novos dados e alterar no repositório correto;
    - d) Selecionada a opção excluir, escolher o tipo (Física ou Jurídica), receber o id a partir do teclado e remover do repositório correto;
    - e) Selecionada a opção obter, escolher o tipo (Física ou Jurídica), receber o id a partir do teclado e apresentar os dados atuais para a entidade;
    - f) Selecionada a opção obterTodos, escolher o tipo (Física ou Jurídica) e apresentar os dados de todas as entidades do repositório correto;
    - g) Selecionada a opção salvar, solicitar o prefixo dos arquivos e persistir os dados nos arquivos [prefixo].fisica.bin e [prefixo].juridica.bin;
    - h) Selecionada a opção recuperar, solicitar o prefixo dos arquivos e obter os dados a partir dos arquivos [prefixo].fisica.bin e [prefixo].juridica.bin;
    - i) Nas opções salvar e recuperar devem ser tratadas as exceções;
    - j) Selecionada a opção sair, finalizar a execução do sistema.
      
- Verificar todas as funcionalidades solicitadas e os arquivos gerados.

 <br>
  
[<- Retornar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo03)

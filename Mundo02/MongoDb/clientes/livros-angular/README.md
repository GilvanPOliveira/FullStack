RPG0011 - Conhecendo outro framework

Implementação de front-end web com base no framework Angular, utilizando serviços e componentes na sintaxe TypeScript.

A partir dos objetivos listados abaixo, no final do projeto, você terá criado todos os elementos necessários para exibição e
entrada de dados no ambiente do Angular, tornando-se capacitado para lidar com contextos reais de aplicação do framework:
  - Implementar serviços injetáveis para o Angular, na sintaxe Type Script;
  - Implementar componentes, utilizando Type Script e modelos HTML;
  - Utilizar a biblioteca para gerenciamento de formulários no Angular;
  - Implementar a navegação interna do front-end com base em Angular;

1º Procedimento | Projeto Angular para o Catálogo de Livros

Configure o projeto do tipo Angular, de acordo com as instruções seguintes:
  - Executar o comando ng new livros-angular
  - Nas opções de criação, escolher Angular Routing como yes, e folhas de estilo do tipo CSS comum
  - Entrar no diretório do projeto com cd livros-angular;
  - Criar a classe Livro, através do comando ng g class Livro --skip-tests;
  - Criar a classe Editora, através do comando ng g class Editora --skip-tests;
  - Criar o controlador de editoras, como serviço do Angular, através do comando ng g s ControleEditora --skip-tests;
  - Criar o controlador de livros, como serviço do Angular, através do comando ng g s ControleLivros --skip-tests;
  - Criar o componente LivroLista, utilizando ng g c LivroLista --skip-tests;
  - Criar o componente LivroDados, utilizando ng g c LivroDados --skip-tests;

Codifique as entidades do sistema (Editora e Livro):
  1. No arquivo editora.ts, implementar o código para a classe Editora, com os campos codEditora, numérico, e nome, do tipo      texto;
  2. No arquivo livro.ts, implementar o código para a classe Livro, composta dos campos: codigo e codEditora, numéricos,         título e resumo, ambos do tipo texto, e autores, como um vetor de texto;

Obs.: Pode ser utilizado o mesmo código das entidades Editora e Livro na prática do nível 3 – "Meu Primeiro Framework".

Codifique o controlador de editoras, no arquivo controle-editora.service.ts:
  1. Importar a classe Editora;
  2. Definir o atributo editoras, como Array<Editora>, contendo ao menos três elementos no formato JSON, na classe               ControleEditoraService, que já estará configurada como serviço, devido à anotação Injectable;
  3. Adicionar os métodos getNomeEditora e getEditoras;
  4. Implementar o método getEditoras, com o retorno do vetor editoras;
  5. Implementar o método getNomeEditora, recebendo codEditora, do tipo numérico, e retornando o nome da editora, através        de uma operação filter sobre o vetor editoras;

Obs.: Pode ser utilizado o mesmo código das entidades Editora e Livro na prática do nível 3 – "Meu Primeiro Framework".

Codifique o controlador de livros, no arquivo controle-livros.service.ts:
  1. Importar a classe Livro;
  2. Definir o atributo livros, como Array<Livro>, contendo ao menos três elementos no formato JSON, na classe                   ControleLivrosService, que estará configurada como serviço, devido à anotação Injectable;
  3. Adicionar os métodos obterLivros, incluir e excluir Implementar o método obterLivros, com o retorno do vetor livros;
  4. Implementar o método incluir, recebendo um objeto do tipo Livro, que terá o código trocado pelo código mais alto do         vetor, incrementado de um, e depois será adicionado ao vetor;
  5. Implementar o método excluir, recebendo um código numérico, que irá encontrar o índice do livro com o código                fornecido, através de findIndex, e removê-lo com o uso de splice;

Obs.: Pode ser utilizado o mesmo código das entidades Editora e Livro na prática do nível 3 – "Meu Primeiro Framework".

Configure os serviços para injeção de dependência via construtor, adicionando ControleEditoraService e ControleLivrosService ao vetor providers, na anotação NgModule da classe AppModule, definida no arquivo app.module.ts

  - Inclua as dependências do Bootstrap no arquivo index.html, encontrado no diretório src do projeto livros-angular;
  - Implemente o código da classe LivroListaComponent, que é definida no arquivo livro-lista.component.ts, de acordo com as     instruções apresentadas a seguir:
      1. Definir o atributo público editoras, do tipo Array<Editora>, inicializado com um vetor vazio;
      2. Definir o atributo público livros, do tipo Array<Livro>, inicializado com um vetor vazio;
      3. Injetar os serviços ControleEditoraService e ControleLivrosService, nos atributos privados servEditora e                    servLivros, através do construtor;
      4. No método ngOnInit, implementação da interface OnInit, preencher o vetor editoras, invocando o método getEditoras           de servEditora, e o vetor livros, com a chamada para o método obterLivros de servLivros;
      5. Acrescentar o método excluir, estilo Arrow Function, que deve receber o código do livro, do tipo number, invocar o          método excluir de servLivros, e preencher novamente o vetor livros, com a chamada para o método obterLivros de              servLivros;
      6. Acrescentar o método obterNome, no estilo Arrow Function, que deve receber codEditora, do tipo number, invocar o            método getNomeEditora de servEditora, e retornar o nome da editora;

Implemente o template HTML do componente LivroListaComponent, definido no arquivo livro-lista.component.html, de acordo com as instruções seguintes:
    1. Definir a área principal (main), contendo o título da página e uma tabela para exibição dos livros, formatando com          as classes do Bootstrap;
    2. Utilizar a diretiva ngFor, na forma de atributo, para efetuar a repetição do trecho da linha de dados (tr) para cada        livro do vetor livros;
    3. Definir os valores para as divisões, em tags td, utilizando os atributos do livro corrente entre chaves duplas;
    4. Na divisão referente ao título, acrescentar um botão de exclusão, com a diretiva (click) invocando o método excluir,        com a passagem do atributo código do livro corrente;
    5. Na divisão referente à editora, invocar o método obterNome, passando o atributo codEditora do livrocorrente, entre          chaves duplas;
    6. Para os autores, apresentar os dados na forma de lista, a partir de uma tag ul, e a repetição da tag li via diretiva        ngFor, definindo o valor para cada elemento li com o nome do autor corrente entre chaves duplas;
    
Altere o template de AppComponent, no arquivo app.component.html, usando apenas o seletor app-livro-lista como conteúdo;
Execute com o comando ng serve, e acessar o endereço http://localhost:4200/ através de um navegador;
Ajuste as características para obter uma página como o exemplo abaixo:
![image](https://github.com/GilvanPOliveira/LivrariaAngular/assets/17534409/69020ba6-6cf0-4670-b379-2feacc9bf1d9)

2º Procedimento | Página de Cadastro e Sistema de Navegação

  - Abra o projeto livros-angular no ambiente do Visual Studio Code;
  - Configure a biblioteca padrão de formulários, adicionando FormsModule ao vetor imports, presente na anotação NgModule      da classe AppModule, definida no arquivo app.module.ts;
  - Configure o roteamento, no arquivo app-routing.module.ts, acrescentando no vetor routes as rotas "lista", apontando        para LivroListaComponent, e "dados", atribuída a LivroDadosComponent, além da rota padrão apontando para "lista";
  - Modifique o template de AppComponent no arquivo app.component.html de acordo com as seguintes instruções:
    1. Apagar o conteúdo atual do arquivo;
    2. Definir o menu de navegação, com tag nav, formatado pelo BootStrap, e utilizar âncoras com diretiva routerLink,            para acesso às rotas;
    3. Acrescentar um seletor router-outlet após o menu;

  - Implemente o código da classe LivroDadosComponent, definida no arquivo livro-dados.component.ts, de acordo com as          instruções apresentadas a seguir:
      1. Definir o atributo público livro, do tipo Livro, instanciado via construtor padrão da classe Livro;
      2. Definir o atributo público autoresForm, do tipo texto, inicializado vazio;
      3. Definir o atributo público editoras, do tipo Array<Editora>, inicializado com um vetor vazio;
      4. Injetar os serviços ControleEditoraService e ControleLivrosService, nos atributos privados servEditora e                   servLivros, através do construtor;
      5. Injetar o roteador (Router) no atributo privado router, via construtor;
      6. No método ngOnInit, implementação da interface OnInit, preencher o vetor editoras, invocando o método getEditoras          de servEditora;
      7. Acrescentar o método incluir, estilo Arrow Function, que deve preencher o atributo autores, do livro, com o valor          de autoresForm separado pelas quebras de linha, através do método split, invocar o método incluir de servLivros,           com a passagem do livro no parâmetro, e navegar para a rota "/lista", através do método navigateByUrl do objeto            router;
    
Implemente o template HTML de LivroDadosComponent, definido no arquivo livro-dados.component.html, de acordo com as instruções seguintes:
    1. Definir a área principal (main), com o título da página e um formulário para inclusão do livro, formatado através          do Bootstrap;
    2. Associar a diretiva (submit), na tag form, ao método incluir, e adicionar o atributo ngNativeValidate, para uso das        restrições de campo do HTML 5;
    3. Adicionar um campo de entrada obrigatório, do tipo text, associado a livro.titulo através da diretiva [(ngModel)]; 
    4. Adicionar uma entrada do tipo textarea, associada a livro.resumo via diretiva [(ngModel)]; 
    5. Utilizar uma lista de seleção (combo) para as editoras, com as opções sendo geradas via ngFor, tendo como origem o         vetor de nome editoras, e relacionando codEditora ao valor da opção e nome para o texto;
    6. Relacionar a lista com livro.codEditora, através da diretiva [(ngModel)], e tornar a seleção obrigatória;
    7. Adicionar uma entrada do tipo textarea, associada a autoresForm através da diretiva [(ngModel)];
    8. Adicionar um botão de submissão ao final;

Execute com o comando ng serve, e acesse o endereço http://localhost:4200/ através de um navegador;
    - Teste a navegação do sistema, a partir do menu da parte superior;
    - Teste a inclusão de livros e as restrições definidas via HTML;
    - Ajuste as características para obter uma página como o exemplo abaixo:
    ![image](https://github.com/GilvanPOliveira/LivrariaAngular/assets/17534409/7b5cfec8-dfbb-4b2d-91ec-7e1a796370a0)










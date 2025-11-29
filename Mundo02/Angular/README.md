# Nível 04 - RPG0011 - Conhecendo outro framework - Angular, TypeScript e Css

Implementação de front-end web com base no framework Angular, utilizando serviços e componentes na sintaxe TypeScript.

A partir dos objetivos listados abaixo, no final do projeto, você terá criado todos os elementos necessários para exibição e entrada de dados no ambiente do Angular, tornando-se capacitado para lidar com contextos reais de aplicação do framework:
  - Implementar serviços injetáveis para o Angular, na sintaxe Type Script;
  - Implementar componentes, utilizando Type Script e modelos HTML;
  - Utilizar a biblioteca para gerenciamento de formulários no Angular;
  - Implementar a navegação interna do front-end com base em Angular.

## 1º Procedimento | Projeto Angular para o Catálogo de Livros

- Configure o projeto do tipo Angular, de acordo com as instruções seguintes:
  - a) Executar o comando ng new livros-angular;
  - b) Nas opções de criação, escolher Angular Routing como yes, e folhas de estilo do tipo CSS comum;
  - c) Entrar no diretório do projeto com cd livros-angular;
  - d) Criar a classe Livro, através do comando ng g class Livro --skip-tests;
  - e) Criar a classe Editora, através do comando ng g class Editora --skip-tests;
  - f) Criar o controlador de editoras, como serviço do Angular, através do comando ng g s ControleEditora --skip-tests;
  - g) Criar o controlador de livros, como serviço do Angular, através do comando ng g s ControleLivros --skip-tests;
  - h) Criar o componente LivroLista, utilizando ng g c LivroLista --skip-tests;
  - i) Criar o componente LivroDados, utilizando ng g c LivroDados --skip-tests.

- Codifique as entidades do sistema (Editora e Livro):
  - a) No arquivo editora.ts, implementar o código para a classe Editora, com os campos codEditora, numérico, e nome, do tipo texto;
  - b) No arquivo livro.ts, implementar o código para a classe Livro, composta dos campos: codigo e codEditora, numéricos, título e resumo, ambos do tipo texto, e autores, como um vetor de texto;
  - Obs.: Pode ser utilizado o mesmo código das entidades Editora e Livro na prática do nível 3 – "Meu Primeiro Framework".

- Codifique o controlador de editoras, no arquivo controle-editora.service.ts:
  - a) Importar a classe Editora;
  - b) Definir o atributo editoras, como Array<Editora>, contendo ao menos três elementos no formato JSON, na classe ControleEditoraService, que já estará configurada como serviço, devido à anotação Injectable;
  - c) Adicionar os métodos getNomeEditora e getEditoras;
  - d) Implementar o método getEditoras, com o retorno do vetor editoras;
  - e) Implementar o método getNomeEditora, recebendo codEditora, do tipo numérico, e retornando o nome da editora, através de uma operação filter sobre o vetor editoras;
  - Obs.: Pode ser utilizado o mesmo código das entidades Editora e Livro na prática do nível 3 – "Meu Primeiro Framework".

- Codifique o controlador de livros, no arquivo controle-livros.service.ts:
  - a) Importar a classe Livro;
  - b) Definir o atributo livros, como Array<Livro>, contendo ao menos três elementos no formato JSON, na classe ControleLivrosService, que estará configurada como serviço, devido à anotação Injectable;
  - c) Adicionar os métodos obterLivros, incluir e excluir Implementar o método obterLivros, com o retorno do vetor livros;
  - d) Implementar o método incluir, recebendo um objeto do tipo Livro, que terá o código trocado pelo código mais alto do vetor, incrementado de um, e depois será adicionado ao vetor;
  - e) Implementar o método excluir, recebendo um código numérico, que irá encontrar o índice do livro com o código fornecido, através de findIndex, e removê-lo com o uso de splice;
  - Obs.: Pode ser utilizado o mesmo código das entidades Editora e Livro na prática do nível 3 – "Meu Primeiro Framework".

- Configure os serviços para injeção de dependência via construtor, adicionando ControleEditoraService e ControleLivrosService ao vetor providers, na anotação NgModule da classe AppModule, definida no arquivo app.module.ts.

  - Inclua as dependências do Bootstrap no arquivo index.html, encontrado no diretório src do projeto livros-angular.
  - Implemente o código da classe LivroListaComponent, que é definida no arquivo livro-lista.component.ts, de acordo com as instruções apresentadas a seguir:
      - a) Definir o atributo público editoras, do tipo Array<Editora>, inicializado com um vetor vazio;
      - b) Definir o atributo público livros, do tipo Array<Livro>, inicializado com um vetor vazio;
      - c) Injetar os serviços ControleEditoraService e ControleLivrosService, nos atributos privados servEditora e servLivros, através do construtor;
      - d) No método ngOnInit, implementação da interface OnInit, preencher o vetor editoras, invocando o método getEditoras de servEditora, e o vetor livros, com a chamada para o método obterLivros de servLivros;
      - e) Acrescentar o método excluir, estilo Arrow Function, que deve receber o código do livro, do tipo number, invocar o método excluir de servLivros, e preencher novamente o vetor livros, com a chamada para o método obterLivros de servLivros;
      - f) Acrescentar o método obterNome, no estilo Arrow Function, que deve receber codEditora, do tipo number, invocar o método getNomeEditora de servEditora, e retornar o nome da editora.

- Implemente o template HTML do componente LivroListaComponent, definido no arquivo livro-lista.component.html, de acordo com as instruções seguintes:
    - a) Definir a área principal (main), contendo o título da página e uma tabela para exibição dos livros, formatando com as classes do Bootstrap;
    - b) Utilizar a diretiva ngFor, na forma de atributo, para efetuar a repetição do trecho da linha de dados (tr) para cada livro do vetor livros;
    - c) Definir os valores para as divisões, em tags td, utilizando os atributos do livro corrente entre chaves duplas;
    - d) Na divisão referente ao título, acrescentar um botão de exclusão, com a diretiva (click) invocando o método excluir, com a passagem do atributo código do livro corrente;
    - e) Na divisão referente à editora, invocar o método obterNome, passando o atributo codEditora do livrocorrente, entre chaves duplas;
    -f) Para os autores, apresentar os dados na forma de lista, a partir de uma tag ul, e a repetição da tag li via diretiva ngFor, definindo o valor para cada elemento li com o nome do autor corrente entre chaves duplas.
    
- Altere o template de AppComponent, no arquivo app.component.html, usando apenas o seletor app-livro-lista como conteúdo;
Execute com o comando ng serve, e acessar o endereço http://localhost:4200/ através de um navegador.

## 2º Procedimento | Página de Cadastro e Sistema de Navegação

  - Abra o projeto livros-angular no ambiente do Visual Studio Code;
  - Configure a biblioteca padrão de formulários, adicionando FormsModule ao vetor imports, presente na anotação NgModule da classe AppModule, definida no arquivo app.module.ts;
  - Configure o roteamento, no arquivo app-routing.module.ts, acrescentando no vetor routes as rotas "lista", apontando para LivroListaComponent, e "dados", atribuída a LivroDadosComponent, além da rota padrão apontando para "lista";
  - Modifique o template de AppComponent no arquivo app.component.html de acordo com as seguintes instruções:
      - a) Apagar o conteúdo atual do arquivo;
      - b) Definir o menu de navegação, com tag nav, formatado pelo BootStrap, e utilizar âncoras com diretiva routerLink, para acesso às rotas;
      - c) Acrescentar um seletor router-outlet após o menu.

  - Implemente o código da classe LivroDadosComponent, definida no arquivo livro-dados.component.ts, de acordo com as instruções apresentadas a seguir:
      - a) Definir o atributo público livro, do tipo Livro, instanciado via construtor padrão da classe Livro;
      - b) Definir o atributo público autoresForm, do tipo texto, inicializado vazio;
      - c) Definir o atributo público editoras, do tipo Array<Editora>, inicializado com um vetor vazio;
      - d) Injetar os serviços ControleEditoraService e ControleLivrosService, nos atributos privados servEditora e servLivros, através do construtor;
      - e) Injetar o roteador (Router) no atributo privado router, via construtor;
      - f) No método ngOnInit, implementação da interface OnInit, preencher o vetor editoras, invocando o método getEditoras de servEditora;
      - g) Acrescentar o método incluir, estilo Arrow Function, que deve preencher o atributo autores, do livro, com o valor de autoresForm separado pelas quebras de linha, através do método split, invocar o método incluir de servLivros, com a passagem do livro no parâmetro, e navegar para a rota "/lista", através do método navigateByUrl do objeto router.
    
- Implemente o template HTML de LivroDadosComponent, definido no arquivo livro-dados.component.html, de acordo com as instruções seguintes:
    - a) Definir a área principal (main), com o título da página e um formulário para inclusão do livro, formatado através do Bootstrap;
    - b) Associar a diretiva (submit), na tag form, ao método incluir, e adicionar o atributo ngNativeValidate, para uso das restrições de campo do HTML 5;
    - c) Adicionar um campo de entrada obrigatório, do tipo text, associado a livro.titulo através da diretiva [(ngModel)]; 
    - d) Adicionar uma entrada do tipo textarea, associada a livro.resumo via diretiva [(ngModel)]; 
    - e) Utilizar uma lista de seleção (combo) para as editoras, com as opções sendo geradas via ngFor, tendo como origem o vetor de nome editoras, e relacionando codEditora ao valor da opção e nome para o texto;
    - f) Relacionar a lista com livro.codEditora, através da diretiva [(ngModel)], e tornar a seleção obrigatória;
    - g) Adicionar uma entrada do tipo textarea, associada a autoresForm através da diretiva [(ngModel)];
    - h) Adicionar um botão de submissão ao final.

- Execute com o comando ng serve, e acesse o endereço http://localhost:4200/ através de um navegador;
    - a) Teste a navegação do sistema, a partir do menu da parte superior;
    - b) Teste a inclusão de livros e as restrições definidas via HTML.
  
  <br>

- [Acessar Deploy](https://full-stack-mundo02-angular.vercel.app/lista)

 <br>
 
[<- Retornar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo02)




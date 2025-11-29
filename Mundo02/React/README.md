# Nível 03 - (parte 01) - RPG0010 - Meu primeiro framework

Criação de front-end web com base em React JS ou Next JS, com utilização de bases de teste JSON, em memória, para ambas as plataformas.

A partir dos objetivos listados abaixo, no final do projeto, você terá criado duas versões de um front-end web, com base nas tecnologias React JS e Next JS, tornando-se capacitado para lidar com contextos reais de aplicação das tecnologias abordadas:

- Explorar a sintaxe Type Script na implementação de entidades e controladores, para projetos React JS e Next JS;
- Criar um front-end para Web completo, baseado em componentes reutilizáveis, através do React JS;
- Criar um front-end para Web completo, baseado em componentes reutilizáveis, através do Next JS;
- Utilizar o Next JS para a definição de uma API no estilo REST, de uso interno, com acesso via função fetch, oferecida no ambiente padrão do Java Script.

## 1º Procedimento | Listagem de Livros no React JS

- Crie o projeto e inicie o ambiente de desenvolvimento:
    - a) Abrir a linha de comandos;
    - b) Executar npx create-react-app livros-react --template typescript;
    - c) Entrar no diretório do projeto criado, executando cd livros-react;
    - d) Abrir o Visual Studio Code, executando code .\;
- No ambiente de desenvolvimento do Visual Studio Code, criar a estrutura básica do projeto:
    - a) Adicionar um folder com o nome modelo;
    - b) Criar, no folder modelo, os arquivos "Editora.ts" e "Livro.ts" (TypeScript);
    - c) Adicionar um folder com o nome controle;
    - d) Criar, no folder controle, "ControleEditora.ts" e "ControleLivros.ts";
    - e) Incluir as dependências do Bootstrap no arquivo index.html, encontrado no folder public;
    - f) Criar os arquivos "LivroDados.js" e "LivroLista.js" (JavaScript) em src;
- Codifique as entidades do sistema (Editora e Livro):
    - a) No arquivo Editora.ts, criar a classe Editora, com os campos codEditora, numérico, e nome, do tipo texto;
    - b) No arquivo Livro.ts, criar a classe Livro, composta dos campos: codigo e codEditora, numéricos, título e resumo, ambos do tipo texto, e autores, como um vetor de texto;
- Codifique o controlador de editoras, no arquivo ControleEditora.ts:
    - a) Importar a classe Editora;
    - b) Definir a variável editoras, como Array<Editora>, contendo ao menos três elementos, no formato JSON;
    - c) Criar a classe ControleEditora, contendo os métodos getNomeEditora e getEditoras;
    - d) Implementar o método getEditoras, com o retorno do vetor editoras;
    - e) Implementar o método getNomeEditora, recebendo codEditora, do tipo numérico, e retornando o nome da editora, através de uma operação filter sobre o vetor editoras;
- Codifique o controlador de livros, no arquivo ControleLivros.ts:
    - a) Importar a classe Livro;
    - b) Definir a variável livros, como Array<Livro>, contendo ao menos três elementos, no formato JSON;
    - c) Criar a classe ControleLivro, contendo os métodos obterLivros, incluir e excluir;
    - d) Implementar o método obterLivros, com o retorno do vetor livros;
    - e) Implementar o método incluir, recebendo um objeto do tipo Livro, que terá o código trocado pelo código mais alto do vetor, incrementado de um, e depois será adicionado ao vetor;
    - f) Implementar o método excluir, recebendo um código numérico, que irá encontrar o índice do livro com o código fornecido, através de findIndex, e removê-lo com o uso de splice;
- Codifique o componente LivroLista, no arquivo LivroLista.js:
    - a) Instanciar um controlador de livros, com o nome controleLivro, e um de editoras, com o nome controleEditora;
    - b) Definir o componente auxiliar LinhaLivro, com parâmetro props, para a recepção dos atributos livro e excluir, a partir da aplicação do seletor;
    - c) Definir em LinhaLivro o atributo nomeEditora, invocando o método getNomeEditora, com a passagem de codEditora, atributo do livro;
    - d) No retorno do componente, deverá ser fornecida uma linha de tabela, ou tr, com os valores dos atributos do livro nas tags td;
    - e) Abaixo do título, na primeira célula, adicionar um botão de exclusão, com o recebimento de um método que será fornecido no atributo excluir;
    - f) Exibir os autores como uma lista HTML, efetuando a geração dos itens através do método map, e tendo como key o valor de index;
    - g) Definir o componente LivroLista, exportado por padrão, sem parâmetros;
    - h) Em LivroLista, definir as propriedades livros, do tipo vetor, e carregado, booleana, através de useState;
    - i) Utilizar o Hook useEffect, que deve alimentar livros com a chamada para obterLivros, do controlador, e alterar carregado para true, tendo ainda como balizador o atributo carregado;
    - j) Acrescentar o método excluir, estilo arrow function, que deve receber o código do livro, invocar o método excluir do controlador, e setar o valor de carregado como false, para forçar o redesenho da página;
    - k) No retorno do componente deve ser fornecida a área principal (main), contendo o título da página e uma tabela para exibição dos livros;
    - l) Utilizar o método map, de livros, para a geração das linhas de dados como componentes do tipo LinhaLivro, tendo como parâmetros o livro atual do vetor, excluir invocando o método excluir de LivroLista, com a passagem do código do livro corrente, e key associado ao código do livro;
- Altere o arquivo App.tsx, retornando em App o componente LivroLista;
- Verifique os resultados obtidos através de um navegador, lembrando de testar a funcionalidade da exclusão de livro.

## 2º Procedimento | Página de Cadastro e Navegação no React JS

- Ajuste as rotas de navegação do sistema livros-react:
    - a) Adicionar o pacote de navegação com npm instal react-router-dom;
    - b) Definir o componente LivroDados, em LivroDados.js, inicialmente com o retorno de uma tag main e uma mensagem de "Olá mundo", devendo ser exportado por padrão;
    - c) Alterar o arquivo App.tsx, com a adição das rotas e menu de navegação;
    - d) No retorno do componente deve ser fornecido um BrowserRouter, onde as rotas, na divisão Routes, serão a raiz, apontando para LivroLista, e dados, apontando para LivroDados;
    - e) Precedendo a divisão Routes, definir o menu de navegação, com tag nav, formatado pelo BootStrap, e utilizar elementos do tipo Link, no lugar das âncoras, para acesso às rotas definidas;
- Implemente o componente LivroDados, no arquivo LivroDados.js:
    - a) Instanciar um controlador de livros, com o nome controleLivro, e um de editoras, com o nome controleEditora;
    - b) Em LivroDados, definir o vetor opcoes, invocando o método getEditoras, com o mapeamento de codEditora para value e nome para text;
    - c) Definir as propriedades titulo, resumo e autores, todas de texto, através de useState, além de codEditora, iniciada com a posição zero de opcoes;
    - d) Acrescentar o atributo navigate, recebendo o Hook useNavigate;
    - e) Definir o método tratarCombo, tendo o evento como parâmetro, onde deve ocorrer a chamada para setCodEditora, com a passagem do value de uma combo de seleção (target do evento) convertido para number;
    - f) Definir o método incluir, com a recepção de um evento, que primeiro deve eliminar o comportamento padrão com preventDefault, em seguida instanciar um livro com código valendo zero, o valor das propriedades de estado, e autores
    separados por linha (split), invocar o método incluir do controlador de livros, e navegar para a página de listagem, na raiz;
    - g) No retorno do componente deve ser fornecida a área principal (main), contendo o título da página e um formulário para inclusão do livro, sendo composto dos campos referentes às propriedades de estado, com ligação através de value e onChange;
    - h) Utilizar uma lista de seleção (combo) para as editoras, com as opções geradas pelo método map, de opcoes, e associando onChange ao método tratarCombo;
    - i) Relacionar o evento onSubmit, do formulário, ao método incluir, além de adicionar um botão de submissão ao final;
  
  <br>

- [Deploy efetuado na parte 02](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo02/Next)
  
 <br>
  
[<- Retornar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo02)

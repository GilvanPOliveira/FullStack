# Nível 02 - RPG0009 - Descobrindo o Java Script

Exemplos de diferentes formas de utilização do Java Script no lado cliente, uso de JSON na transmissão de dados e framework VUE JS.

A partir dos objetivos listados abaixo, no final do projeto, você terá experimentado diversas formas de utilização do Java Script no lado cliente, tornando-se capacitado para lidar com contextos reais de aplicação das tecnologias abordadas.

- Explorar a sintaxe Java Script na implementação de algoritmos;
- Manipular os elementos da página através do DOM;
- Utilizar o formato JSON para repositórios e transmissão de dados;
- Utilizar framework VUE JS na construção dinâmica de elementos HTML.

## 1º Procedimento | Ordenando com Java Script e DOM

- Crie um diretório com o nome "exemplosjs" e abra o Visual Studio Code;
- Crie um arquivo com o nome "ordenando.js", no ambiente de edição;
- Modifique o conteúdo do arquivo com a definição das seguintes funções, todas criadas no padrão Arrow Function:

  - a) Função swap, com o objetivo de trocar os valores de duas posições de um vetor, tendo como parâmetros de entrada o vetor e as posições;
  - b) Função shuffle, com o objetivo de embaralhar os elementos de um vetor, tendo como parâmetros de entrada o vetor e a quantidade de trocas;
  - c) Função bubble_sort, para ordenar um vetor de inteiros com o algoritmo Bubble Sort, tendo como parâmetro de entrada o vetor de inteiros;
  - d) Função selection_sort, para ordenar um vetor de inteiros utilizando o algoritmo Selection Sort, tendo como parâmetro de entrada o vetor de valores inteiros;
  - e) Função quick_sort, para ordenar um vetor de inteiros com o algoritmo Quick Sort, recursivo, tendo como parâmetros o vetor, posição inicial e posição final;
  - f) Função particionamento, de apoio a quick_sort, tendo como parâmetros o vetor, posição inicial, posição final e valor do pivot.

- Crie uma página com o nome "ordenando.html", no ambiente de edição;
- Defina a estrutura básica da página, digitando "html" seguindo de CTRL + Espaço, e selecionando a opção HTML:5;
- Modifique o conteúdo do arquivo para obter as seguintes características:
  - a) Alterar a linguagem para pt-br;
  - b) Incluir a biblioteca ordenando.js em uma tag script;
  - c) Definir um campo de entrada numérico, com o id valor;
  - d) Adicionar um botão com texto Adicionar, efetuando a chamada para uma função de nome add no clique;
  - e) Definir um campo de seleção com as opções Blubble Sort, Selection Sort e Quick Sort, com Bubble Sort selecionado por padrão;
  - f) Adicionar um botão com o texto Ordenar, chamando a função ordenar;
  - g) Adicionar um botão com o texto Misturar, chamando a função misturar;
  - h) Definir uma lista (ul) com id valores, sem opções internas;
  - i) Definir um trecho script, com as funções add, ordenar e misturar, todas no estilo clássico de escrita do Java Script e sem parâmetros.
- Implemente a função add, para adicionar o valor digitado no campo de entrada à lista de valores, de acordo com os passos seguintes:
  - a) Capturar o campo de entrada com id valor via getElementById;
  - b) Capturar a lista com id valores;
  - c) Criar uma variável node, com um elemento li definido via createElement;
  - d) Definir um nó de texto, com o valor do campo de entrada, e incluí-lo como filho de node;
  - e) Adicionar o elemento node à lista valores.
- Implemente a função ordenar, para a ordenação da lista de valores, de acordo com os passos apresentados a seguir:
  - a) Capturar a lista de valores e a lista de seleção via getElementById;
  - b) Através do atributo children, obter cada nó da lista de valores e adicionar o conteúdo do item, convertido para inteiro, em um vetor;
  - c) Os conteúdos podem ser obtidos via innerHTML e convertidos com eval;
  - d) Escolher o algoritmo de ordenação adequado, a partir do selectedIndex da lista de seleção, e aplicar ao vetor;
  - e) Utilizar os operadores map e reduce, do vetor, para gerar os novos itens da lista de valores, substituindo o conteúdo da lista via innerHTML.
- Implemente a função misturar, para embaralhar os valores da lista, de acordo com os passos apresentados a seguir:
  - a) Capturar a lista de valores via getElementById;
  - b) Através do atributo children, obter cada nó da lista de valores e adicionar o conteúdo do item, convertido para inteiro, em um vetor;
  - c) Os conteúdos podem ser obtidos via innerHTML e convertidos com eval;
  - d) Aplicar a função shuffle ao vetor;
  - e) Utilizar os operadores map e reduce, do vetor, para gerar os novos itens da lista de valores, substituindo o conteúdo da lista via innerHTML.

## 2º Procedimento | Página de Receitas Dinâmica

- Crie uma página com o nome "receitas.html", no ambiente de edição;
- Defina a estrutura básica da página, digitando html seguido de CTRL + Espaço, e selecionando a opção HTML:5;
- Modifique o conteúdo do arquivo para obter as seguintes características:
  - a) Alterar a linguagem para pt-br;
  - b) Incluir a folha de estilos do Bootstrap;
  - c) Incluir o título "Catálogo de Receitas";
  - d) Definir a área principal como container-fluid;
  - e) Utilizar fundo bg-warning;
  - f) Definir uma div com apresentação no modo flex-wrap, identificada como pnlCatalogo, para apresentação dos painéis para as receitas;
  - g) Acrescentar um trecho em Java Script;
  - h) Organizar os dados de receitas em um vetor de elementos JSON, com os campos título, imagem, preparo e ingredientes, onde este último é um vetor de elementos texto;
  - i) Definir as funções getListaIngredientes e getCard, ambos com parâmetro receita, relacionados à estrutura adotada no segmento JSON;
  - j) Definir a função preencheCatalogo, sem parâmetros, invocada no evento onload do elemento body.
- Acrescente as imagens das receitas, preferencialmente no formato PNG, para posterior exibição nos painéis;
- Implemente a função getListaIngredientes, para geração da lista em HTML:
  - a) Iniciar a lista em uma variável texto com a tag ul;
  - b) Utilizar map e reduce, sobre o campo ingredientes da receita, para obter a representação como itens de lista, baseados na tag li, concatenando na variável de texto;
  - c) Finalizar concatenando o fechamento de ul e retornando a lista HTML.
- Implemente a função getCard, para geração do painel da receita:
  - a) Utilizar substituição direta, com o texto entre sinais de crase;
  - b) Definir, no texto de retorno, uma div com classe card e largura de 250px;
  - c) Incluir uma imagem, com a classe card-img-top, tendo como origem o campo imagem da receita;
  - d) Incluir uma div com classe card-body, referente ao corpo do painel;
  - e) Adicionar um título ao corpo, utilizando o campo titulo da receita, e classe card-title para formatação;
  - f) Adicionar uma div com classe card-text ao corpo, apresentando a lista de ingredientes, obtida via getListaIngredientes, um separador hr e texto do campo preparo da receita.
- Implemente a função preencheCatalogo, para exibição do conjunto de receitas na página, ao nível da div pnlCatalogo:
  - a) Capturar o elemento pnlCatalogo através de getElementById;
  - b) Através de map e reduce, obter o texto HTML para os painéis de receita, formatados com base na função getCard, a partir do vetor JSON;
  - c) Alterar o innerHTML de pnlCatalogo para o texto HTML gerado.

## 3º Procedimento | Transmissão de Dados e VUE JS

- Acesse o endereço de teste REST [reqres.in](https://reqres.in/api/users?per_page=10), e observar os dados que são retornados no formato JSON Crie uma página com o nome "usuarios.html", no ambiente de edição;
- Defina a estrutura básica da página, digitando html seguido de CTRL + Espaço, e selecionando a opção HTML:5;
- Modifique o conteúdo do arquivo para obter as seguintes características:
  - a) Alterar a linguagem para pt-br;
  - b) Incluir a folha de estilos do Bootstrap;
  - c) Incluir a biblioteca Java Script do VUE JS;
  - d) Se necessário, incluir a biblioteca Java Script do JQuery;
  - e) Aplicar as classes container e bg-warning ao body;
  - f) Definir um título h1 com o texto "Usuários de Teste via REST";
  - g) Acrescentar uma referência ao site [reqres.in](http://reqres.in/), responsável por fornecer os dados de teste, no formato JSON, de forma gratuita;
  - h) Incluir uma div com a identificação usuarios e classe CSS container-fluid;
  - i) Na div de usuários incluir uma div com a classe row, representando uma linha de exibição para os painéis de usuários;
  - j) No corpo da segunda div, acrescentar uma div para o painel de usuário, formatada como card, exibição em 3 colunas, espaçamento interno p-2 e tamanho da margem como m-3;
  - k) Acrescentar um atributo de repetição v-for, do VUE JS, baseado na regra (user,index) in users, e um atributo :key, relacionado ao index ;
  - l) No interior do card, definir uma imagem, formatada como card-img-top, tendo a origem definida via :src, do VUE JS, com valor user.avatar;
  - m) Definir uma div para o corpo do painel, formatado como card-body;
  - n) Acrescentar um título ao corpo do painel, formatado como card-title, e usando os valores {{user.first_name}} e {{user.last_name}};
  - o) Acrescentar um parágrafo ao corpo do painel, formatado como card-text, tendo com conteúdo {{user.email}};
  - p) Definir um trecho Java Script para a definição do objeto VUE JS.
- Implemente o objeto de controle VUE JS:

  - a) Definir um objeto app, do tipo Vue;
  - b) Configurar o elemento alvo (el) como #usuarios, relacionado ao painel principal, utilizado como container;
  - c) Configurar o atributo de dados (data) como uma função retornando o vetor users, inicialmente vazio;
  - d) Configurar o evento mounted, com a chamada para loadUsers, visando o preenchimento do vetor users, utilizado como fonte de dados e na regra de repetição para os painéis;
  - e) Configurar o atributo methods, contendo a função loadUsers;
  - f) Implementar a função loadUsers para preenchimento do vetor users com os dados JSON fornecidos por [reqres.in](https://reqres.in/api/users?per_page=10), podendo ser utilizado JQuery AJAX, XMLHttpRequest ou Fetch API.

  <br>

- [Acessar Deploy](https://mundo02-vue.vercel.app/)

 <br>
  
[<- Retornar ao Mundo02](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo02)

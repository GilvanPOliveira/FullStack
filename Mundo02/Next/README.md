# Nível 03 - (parte 02) - RPG0010 - Meu primeiro framework - Next.Js, TypeScript e Css

Criação de front-end web com base em React JS ou Next JS, com utilização de bases de teste JSON, em memória, para ambas as plataformas.

A partir dos objetivos listados abaixo, no final do projeto, você terá criado duas versões de um front-end web, com base nas tecnologias React JS e Next JS, tornando-se capacitado para lidar com contextos reais de aplicação das tecnologias abordadas:

- Explorar a sintaxe Type Script na implementação de entidades e controladores, para projetos React JS e Next JS;
- Criar um front-end para Web completo, baseado em componentes reutilizáveis, através do React JS;
- Criar um front-end para Web completo, baseado em componentes reutilizáveis, através do Next JS;
- Utilizar o Next JS para a definição de uma API no estilo REST, de uso interno, com acesso via função fetch, oferecida no ambiente padrão do Java Script.

## 3º Procedimento | Criação do Aplicativo com Next JS

- Crie o aplicativo e configure o ambiente:
    - a) Executar o comando npx create-next-app livros-next --typescript;
    - b) Entrar no diretório do projeto criado, executando cd livros-next;
    - c) Abrir o Visual Studio Code, executando code .\;
    - d) No ambiente de edição, criar um diretório (folder) com o nome classes, e copiar os diretórios modelo e controle, do projeto livros-react, com seus respectivos arquivos Type Script, para dentro do novo diretório;
    - e) Criar o diretório componentes, e dentro dele adicionar os arquivos para componentes auxiliares, com os nomes "LinhaLivro.tsx" e "Menu.tsx";
    - f) No diretório pages/api, criar os diretórios com os nomes editoras e livros
    - g) No diretório editoras, criar os arquivos "[codEditora].ts" e "index.ts";
    - h) No diretório livros, criar os arquivos "[codigo].ts" e "index.ts";
- Implemente a API de gerenciamento de editoras via HTTP:
    - a) Codificar o arquivo index.ts, no diretório pages/api/editoras, iniciando com a definição de uma instância exportável de ControleEditora, com o nome controleEditora;
    - b) Definir a assinatura para tratamento das solicitações, cujo formato deve ser export default (req: NextApiRequest,res: NextApiResponse) => { };
    - c) Implementar o tratamento de requisições, respondendo no método GET com status 200 e o vetor de editoras, obtido via método getEditoras, de controleEditoras, no formato JSON;
    - d) Tratar os status 405, para método não permitido, e 500, para exceção ocorrida no servidor;
    - e) Codificar o arquivo [codEditora].ts, no diretório pages/api/editoras;
    - f) Importar o controlador de editoras instanciado em index.ts, utilizando o comando import {controleEditora} from '.';
    - g) Definir a assinatura para tratamento das solicitações, cujo formato deve ser export default (req: NextApiRequest, res: NextApiResponse) => { };
    h) Implementar o tratamento de requisições, respondendo no método GET com status 200 e um objeto JSON com o nome da editora, obtido através de getNomeEditora, tendo como parâmetro codEditora, fornecido na URL de acesso e recuperado via req.query, convertido para number;
    - i) Tratar os status 405, para método não permitido, e 500, para exceção ocorrida no servidor;
  
- Teste a nova API:
    - a) Iniciar a execução do aplicativo através do comando npm run dev;
    - b) Abrir o endereço http://localhost:3000/api/editoras no navegador;
    - c) Abrir o endereço http://localhost:3000/api/editoras/3 no navegador;

- Implemente a API de gerenciamento de editoras via HTTP:
    - a) Codificar o arquivo index.ts, no diretório pages/api/livros, iniciando com a definição de uma instância exportável de ControleLivro, utilizando o nome controleLivro;
    - b) Definir a assinatura para tratamento das solicitações, cujo formato deve ser export default (req: NextApiRequest, res: NextApiResponse) => { };
    - c) Implementar o tratamento de requisições, respondendo no método GET com status 200 e o vetor de livros, obtido via método obterLivros, de controleLivro, no formato JSON;
    - d) Responder ao método POST com a captura dos dados do livro, fornecido no corpo da requisição, no formato JSON, a partir de req.body, inclusão no vetor de livros via método incluir, de controleLivros, e retorno para o chamador com
    status 200 e mensagem de sucesso no formato JSON;
    - e) Tratar os status 405, para método não permitido, e 500, para exceção ocorrida no servidor;
    - f) Codificar o arquivo [codigo].ts, no diretório pages/api/livros;
    - g) Importar o controlador de livros instanciado em index.ts, utilizando o comando import {controleLivro} from '.';
    - h) Definir a assinatura para tratamento das solicitações, cujo formato deve ser export default (req: NextApiRequest, res: NextApiResponse) => { };
    - i) Implementar o tratamento de requisições, respondendo ao DELETE com a captura do código fornecido na URL, via req.query, exclusão do livro no vetor, via método excluir de controleLivro, e retorno ao chamador com status 200 e mensagem de sucesso no formato JSON;
    - j) Tratar os status 405, para método não permitido, e 500, para exceção ocorrida no servidor;

- Teste a nova API, efetuando uma consulta no navegador a partir do endereço http://localhost:3000/api/livros, onde deve ser retornado o vetor de livros no formato JSON, e opcionalmente testar os demais métodos (POST e DELETE) via Postman, Boomerang, ou outra ferramenta para envio de requisições
  
- Habilite o Bootstrap no aplicativo Next JS:
    - a) Parar o aplicativo livros-next, caso esteja em execução, e executar o comando npm install bootstrap;
    - b) Alterar o conteúdo de _app.tsx para o que é apresentado a seguir, com a importação da folha de estilo do Bootstrap, deixando-a disponível para todos os componentes;
- Implemente o componente LinhaLivro, no arquivo LinhaLivro.tsx:
    -a) Iniciar com a definição de uma instância de ControleEditora, com o nome controleEditora, utilizado internamente para diminuir a quantidade de chamadas assíncronas, já que os dados de editoras não são dinâmicos;
    - b) Definir a interface LinhaLivroProps, com o atributo livro, do tipo Livro, e método excluir(), do tipo void;
    - c) Definir o componente exportável LinhaLivro, com parâmetro props, para a recepção dos atributos livro e excluir, a partir do seletor, utilizando export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => { };
    - d) Copiar o corpo da função LinhaLivro, encontrada no arquivo LivroLista.js, do projeto livros-react, para o corpo da nova função, o que se justifica pelo fato de que apenas a assinatura é modificada para uso no Next JS;
- Implemente o componente Menu.tsx, de acordo com as instruções seguintes:
    - a) Definir o componente com export const Menu: React.FC = () => { };
    - b) Retornar o menu de navegação, com tag nav, formatado pelo BootStrap;
    - c) Utilizar elementos do tipo Link, da biblioteca next/link;
    - d) Através do atributo href, de Link, fornecer acesso para as páginas index, LivroLista e LivroDados, como opções do menu de navegação;
  
- Altere o componente Home, no arquivo index.tsx:
    - a) No retorno, manter a div inicial, com classe CSS container;
    - b) No componente Head, alterar title para "Loja Next";
    - c) Acrescentar um componente Menu após Head;
    - d) Após o menu, definir a área principal (main), com estilo styles.main, e dentro dela criar um título h1, com estilo styles.title e texto Página Inicial;
    - e) Apagar todo o restante da página original;

- Implemente o componente LivroLista, no arquivo LivroLista.tsx:
    - a) Importar os estilos com import styles from '../styles/Home.module.css';
    - b) Definir uma constante com o nome baseURL, do tipo texto, utilizando o valor "http://localhost:3000/api/livros";
    - c) Criar a função obter, assíncrona, no estilo arrow function, com a chamada para baseURL, via fetch, e retorno da resposta no formato JSON;
    - d) Criar a função excluirLivro, assíncrona, no estilo arrow function, tendo o parâmetro codigo, numérico, com a chamada para baseURL/codigo via fetch, no modo DELETE, e retorno do campo ok da resposta, indicando sucesso ou falha;
    - e) Em LivroLista, definir as propriedades livros, do tipo Array<Livro>, e carregado, booleana, através de useState;
    - f) Utilizar o Hook useEffect, que deve efetuar a chamada para obterLivros, assíncrona, alimentando a propriedade de estado livros no retorno, via operador then, e alterar carregado para true, tendo ainda como balizador o atributo carregado;
    - g) Acrescentar o método excluir, estilo arrow function, que deve receber o código do livro, invocar a função excluir, assíncrona, e no retorno setar o valor de carregado como false, para forçar o redesenho da página;
    - h) No retorno do componente deve ser fornecida uma div, formatada com styles.container, e dentro dela um componente Head, equivalente ao que foi utilizado na página Home, um componente Menu, e a área main, contendo o título da página e uma tabela para exibição dos livros;
    - i) Utilizar o método map, de livros, para a geração das linhas de dados como componentes do tipo LinhaLivro, tendo como parâmetros o livro atual do vetor, excluir invocando o método excluir de LivroLista, com a passagem do código do livro corrente, e key associado ao código do livro;
  
- Implemente o componente LivroDados, no arquivo LivroDados.tsx:
    - a) Importar os estilos com import styles from '../styles/Home.module.css';
    - b) Definir um objeto do tipo ControleEditora, com o nome controleEditora;
    - c) Definir uma constante com o nome baseURL, do tipo texto, utilizando o valor "http://localhost:3000/api/livros";
    - d) Criar a função incluirLivro, assíncrona, no estilo arrow function, tendo o parâmetro livro, do tipo Livro, com a chamada para baseURL via fetch, no modo POST, incluindo o tipo de conteúdo como informação do header e o livro no body, convertido com JSON.stringfy. O retorno da função será o campo ok da resposta, indicando sucesso ou falha;
    - e) Em LivroDados, definir o vetor opcoes, invocando o método getEditoras, com o mapeamento de codEditora para value e nome para text;
    - f) Definir as propriedades titulo, resumo e autores, todas de texto, através de useState, além de codEditora, iniciada com a posição zero de opções;
    - g) Acrescentar o atributo navigate, recebendo o Hook useNavigate;
    - h) Definir o método tratarCombo, tendo como parâmetro o evento, do tipo React.ChageEvent<HTMLSelectElement>, onde deve ocorrer a chamada para setCodEditora, passando value, da lista, convertido para number;
    - i) Definir o método incluir, apresentando como parâmetro um evento do tipo React.FormEvent<HTMLFormElement>, que primeiro deve eliminar o comportamento padrão com preventDefault, em seguida instanciar um livro com código valendo zero, o valor das propriedades de estado, e autores separados por linha (split), invocar a função incluir, assíncrona, e, no retorno dela, navegar para a página LivroLista, através do sistema de navegação do Next JS, com a chamada para Router.push;
    - j) No retorno do componente deve ser fornecida uma div, formatada com styles.container, e dentro dela um componente Head, equivalente ao que foi utilizado na página Home, um componente Menu, e a área main, contendo o título da página      e o formulário para inclusão do livro;
    - k) Implementar o formulário referente aos campos utilizados para definir as propriedades de estado, com ligação através de value e onChange;
    - l) Utilizar uma lista de seleção (combo) para as editoras, com as opções geradas pelo método map, de opcoes, e associando onChange ao método tratarCombo;
    - m) Relacionar o evento onSubmit, do formulário, ao método incluir, além de adicionar um botão de submissão ao final;
  
- A execução do projeto deverá fornecer as mesmas funcionalidades de livro-react, bem como aparência muito similar, mas agora com o gerenciamento da base de livros a partir da API interna, acessada de forma assíncrona, via fetch;
  
- Verifique os resultados obtidos através de um navegador.

  <br>

- [Acessar Deploy](https://full-stack-mundo02-next.vercel.app/)
  
 <br>
  
[<- Retornar](https://github.com/GilvanPOliveira/FullStack/tree/main/Mundo02)

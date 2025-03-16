const data = [
  {
    category: "Conhecimentos Gerais",
    questions: [
      {
        question: "Quais são os cinco sentidos humanos?",
        options: [
          "visão, audição, olfato, paladar e tato", 
          "visão, audição, alface, paladar e tato", 
          "visão, audição, olfato, paladar e pato", 
          "visão, ambição, olfato, paladar e tato"
          ],
        answer: "visão, audição, olfato, paladar e tato",
        tip: "preste atenção na maneira que está escrito",
      },
      {
        question: "Qual é o maior planeta do nosso sistema solar?",
        options: [
          "Terra", 
          "Júpter", 
          "Vênus", 
          "Marte"
          ],
        answer: "Júpter",
        tip: "Possui uma grande mancha vermelha",
      },
      {
        question: "Qual é a capital do Canadá?",
        options: [
          "Ottawa", 
          "Toronto", 
          "Vancouver", 
          "Montreal"
          ],
        answer: "Ottawa",
        tip: "Localizada no centro do país",
      },
      {
        question: "Qual é o metal mais abundante na crosta terrestre?",
        options: [
          "Ferro", 
          "Cobre", 
          "Ouro", 
          "Alumínio"
          ],
        answer: "Alumínio",
        tip: "Amplamente utilizado na indústria de embalagens",
      },
      {
        question: "Qual é a montanha mais alta do mundo?",
        options: [
          "Mont Blanc",
          "K2",
          "Everest", 
          "Aconcágua"
          ],
        answer: "Everest",
        tip: "Localizada entre o Nepal e o Tibete"
      },
    ],
  },
  {
    category: "Ciências",
    questions: [
      {
        question: "Qual é a unidade básica de estrutura e função em um organismo?",
        options: [
          "Célula",
          "Átomo", 
          "Molécula",
          "Órgão"
          ],
        answer: "Célula",
        tip: "Pode ser procariótica ou eucariótica",
      },
      {
        question: "Qual é o processo pelo qual as plantas convertem a luz solar em energia alimentar?",
        options: [
          "Fotossíntese", 
          "Respiração", 
          "Digestão", 
          "Transpiração"
          ],
        answer: "Fotossíntese",
        tip: "Utiliza energia solar",
      },
      {
        question: "Qual é o órgão responsável pela produção de insulina no corpo humano?",
        options: [
          "Pâncreas", 
          "Fígado", 
          "Rim", 
          "Coração"
          ],
        answer: "Pâncreas",
        tip: "Regula os níveis de glicose no sangue",
      },
      {
        question: "Qual é o nome do processo pelo qual os organismos vivos produzem descendentes semelhantes a eles mesmos?",
        options: [
          "Mitose", 
          "Meiose", 
          "Reprodução Assexuada", 
          "Fecundação"
          ],
        answer: "Reprodução Assexuada",
        tip: "Os organismos geram descendentes sem a fusão de gametas",
      },
      {
        question: "Qual é o componente mais abundante na atmosfera da Terra?",
        options: [
          "Oxigênio", 
          "Nitrogênio",
          "Dióxido de Carbono", 
          "Hidrogênio"
          ],
        answer: "Nitrogênio",
        tip: "Este gás compõe a maior parte da atmosfera terrestre",
      },
    ],
  },
  {
    category: "História",
    questions: [
      {
        question: "Em que ano a Segunda Guerra Mundial começou?",
        options: [ 
          "1939", 
          "1941", 
          "1943", 
          "1945"
          ],
        answer: "1939",
        tip: "O conflito global teve início com a invasão da Polônia pelas forças alemãs",
      },
      {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: [ 
          "Thomas Jefferson", 
          "George Washington", 
          "John Adams", 
          "Abraham Lincoln"
          ],
        answer: "George Washington",
        tip:"Ele desempenhou um papel fundamental na liderança durante a Guerra da Independência dos Estados Unidos",
      },  
      {
        question: "Qual civilização construiu as famosas pirâmides de Gizé no Egito?",
        options: [
          "Gregos",
          "Romanos",
          "Egípcios", 
          "Mesopotâmicos"
          ],
        answer: "Egípcios",
        tip:"Esta antiga civilização do Norte da África é conhecida por suas conquistas arquitetônicas",
      },  
      {
        question: "Qual foi o evento histórico que marcou o fim da Guerra Fria?",
        options: [
          "Queda do Muro de Berlim", 
          "Revolução Cubana",
          "Crise dos Mísseis de Cuba", 
          "Dissolução da União Soviética"
          ],
        answer: "Queda do Muro de Berlim",
        tip:"Este evento simbólico ocorreu em 1989 e representou um marco significativo na reunificação da Alemanha",
      },  
      {
        question: "Qual foi o período conhecido como 'Renascimento'?",
        options: [ 
          "Idade Média", 
          "Idade Moderna", 
          "Idade Antiga",
          "Idade Contemporânea"
          ],
        answer: "Idade Moderna",
        tip:"Aproximadamente do século XIV ao XVII, foi marcado por um renascimento cultural",
      },      
    ],
    },
  {
    category: "Programação",
    questions: [
      {
        question: "Qual linguagem de marcação é fundamental para estruturar o conteúdo de uma página web?",
        options: [
          "JavaScript",
          "CSS",
          "HTML",
          "Python",
        ],
        answer: "HTML",
        tip: "Essa linguagem é a espinha dorsal de uma página web",
      },
      {
        question: "Qual linguagem é usada para estilizar a apresentação visual de uma página web?",
        options: [
          "Java", 
          "C++", 
          "CSS", 
          "Ruby"
          ],
        answer: "CSS",
        tip: "Esta linguagem é utilizada para aplicar estilos, como cores, fontes e layouts, tornando as páginas web visualmente atraentes e responsivas.",
      },
      {
        question: "Qual das seguintes opções é uma biblioteca JavaScript amplamente utilizada para construir interfaces de usuário interativas?",
        options: [
          "jQuery", 
          "Angular", 
          "Django",
          "Flask"
          ],
        answer: "jQuery",
        tip: "Essa biblioteca simplifica a manipulação do DOM (Modelo de Objeto de Documento) e é conhecida por facilitar o desenvolvimento de interações dinâmicas no lado do cliente.",
      },
      {
        question: "Qual linguagem é frequentemente usada para realizar animações e interações visuais em páginas web?",
        options: [
          "Java", 
          "Python", 
          "C#", 
          "JavaScript"
          ],
        answer: "JavaScript",
        tip: "É amplamente utilizado para criar animações e interações dinâmicas nas páginas web.",
      },
      {
        question:
          "Qual dos seguintes não é um pré-processador CSS?",
        options: [
          "Sass", 
          "Less", 
          "Stylus", 
          "TypeScript"
          ],
        answer: "TypeScript",
        tip: "É uma linguagem de programação que adiciona tipagem estática ao JavaScript",
      },
    ],
  },
];

export default data;

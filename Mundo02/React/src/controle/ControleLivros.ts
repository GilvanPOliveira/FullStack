// Controlador de Livros
// caminho: ../controle/ControleLivros.ts

import Livro from "../modelo/Livro";// importando a classe Editora

const livros: Livro[] = [
  new Livro(1, 1, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', ['Bert Bates', 'Kathy Sierra']),
  new Livro(2, 2, 'Java, como Programar', 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', ['Paul Deitel', 'Harvey Deitel']),
  new Livro(3, 3, 'Core Java for the Impatient', "Readers familiar with Horstmann's original, two-volume 'Core Java' books who are looking for a comprehensive, but condensed guid to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.", ['Cay Horstmann']),
];

class ControleLivros {
  // criar um método obterLivros com o retorno do vetor livros
  obterLivros(): Livro[] {
    return livros;
  }
  /* 
    criar método incluir, recebendo um objeto do tipo Livro,
    que terá o código trocado pelo código mais alto do vetor,
    incrementado de um, e depois será adicionado ao vetor  
  */ 
  incluir(livro: Livro): void {
    livro.codigo = livros.length + 1; // incrementa + 1
    livros.push(livro); // adiciona
  }
  /*
    criar método excluir, recebendo código(númerico), que irá
    encontrar o índice do livro com o código fornecido, através
    de findIndex, e removê-lo com uso de splice
  */
  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1); // remover item
    }
  } 
}

export default ControleLivros; // permitir que a classe seja chamada (fora)




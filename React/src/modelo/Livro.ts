// Classe Livro
// caminho: ../modelo/Livro.ts

class Livro {
  codigo: number; // numérico
  codEditora: number; // numérico
  titulo: string; // texto
  resumo: string; // texto
  autores: string[]; //vetor de texto

  // Constructor: usado para inicializar as propriedades da classe com os valores iniciais desejados
  constructor(
    codigo: number, 
    codEditora: number, 
    titulo: string, 
    resumo: string,  
    autores: string[]) {
    // usado para atribuir valores passados como argumentos
    this.codigo = codigo; // numérico
    this.codEditora = codEditora; // numérico
    this.titulo = titulo; // texto
    this.resumo = resumo; // texto
    this.autores = autores; //vetor de texto
  }
}

export default Livro; // permitir que a classe seja chamada (fora)
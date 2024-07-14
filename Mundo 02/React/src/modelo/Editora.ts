// Classe Editora
// caminho: ../modelo/Editora.ts

class Editora {
  codEditora: number; // numérico
  nome: string; // texto

  // Constructor: usado para inicializar as propriedades da classe com os valores iniciais desejados
  constructor(
    codEditora: number, 
    nome: string) {
    // usado para atribuir valores passados como argumentos
    this.codEditora = codEditora; // numérico
    this.nome = nome // texto
  }
} 

export default Editora; // permitir que a classe seja chamada (fora)
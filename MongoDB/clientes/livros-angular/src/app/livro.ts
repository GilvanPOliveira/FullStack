export class Livro {
  codigo: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(codigo: string, codEditora: number, titulo: string, resumo: string, autores: string[]) {
    this.codigo = codigo || ''; // usando texto vazio para inicialização no construtor
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}

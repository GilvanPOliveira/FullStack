// Controlador de Editoras
// caminho: ../controle/ControleEditora.ts

import Editora from "../modelo/Editora"; // importando a classe Editora

// definir variável contendo três elementos no formato JSON
const editoras: Editora[] = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Pearson'),
  new Editora(3, 'Addison Wesley')
];

class ControleEditora {
  // criar método getEditoras que recebe codEditora(numérico), e retorna nome da editora através de uma operação filter sobre o vetor editoras
  getEditoras(): Editora[] {
    return editoras;
  }
  // criar método getNomeEditora que recebe codEditora(numérico), e retorna nome da editora através de uma operação filter sobre o vetor editoras
  getNomeEditora(codEditora: number): string {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }
}

export default ControleEditora; // permitir que a classe seja chamada (fora)
 
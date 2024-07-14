import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root' 
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Bookman' },
    { codEditora: 3, nome: 'Addison Wesley' },
    { codEditora: 4, nome: 'Pearson' }    
  ];

  constructor() {}

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora == codEditora); 
    if (editora) {
      //console.log('Editora encontrada:', editora.codEditora); 
      return editora.nome;
    } else {
      //console.log('Editora não encontrada para o código:', codEditora);
      return 'Editora não encontrada';
    }
  }
}

import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { Editora } from '../app/editora';
import { ControleEditoraService } from './controle-editora.service';

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {
  editoras: Editora[] = [];

  private baseURL = 'http://localhost:3030/livros';

  constructor(private servEditora: ControleEditoraService,) {}

  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(this.baseURL, { method: 'GET' });
    if (!response.ok) {
      throw new Error('Erro ao obter livros');
    }
    const livros: LivroMongo[] = await response.json();
    return livros.map((livroMongo: LivroMongo) => this.mapLivroMongoToLivro(livroMongo));
  }

  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${this.baseURL}/${codigo}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Erro ao excluir livro');
    }
    return response.ok;
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo = this.mapLivroToLivroMongo(livro);

    const response = await fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livroMongo)
    });
    if (!response.ok) {
      throw new Error('Erro ao incluir livro');
    }
    return response.ok;
  }

  private mapLivroToLivroMongo(livro: Livro): LivroMongo {
    return {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
  }

  private mapLivroMongoToLivro(livroMongo: LivroMongo): Livro {
    return {
      codigo: livroMongo._id !== null ? livroMongo._id : '', // tentativa 9: converter null para string
      codEditora: livroMongo.codEditora,
      titulo: livroMongo.titulo,
      resumo: livroMongo.resumo,
      autores: livroMongo.autores
    };
  }
}

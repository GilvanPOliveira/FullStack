// Controlador de Livros
// caminho: ../controle/ControleLivros.ts

import Livro from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros"; 

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL, {
      method: "GET", 
    });
    const data: LivroMongo[] = await response.json();
    return data.map((item: LivroMongo) =>
      new Livro(String(item._id), item.codEditora, item.titulo, item.resumo, item.autores)
    );
  }

  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: "DELETE",
    });
    return response.ok;
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: null, 
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };

    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livroMongo),
    });
    return response.ok;
  }
}

export default ControleLivros; // permitir que a classe seja chamada (fora)




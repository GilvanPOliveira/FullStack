// Componente LivroLista
// caminho: ./LivroLista.js

import React, { useState, useEffect } from "react";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const LinhaLivro = (props) => {
  /*
    utilizar o parâmetro props, para a recepção dos atributos livro 
    e excluir, a partir da aplicação do seletor.
  */
  const { livro, excluir } = props;
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  // return com uma linha de tabela ou tr com os valores dos atributos do livro nas tags td
  const botaoExcluir = {
    backgroundColor: "#Ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px", 
    cursor: "pointer",
    align: "left",
  };
  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>
          {/* 
          abaixo do título na primeira célula, um botão de 
          exclusão com o recebimento do método que será 
          fornecido no atributo excluir
        */}
        <button style={botaoExcluir} onClick={() => excluir(livro.codigo)}>
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        {" "}
        {/* Autores */}
        <ul>
          {livro.autores.map((autor, index) => (<li key={index}>{autor}</li>))}
        </ul>
      </td>
    </tr>
  );
};

// definir LivroLista sem parâmetros
const LivroLista = () => {
  const controleLivro = new ControleLivros();
  const [livros, setLivros] = useState([]); // livros, do tipo vetor
  const [carregado, setCarregado] = useState(false); // carregado, do tipo booleana, através de useState

useEffect(() => {
  controleLivro
    .obterLivros() // Chame obterLivros em vez de obterTodos
    .then((livros) => {
      setLivros(livros);
      setCarregado(true);
    })
    .catch((error) => {
      console.error("Erro ao obter livros:", error);
      setCarregado(true);
    });
}, [carregado]);

  const excluir = (codigo) => {
    controleLivro
      .excluir(codigo)
      .then(() => {
        // Somente depois que a exclusão for bem-sucedida
        setCarregado(false);
      })
      .catch((error) => {
        console.error("Erro ao excluir livro:", error);
      });
  };

  return (
    <main class="container-fluid col-9 p-1">
      <h1 class="text-left">Catálogo de Livros</h1>
      <div>
        <table class="table table-striped table-borderless table-sm text-left">
          <thead class="table-dark table-sm">
            {" "}
            {/* Cabeçalho */}
            <tr>
              <th class="col-2">Título</th>
              <th class="col-6">Resumo</th>
              <th class="col-2">Editora</th>
              <th class="col-2">Autores</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {/* ação de exclusão */}
            {livros.map((livro, index) => (
              <LinhaLivro key={index} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default LivroLista; // permitir que a classe seja chamada (fora)

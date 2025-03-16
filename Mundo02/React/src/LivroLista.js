// Componente LivroLista
// caminho: ./LivroLista.js

import React, { useState, useEffect, useMemo } from "react";
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
      {livro.titulo}
      {/* 
        abaixo do título na primeira célula, um botão de 
        exclusão com o recebimento do método que será 
        fornecido no atributo excluir*/
      }
      <tr>
        <button style={botaoExcluir} onClick={() => excluir(livro.codigo)}> Excluir </button>
      </tr>
      <br />
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        {" "}
        {/* Autores */}
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

// definir LivroLista sem parâmetros
const LivroLista = () => {
  const controleLivro = useMemo(() => new ControleLivros(), []);
  const [livros, setLivros] = useState([]); // livros, do tipo vetor
  const [carregado, setCarregado] = useState(false); // carregado, do tipo booleana, através de useState

  // utilizar o hook useEffect(utilizado quando vamos consumir uma API)
  useEffect(() => {
    setLivros(controleLivro.obterLivros()); // obter livros do controlador
    setCarregado(true); // alterar carregado para true
  }, [carregado, controleLivro]); // tendo ainda como balizador o atributo carregado (ficando na segunda parte ([carregado]))

  // método excluir estilo arrow function
  const excluir = (codigo) => {
    // recebe código
    controleLivro.excluir(codigo); // invoca o método excluir do controlador
    setCarregado(false); // seta o valor de carregado pra false
    // forçando o redesenho da página
  };

  return (
    <main className="container">
      <h1>Catálogo de Livros</h1>
      <table className="table table-striped table-borderless table-sm ">
        <thead className="table-dark table-sm">
          {" "}
          {/* Cabeçalho */}
          <tr>
            <th className="col-2">Título</th>
            <th className="col-6">Resumo</th>
            <th className="col-2">Editora</th>
            <th className="col-2">Autores</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {/* ação de exclusão */}
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista; // permitir que a classe seja chamada (fora)

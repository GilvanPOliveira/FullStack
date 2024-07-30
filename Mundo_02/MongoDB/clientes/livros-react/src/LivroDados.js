// Componente LivroDados
// caminho: ./LivroDados.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleEditora from "./controle/ControleEditora";
import ControleLivros from "./controle/ControleLivros";

/*
const LivroDados = () => {
  return (
    <main>
      <p>Olá, mundo!</p>
    </main>
  );
};
*/

function LivroDados() {
  // instanciar os controladores
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  // lista de seleção
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  // propriedades iniciais do livro
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value); // iniciar como a primeira opção

  // utilizar o Hook useNavigate para navegação
  const navigate = useNavigate();

  // método para tratar a mudança na lista de seleção
  const tratarCombo = (evento) => {
    const selectedValue = parseInt(evento.target.value, 10);
    setCodEditora(selectedValue);
  };

  const incluir = (evento) => {
    evento.preventDefault();
    const novoLivro = {
      codigo: "", // utilizar um texto vazio para código
      titulo,
      resumo,
      autores: autores.split("\n"), // dividir autores por linhas
      codEditora,
    };
    controleLivro.incluir(novoLivro).then(() => {
      navigate("/"); // volta para a página de catálogo
    });
  };

  return (
    <main className="container-fluid col-9 p-1">
      <h1>Dados do Livros</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">
            Resumo
          </label>
          <textarea
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="editora" className="form-label">
            Editora
          </label>
          </div>
          <div className="mb-3">
          <select className="form-control form-select" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">
            Autores (1 por linha)
          </label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary"> Salvar Dados </button>
      </form>
    </main>
  );
}

export default LivroDados;

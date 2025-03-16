import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../classes/modelo/Livro";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        <td> {livro.titulo} </td>
        <button onClick={() => excluir(livro.codigo)} style={{ backgroundColor: '#Ff0000', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', textAlign: 'left'}}> Excluir </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (<li key={index}>{autor}</li>))}
        </ul>
      </td>
    </tr>
  );
};

export default LinhaLivro;
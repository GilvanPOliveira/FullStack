import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import styles from '../styles/index.module.css';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import LinhaLivro from '../componentes/LinhaLivro';
import ControleLivros from '../classes/controle/ControleLivros';
import Livro from '../classes/modelo/Livro';

const LivroLista: React.FC = () => {
  const controleLivros = new ControleLivros();

  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const livros = await controleLivros.obterLivros();
        setLivros(livros);
        setCarregado(true);
      } catch (error) {
        console.error('Erro ao obter livros:', error);
      }
    };
    fetchData();
  }, [carregado]);

  const excluir = (codigo: string) => {
    controleLivros
      .excluir(codigo)
      .then(() => {
        setCarregado(false);
      })
      .catch((error) => {
        console.error('Erro ao excluir livro:', error);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo de Livros</title>
      </Head>
      <Menu />
      <main className="container">
        <h1>Catálogo de Livros</h1>
        <table className="table table-striped table-borderless table-sm text-left">
          <thead className="table-dark table-sm">
            <tr>
              <th className="col-2">Título</th>
              <th className="col-6">Resumo</th>
              <th className="col-2">Editora</th>
              <th className="col-2">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro key={index} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;

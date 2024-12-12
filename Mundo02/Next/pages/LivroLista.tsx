import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import styles from '../styles/index.module.css';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import LinhaLivro from '../componentes/LinhaLivro';
import Livro from '../classes/modelo/Livro';

const baseURL = 'http://localhost:3000/api/livros';

const obter = async () => {
  try {
    const response = await fetch(baseURL);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Erro ao obter livros');
    }
  } catch (error) {
    console.error(error);
  }
};

const excluirLivro = async (codigo: number) => {
  try {
    const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return response.ok; // sucesso
  } catch (error) {
    console.error(error); // falha
    return false;
  }
};

const LivroLista: React.FC = () => {

  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {obter().then((data) => {if (data) {setLivros(data); setCarregado(true);}});}, [carregado]);

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    } else {
      console.error('Falha ao excluir o livro.');
    }
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo de Livros</title>
      </Head>
      <Menu />
      <main className='container'>
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
            {livros.map((livro) => (<LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;

/*
import type { NextPage } from 'next';
import React from 'react';

const LivroLista: NextPage = () => {
  return (
    <main>
      Olá, mundo! Este é o LivroLista.
    </main>
  );
};

export default LivroLista;
*/
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/index.module.css';
import Head from 'next/head';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import ControleEditora from '../classes/controle/ControleEditora';
import ControleLivros from '../classes/controle/ControleLivros';
import { Menu } from '../componentes/Menu';
import Livro from '../classes/modelo/Livro';
import Editora from '../classes/modelo/Editora';

const controleEditora = new ControleEditora();

const baseURL = 'http://localhost:3000/api/livros';

const incluirLivro = async (novoLivro: Livro) => {
  try {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoLivro),
    });
    if (response.ok) {
      return true;
    } else {
      throw new Error('Falha ao incluir o livro.');
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const LivroDados = () => {
  //const navigate = useNavigate(); 
  // sempre dava erro (useNavigate), ate trocar pelo router
  const router = useRouter();

  const opcoes: { value: number; text: string }[] = controleEditora.getEditoras().map((editora: Editora) => ({ value: editora.codEditora, text: editora.nome }));

  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(opcoes[0].value);

  const tratarCombo = (evento: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(evento.target.value, 10);
    setCodEditora(selectedValue);
  };

  const incluir = async (evento: FormEvent) => {
    evento.preventDefault();
    const novoLivro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };
    try {
      const sucesso = await incluirLivro(novoLivro);
      if (sucesso) {
        router.push('/LivroLista'); 
        // sempre que adicionar, retornará para a página de catálogos
      } else {
        console.error('Erro ao incluir o livro.');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao processar a solicitação.', error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dados do Livro</title>
      </Head>
      <Menu />
      <main className="container">
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label"> Título </label>
            <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label"> Resumo </label>
            <textarea className="form-control" id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="editora" className="form-label"> Editora </label>
            <select className="form-control form-select" value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="autores" className="form-label"> Autores (1 por linha) </label>
            <textarea className="form-control" id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary"> Salvar Dados </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;

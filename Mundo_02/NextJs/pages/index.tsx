import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import { Menu } from '../componentes/Menu';
import styles from '../styles/index.module.css';

const Home = () => {
  return (
    <body className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </body>
  );
}

export default Home;

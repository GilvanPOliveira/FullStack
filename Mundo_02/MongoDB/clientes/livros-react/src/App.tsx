import React from 'react';
import './App.css';
import LivroLista from './LivroLista';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroDados from './LivroDados';

function App() {
  const linkStyle = {
    color: 'white',
    marginRight: '10px', // Adicionar espaço entre os links
    textDecoration: 'none', // Remover sublinhado
  };

  return (
    // componente para dividir as rotas apontando pra LivroLista e LivroDados (página de catálogo e pagina de inclusão de livros)
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div>
          <Link to="/" style={linkStyle}>Catálogo</Link>
          <Link to="/dados" style={linkStyle}>Novo</Link>
        </div>
      </nav>
      <Routes> 
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

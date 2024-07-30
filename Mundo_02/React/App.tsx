// Arquivo App
// caminho: ./App.tsx

import React from 'react';
import './App.css';
import LivroLista from './LivroLista';

function App() {
  return (
    <div className="App">
      <LivroLista/> {/* retornando o componente LivroLista */}
    </div>
  );
}

export default App; // permitir que a classe seja chamada (fora)

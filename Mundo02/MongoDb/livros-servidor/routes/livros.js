const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// GET, POST e DELETE (com tratamento de erro)

// obter todos os livros (GET)
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter livros: ' + error.message }); 
    // erro interno
  }
});

// incluir um novo livro (POST)
router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    const resultado = await incluir(livro);
    res.json({ mensagem: 'Livro incluído com sucesso', livro: resultado });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao incluir livro: ' + error.message }); 
    // erro interno
  }
});

// excluir um livro por código (DELETE)
router.delete('/:codigo', async (req, res) => {
  const codigo = req.params.codigo;
  try {
    const resultado = await excluir(codigo);
    if (resultado.deletedCount > 0) {
      res.json({ mensagem: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ mensagem: 'Livro não encontrado' }); 
      // não encontrado
    }
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir livro: ' + error.message }); 
    // erro interno
  }
});

module.exports = router;

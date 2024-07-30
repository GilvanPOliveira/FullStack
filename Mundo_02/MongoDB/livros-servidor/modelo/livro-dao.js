const Livro = require('./livro-schema')

// obter todos os livros 
const obterLivros = async () => {
  try {
    return await Livro.find({});
  } catch (error) { // tratando o erro
    throw error;
  }
};

// incluir um novo livro
const incluir = async (livro) => {
  try {
    return await Livro.create(livro);
  } catch (error) { // tratando o erro
    throw error;
  }
};

// excluir um livro com base no código (ou _id)
const excluir = async (codigo) => {
  try {
    return await Livro.deleteOne({ _id: codigo });
  } catch (error) { // tratando o erro
    throw error;
  }
};

module.exports = { obterLivros, incluir, excluir }
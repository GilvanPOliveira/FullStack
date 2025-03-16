const banco = require('./conexao'); 

const LivroSchema = new banco.Schema({
  _id: banco.Schema.Types.ObjectId,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],
});

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;

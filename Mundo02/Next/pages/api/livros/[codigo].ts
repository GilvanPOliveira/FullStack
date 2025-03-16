import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

// tratamento de solicitações
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      const codigoLivro = Number(req.query.codigo);
      controleLivro.excluir(codigoLivro);
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor' });
      // exceção ocorrida no servidor
    }
  } else {
    res.status(405).end(); // método não permitido
  }
};

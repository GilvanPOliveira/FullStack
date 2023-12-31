import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

// tratamento de solicitações
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const codEditora = Number(req.query.codEditora);
      const nomeEditora = controleEditora.getNomeEditora(codEditora);
      res.status(200).json({ nome: nomeEditora });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor' });
      // exceção ocorrida no servidor
    }
  } else {
    res.status(405).end(); // método não permitido
  }
};

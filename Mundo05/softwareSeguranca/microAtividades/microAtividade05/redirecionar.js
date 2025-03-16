import express from 'express';
import { URL } from 'url';

const app = express();
const PORT = 3000;
const allowedDomain = 'dominio.com';

app.get('/redirecionar', (req, res) => {
  let redirectUrl = req.query.url;
  
  if (!redirectUrl) {
    return res.status(400).send('Parâmetro "url" não fornecido.');
  }
  
  redirectUrl = redirectUrl.replace(/[\r\n]/g, '');
  
  try {
    const parsedUrl = new URL(redirectUrl, `http://${allowedDomain}`);

    if (parsedUrl.hostname !== allowedDomain) {
      return res.status(400).send('Redirecionamento para domínios externos não permitido.');
    }
  } catch (error) {
    return res.status(400).send('URL inválida.');
  }
  
  return res.redirect(redirectUrl);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});





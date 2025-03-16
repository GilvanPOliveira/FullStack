import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Análise e Correção de Vulnerabilidades");
});

function authenticate(req, res, next) {
  const token = req.headers["autorizar"];

  if (!token || token !== "firewall") {
    return res.status(401).json({ message: "Não autorizado" });
  }
  next();
}

app.get("/acessoRestrito", authenticate, (req, res) => {
  const jsonData = { message: "Acesso permitido!" };
  res.json(jsonData);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});







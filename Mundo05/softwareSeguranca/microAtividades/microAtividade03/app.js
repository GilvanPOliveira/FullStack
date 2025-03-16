import express, { json } from "express";
import pkg from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";

const { sign, verify } = pkg;
const app = express();

// Necessário para acessar a pasta components e o index.html
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "components")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(json());

const SECRET_KEY = "chaveSecreta";
const TOKEN_EXPIRATION_SECONDS = 3600; //1h

app.post("/autenticar", (req, res) => {
  const { username, password } = req.body;
  if (!validateUser(username, password)) {
    return res.status(401).json({ message: "Usuário ou senha incorretos" });
  }
  const exp = Math.floor(Date.now() / 1000) + TOKEN_EXPIRATION_SECONDS;
  const payload = { username, exp };
  const jwt_token = sign(payload, SECRET_KEY);
  return res.json({ jwt_token, exp });
});

app.post("/acessoRestrito", (req, res) => {
  const authHeader = req.headers["autorizar"];
  if (!authHeader) {
    return res.status(401).json({ message: "Acesso não autorizado" });
  }
  const token = authHeader.replace("firewall ", "");
  try {
    const decoded = verify(token, SECRET_KEY);
    return res.json({ data: "Dados confidenciais protegidos" });
  } catch (error) {
    return res.status(401).json({ message: "Acesso não autorizado" });
  }
});

function validateUser(username, password) {
  return username === "admin" && password === "admin";
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});





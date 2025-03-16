import express from "express";
import { json } from "body-parser";
import { sign, verify } from "jsonwebtoken";

const app = express();
app.use(json());

const port = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY || "chaveSecreta";
const tokenExpirationSeconds = 3600; // 1 hora

const users = [
  {
    username: "user",
    password: "123456",
    id: 123,
    email: "user@dominio.com",
    perfil: "user",
  },
  {
    username: "admin",
    password: "123456789",
    id: 124,
    email: "admin@dominio.com",
    perfil: "admin",
  },
  {
    username: "colab",
    password: "123",
    id: 125,
    email: "colab@dominio.com",
    perfil: "user",
  },
];

function doLogin(credentials) {
  return users.find(
    (item) =>
      credentials &&
      credentials.username === item.username &&
      credentials.password === item.password
  );
}

app.post("/api/autenticar/login", (req, res) => {
  const credentials = req.body;
  if (!credentials || !credentials.username || !credentials.password) {
    return res.status(400).json({ message: "Credenciais inválidas" });
  }

  const userData = doLogin(credentials);
  if (!userData) {
    return res.status(401).json({ message: "Usuário ou senha incorretos" });
  }

  const payload = {
    id: userData.id,
    username: userData.username,
    perfil: userData.perfil,
  };
  const token = sign(payload, secretKey, { expiresIn: tokenExpirationSeconds });
  return res.json({ token });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader)
    return res.status(401).json({ message: "Token não fornecido" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2)
    return res.status(401).json({ message: "Token mal formatado" });

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme))
    return res.status(401).json({ message: "Token mal formatado" });

  verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("Erro ao verificar token:", err);
      return res.status(401).json({ message: "Token inválido ou expirado" });
    }
    req.user = decoded;
    next();
  });
}

function requireAdmin(req, res, next) {
  if (req.user && req.user.perfil === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({
        message: "Forbidden: Acesso permitido apenas para administradores.",
      });
  }
}

app.get("/api/autenticar/usuario", authenticateToken, (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
  res.json({ data: user });
});

app.get("/api/usuarios", authenticateToken, requireAdmin, (req, res) => {
  res.json({ data: users });
});

app.get(
  "/api/contratos/:empresa/:inicio",
  authenticateToken,
  requireAdmin,
  (req, res) => {
    let { empresa, inicio } = req.params;

    const safeRegex = /^[a-zA-Z0-9\-_\s.]+$/;
    if (!safeRegex.test(empresa) || !safeRegex.test(inicio)) {
      return res.status(400).json({ message: "Parâmetros inválidos" });
    }

    const result = getContracts(empresa, inicio);
    if (result) res.status(200).json({ data: result });
    else res.status(404).json({ data: "Dados não encontrados" });
  }
);

class Repository {
  execute(query, params) {
    return [
      {
        contratoId: 1,
        empresa: params[0],
        data_inicio: params[1],
        detalhes: "Contrato A",
      },
    ];
  }
}

function getContracts(empresa, inicio) {
  const repository = new Repository();
  const query = `SELECT * FROM contracts WHERE empresa = ? AND data_inicio = ?`;
  const result = repository.execute(query, [empresa, inicio]);
  return result;
}

app.get("/", (req, res) => {
  res.send("API de Software Seguro - Endpoints disponíveis.");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

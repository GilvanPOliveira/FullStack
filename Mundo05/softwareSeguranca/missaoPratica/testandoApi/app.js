import express from "express";
import bodyParserPkg from "body-parser";
const { json } = bodyParserPkg;
import path from "path";
import { fileURLToPath } from "url";
import jwtPkg from "jsonwebtoken";
const { sign, verify } = jwtPkg;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(path.join(__dirname, "components")));

app.use(json());

const port = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY || "chaveSecreta";
const tokenExpirationSeconds = 3600; // 1 hora

const users = [
  {
    username: "user",
    password: "user",
    id: 123,
    email: "user@dominio.com",
    perfil: "user",
  },
  {
    username: "admin",
    password: "admin",
    id: 124,
    email: "admin@dominio.com",
    perfil: "admin",
  },
  {
    username: "colab",
    password: "colab",
    id: 125,
    email: "colab@dominio.com",
    perfil: "user",
  },
];

const contratos = [
  {
    contratoId: 1,
    empresa: "EmpresaA",
    data_inicio: "2025-03-12",
    detalhes: "Contrato A1",
  },
  {
    contratoId: 2,
    empresa: "EmpresaA",
    data_inicio: "2025-06-15",
    detalhes: "Contrato A2",
  },
  {
    contratoId: 3,
    empresa: "EmpresaA",
    data_inicio: "2025-09-20",
    detalhes: "Contrato A3",
  },
  {
    contratoId: 4,
    empresa: "EmpresaB",
    data_inicio: "2026-04-13",
    detalhes: "Contrato B1",
  },
  {
    contratoId: 5,
    empresa: "EmpresaB",
    data_inicio: "2026-07-10",
    detalhes: "Contrato B2",
  },
  {
    contratoId: 6,
    empresa: "EmpresaC",
    data_inicio: "2027-05-14",
    detalhes: "Contrato C1",
  },
  {
    contratoId: 7,
    empresa: "EmpresaC",
    data_inicio: "2027-08-01",
    detalhes: "Contrato C2",
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
    res.status(403).json({
      message: "Acesso permitido apenas para administradores.",
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

function getContracts(empresa, inicio) {
  return contratos.filter(
    (contract) =>
      contract.empresa === empresa && contract.data_inicio === inicio
  );
}

app.get("/api/empresas", authenticateToken, requireAdmin, (req, res) => {
  const uniqueEmpresas = [...new Set(contratos.map((c) => c.empresa))];
  res.json({ data: uniqueEmpresas });
});

app.get("/api/datas/:empresa", authenticateToken, requireAdmin, (req, res) => {
  const empresa = req.params.empresa;
  const uniqueDatas = [
    ...new Set(
      contratos.filter((c) => c.empresa === empresa).map((c) => c.data_inicio)
    ),
  ];
  res.json({ data: uniqueDatas });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

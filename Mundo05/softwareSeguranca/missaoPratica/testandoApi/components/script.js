const messageDiv = document.getElementById("message");
let token = "";

function showMessage(html, type = "success") {
  messageDiv.innerHTML = html;
  messageDiv.className = "message " + (type === "error" ? "error" : "success");
  messageDiv.style.display = "block";
}

function formatUser(user) {
  let html = "<h3>Dados do usuário:</h3>";
  html +=
    "<table><tr><th>ID</th><th>Usuário</th><th>Email</th><th>Perfil</th></tr>";
  html += `<tr><td>${user.id}</td><td>${user.username}</td><td>${user.email}</td><td>${user.perfil}</td></tr>`;
  html += "</table>";
  return html;
}

function formatUsers(users) {
  let html = "<h3>Usuários:</h3>";
  html +=
    "<table><tr><th>ID</th><th>Usuário</th><th>Email</th><th>Perfil</th></tr>";
  users.forEach((u) => {
    html += `<tr><td>${u.id}</td><td>${u.username}</td><td>${u.email}</td><td>${u.perfil}</td></tr>`;
  });
  html += "</table>";
  return html;
}

function formatContracts(contracts) {
  if (contracts.length === 0) return "Nenhum contrato encontrado.";
  let html = "<h3>Contrato(s):</h3>";
  html +=
    "<table><tr><th>ID</th><th>Empresa</th><th>Data Início</th><th>Detalhes</th></tr>";
  contracts.forEach((c) => {
    html += `<tr><td>${c.contratoId}</td><td>${c.empresa}</td><td>${c.data_inicio}</td><td>${c.detalhes}</td></tr>`;
  });
  html += "</table>";
  return html;
}

async function populateEmpresaSelect() {
  const empresaSelect = document.getElementById("empresaSelect");
  empresaSelect.innerHTML =
    '<option value="">-- Selecione uma empresa --</option>';
  try {
    const response = await fetch("/api/empresas", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (response.ok && data.data) {
      data.data.forEach((empresa) => {
        const option = document.createElement("option");
        option.value = empresa;
        option.textContent = empresa;
        empresaSelect.appendChild(option);
      });
    } else {
      showMessage("Não foi possível carregar as empresas.", "error");
    }
  } catch (error) {
    console.error(error);
    showMessage("Erro ao carregar as empresas.", "error");
  }
}

async function populateDataSelect(company) {
  const dataSelect = document.getElementById("dataSelect");
  dataSelect.innerHTML = '<option value="">-- Selecione uma data --</option>';
  try {
    const response = await fetch(`/api/datas/${encodeURIComponent(company)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (response.ok && data.data) {
      data.data.forEach((date) => {
        const option = document.createElement("option");
        option.value = date;
        option.textContent = date;
        dataSelect.appendChild(option);
      });
    } else {
      showMessage("Não foi possível carregar as datas.", "error");
    }
  } catch (error) {
    console.error(error);
    showMessage("Erro ao carregar as datas.", "error");
  }
}

document.getElementById("empresaSelect").addEventListener("change", (e) => {
  const selectedCompany = e.target.value;
  if (selectedCompany) {
    populateDataSelect(selectedCompany);
  } else {
    document.getElementById("dataSelect").innerHTML =
      '<option value="">-- Selecione uma data --</option>';
  }
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/api/autenticar/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      token = data.token;
      showMessage("Login efetuado com sucesso!");
      populateEmpresaSelect();
    } else {
      showMessage(data.message, "error");
    }
  } catch (error) {
    console.error(error);
    showMessage("Erro ao se conectar com o servidor", "error");
  }
});

document.getElementById("btnGetUser").addEventListener("click", async () => {
  if (!token) {
    showMessage("Faça o login primeiro.", "error");
    return;
  }
  try {
    const response = await fetch("/api/autenticar/usuario", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (response.ok) {
      showMessage(formatUser(data.data));
    } else {
      showMessage(data.message, "error");
    }
  } catch (error) {
    console.error(error);
    showMessage("Erro ao obter dados do usuário", "error");
  }
});

document.getElementById("btnGetUsers").addEventListener("click", async () => {
  if (!token) {
    showMessage("Faça o login primeiro.", "error");
    return;
  }
  try {
    const response = await fetch("/api/usuarios", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (response.ok) {
      showMessage(formatUsers(data.data));
    } else {
      showMessage(data.message, "error");
    }
  } catch (error) {
    console.error(error);
    showMessage("Erro ao obter usuários", "error");
  }
});

document
  .getElementById("btnGetContracts")
  .addEventListener("click", async () => {
    if (!token) {
      showMessage("Faça o login primeiro.", "error");
      return;
    }
    const empresa = document.getElementById("empresaSelect").value;
    const inicio = document.getElementById("dataSelect").value;
    if (!empresa || !inicio) {
      showMessage("Selecione uma empresa e uma data.", "error");
      return;
    }
    try {
      const url = `/api/contratos/${encodeURIComponent(
        empresa
      )}/${encodeURIComponent(inicio)}`;
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        showMessage(formatContracts(data.data));
      } else {
        showMessage(data.message || data.data, "error");
      }
    } catch (error) {
      console.error(error);
      showMessage("Erro ao obter contrato", "error");
    }
  });

document.getElementById("btnLogout").addEventListener("click", () => {
  token = "";
  showMessage("Logout efetuado com sucesso!");
});

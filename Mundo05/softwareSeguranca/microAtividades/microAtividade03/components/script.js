const messageDiv = document.getElementById("message");

function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = "message " + (type === "error" ? "error" : "success");
  messageDiv.style.display = "block";
}

// Evento de login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  messageDiv.style.display = "none";

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const data = { username, password };

  fetch("http://localhost:3000/autenticar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.jwt_token) {
        localStorage.setItem("token", json.jwt_token);
        localStorage.setItem("tokenExp", json.exp);
        showMessage("Login efetuado com sucesso!", "success");
      } else {
        showMessage(json.message || "Erro no login.", "error");
      }
    })
    .catch((err) => {
      console.error(err);
      showMessage("Erro ao se conectar com o servidor.", "error");
    });
});

// Evento para acesso restrito
document.getElementById("actionButton").addEventListener("click", function () {
  messageDiv.style.display = "none";
  const token = localStorage.getItem("token");
  const tokenExp = parseInt(localStorage.getItem("tokenExp"), 10);
  const now = Math.floor(Date.now() / 1000);

  if (!token || now >= tokenExp) {
    showMessage(
      "Token expirado ou inexistente, por favor faça o login novamente.",
      "error"
    );
    return;
  }

  fetch("http://localhost:3000/acessoRestrito", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      autorizar: `firewall ${token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      showMessage(json.data, "success");
    })
    .catch((err) => {
      console.error(err);
      showMessage("Erro ao acessar a área restrita.", "error");
    });
});

// Evento para logoff
document.getElementById("logoutButton").addEventListener("click", function () {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExp");
  showMessage("Você foi deslogado com sucesso.", "success");
});






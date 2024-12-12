import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Fornecedor from "./src/components/Fornecedor";
import Listagem from "./src/components/Listagem";
import Login from "./src/pages/Login";

export default function App() {
  const [paginaAtual, setPaginaAtual] = useState("login");
  const [fornecedores, setFornecedores] = useState([]);
  const [fornecedorEditando, setFornecedorEditando] = useState(null);

  const adicionarFornecedor = (novoFornecedor) => {
    if (fornecedorEditando) {
      setFornecedores(fornecedores.map(f => f.id === novoFornecedor.id ? novoFornecedor : f));
      setFornecedorEditando(null);
    } else {
      setFornecedores([...fornecedores, novoFornecedor]);
    }
    setPaginaAtual("listagem");
  };

  const excluirFornecedor = (id) => {
    setFornecedores(fornecedores.filter((fornecedor) => fornecedor.id !== id));
  };

  const editarFornecedor = (fornecedor) => {
    setFornecedorEditando(fornecedor); 
    setPaginaAtual("fornecedor");
  };

  const handleLogin = () => {
    setPaginaAtual("listagem");
  };

  const handleLogoff = () => {
    setPaginaAtual("login");
  };

  return (
    <View style={styles.container}>
      {paginaAtual === "login" ? (
        <Login onLogin={handleLogin} />
      ) : paginaAtual === "listagem" ? (
        <Listagem
          fornecedores={fornecedores}
          onAdicionar={() => {
            setFornecedorEditando(null); 
            setPaginaAtual("fornecedor");
          }}
          onExcluir={excluirFornecedor}
          onEditar={editarFornecedor}
          onLogoff={handleLogoff}
        />
      ) : (
        <Fornecedor
          onAdicionar={adicionarFornecedor}
          onVoltar={() => setPaginaAtual("listagem")}
          fornecedor={fornecedorEditando} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#E9EFEC",
  },
});

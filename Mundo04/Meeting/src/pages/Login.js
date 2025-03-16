import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

export default function Login({ onLogin }) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  //Caso precise, basta alterar o login e senha para o que desejar
  const handleLogin = () => {
    if (login === "admin" && senha === "admin") {
      onLogin();
    } else {
      Alert.alert(
        "Credenciais inválidas",
        "O login ou a senha estão incorretos."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/meeting.png")} style={styles.logo} />
      <Text style={styles.texto}>Login</Text>
      <TextInput
        placeholder="admin"
        value={login}
        onChangeText={setLogin}
        style={styles.input}
      />
      <Text style={styles.texto}>Senha</Text>
      <TextInput
        placeholder="admin"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text style={styles.btnTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9EFEC",
    padding: 20,
  },
  texto: {
    fontSize: 14,
    color: "#16423C",
    marginBottom: 5,
    textAlign: "left",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 85,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#16423C",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "#16423C",
    padding: 10,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  btnTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});

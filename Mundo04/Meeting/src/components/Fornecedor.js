import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  btn,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Fornecedor({ onAdicionar, onVoltar, fornecedor }) {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState(null);

  useEffect(() => {
    if (fornecedor) {
      setNome(fornecedor.nome);
      setEndereco(fornecedor.endereco);
      setContato(fornecedor.contato);
      setCategoria(fornecedor.categoria);
      setImagem(fornecedor.imagem);
    }
  }, [fornecedor]);

  //Opção para escolher imagem da galeria
  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //as opções abaixo são para editar a imagem, caso queira desabilitar, basta comentar a linha abaixo
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImagem(result.assets[0].uri);
    }
  };

  const adicionarFornecedor = () => {
    if (nome && endereco && contato && categoria && imagem) {
      const novoFornecedor = {
        id: fornecedor ? fornecedor.id : Math.random().toString(),
        nome,
        endereco,
        contato,
        categoria,
        imagem,
      };
      onAdicionar(novoFornecedor);
      setNome("");
      setEndereco("");
      setContato("");
      setCategoria("");
      setImagem(null);
    } else {
      Alert.alert("Preencha todos os campos e selecione uma imagem.");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.tituloTexto}>
          {fornecedor ? "Editar Fornecedor" : "Cadastrar Fornecedor"}
        </Text>

        <Text style={styles.texto}>Nome</Text>
        <TextInput
          placeholder="Nome do Fornecedor"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <Text style={styles.texto}>Endereço</Text>
        <TextInput
          placeholder="Localização do Fornecedor"
          value={endereco}
          onChangeText={setEndereco}
          style={styles.input}
        />
        <Text style={styles.texto}>Contato</Text>
        <TextInput
          placeholder="Telefone ou E-mail para contato"
          value={contato}
          onChangeText={setContato}
          style={styles.input}
        />
        <Text style={styles.texto}>Categoria</Text>
        <TextInput
          placeholder="Área de atuação do Fornecedor"
          value={categoria}
          onChangeText={setCategoria}
          style={styles.input}
        />

        <TouchableOpacity onPress={escolherImagem} style={styles.btn}>
          <Text style={styles.btnTexto}>Escolher Imagem</Text>
        </TouchableOpacity>

        {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}

        <TouchableOpacity
          onPress={adicionarFornecedor}
          style={styles.btnAdicionar}
        >
          <Text style={styles.btnTexto}>
            {fornecedor ? "Atualizar Fornecedor" : "Adicionar Fornecedor"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onVoltar} style={styles.btn}>
          <Text style={styles.btnTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#E9EFEC",
  },
  tituloTexto: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#16423C",
  },
  texto: {
    fontSize: 14,
    color: "#6A9C89",
    marginBottom: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#16423C",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "#16423C",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 5,
  },
  btnTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  btnAdicionar: {
    backgroundColor: "#6A9C89",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 5,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
});

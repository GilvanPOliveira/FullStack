import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Microatividade2 = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.texto}
        placeholder="Digite aqui o que deseja traduzir!"
        placeholderTextColor={"#ccc"}
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
      <Text style={styles.textoTraduzido}>
        {text
          .split(/(\W+)/)
          .filter((word) => word.trim().length > 0)
          .map(() => "🍕")
          .join(" ")}{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  texto: {
    color: "white",
    height: 40,
    width: 250,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: "center",
  },
  textoTraduzido: {
    padding: 10,
    fontSize: 42,
  },
});

export default Microatividade2;

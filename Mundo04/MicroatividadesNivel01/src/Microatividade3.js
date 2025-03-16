import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const Microatividade3 = () => {
  const logoReactNative = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 32,
    height: 32,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Scroll me plz</Text>
          {[...Array(20)].map((_, i) => (
            <Image key={i} source={logoReactNative} style={styles.imagem} />
          ))}
          <Text style={styles.texto}>If you like</Text>
          {[...Array(20)].map((_, i) => (
            <Image key={i} source={logoReactNative} style={styles.imagem} />
          ))}
          <Text style={styles.texto}>Scrolling down</Text>
          {[...Array(20)].map((_, i) => (
            <Image key={i} source={logoReactNative} style={styles.imagem} />
          ))}
          <Text style={styles.texto}>What's the best</Text>
          {[...Array(20)].map((_, i) => (
            <Image key={i} source={logoReactNative} style={styles.imagem} />
          ))}
          <Text style={styles.texto}>React Native</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderWidth: 2,
    borderColor: "#61dafb",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  textoContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  texto: {
    fontSize: 24,
    marginVertical: 10,
    color: "#fff",
  },
  imagem: {
    width: 64,
    height: 64,
    marginVertical: 3,
  },
});

export default Microatividade3;

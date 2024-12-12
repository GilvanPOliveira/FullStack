import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Microatividade1 from "./src/Microatividade1";
import Microatividade2 from "./src/Microatividade2";
import Microatividade3 from "./src/Microatividade3";
import Microatividade4 from "./src/Microatividade4";
import Microatividade5 from "./src/Microatividade5";

const App = () => {
  const [selectedActivity, setSelectedActivity] = useState("Microatividade1");

  const activities = [
    { key: "Microatividade1", label: "1" },
    { key: "Microatividade2", label: "2" },
    { key: "Microatividade3", label: "3" },
    { key: "Microatividade4", label: "4" },
    { key: "Microatividade5", label: "5" },
  ];
  const renderSelectedActivity = () => {
    switch (selectedActivity) {
      case "Microatividade1":
        return <Microatividade1 />;
      case "Microatividade2":
        return (
          <View style={styles.microatividade}>
            <Text style={styles.titulo}>Microatividade 2</Text>
            <Text style={styles.texto}>Quer traduzir algo em pizzas:</Text>
            <Microatividade2 />
          </View>
        );
      case "Microatividade3":
        return (
          <View style={styles.microatividade}>
            <Text style={styles.titulo}>Microatividade 3</Text>
            <Text style={styles.texto}>Exemplo de Lista Dinâmica:</Text>
            <Microatividade3 />
          </View>
        );
      case "Microatividade4":
        return (
          <View style={styles.microatividade}>
            <Text style={styles.titulo}>Microatividade 4</Text>
            <Text style={styles.texto}>Visualizador de Listas:</Text>
            <Microatividade4 />
          </View>
        );
      case "Microatividade5":
        return (
          <View style={styles.microatividade}>
            <Text style={styles.titulo}>Microatividade 5</Text>
            <Text style={styles.texto}>Aplicar Estilos:</Text>
            <Microatividade5 />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>
          Selecione a Microatividade que deseja vizualizar:{" "}
        </Text>
        <View style={styles.links}>
          <TouchableOpacity
            onPress={() => setSelectedActivity("Microatividade1")}
          >
            <Text style={styles.textoLink}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedActivity("Microatividade2")}
          >
            <Text style={styles.textoLink}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedActivity("Microatividade3")}
          >
            <Text style={styles.textoLink}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedActivity("Microatividade4")}
          >
            <Text style={styles.textoLink}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedActivity("Microatividade5")}
          >
            <Text style={styles.textoLink}>5</Text>
          </TouchableOpacity>
        </View>
        {renderSelectedActivity()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282c34",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  microatividade: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#61dafb",
    borderRadius: 10,
    marginBottom: 20,
  },
  texto: {
    fontFamily: "monospace",
    color: "white",
    textAlign: "center",
  },
  textoLink: {
    color: "#61dafb",
    fontSize: 18,
    textDecorationLine: "none",
    marginHorizontal: 10,
  },
  titulo: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    textDecorationLine: "none",
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default App;

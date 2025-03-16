import React from "react";
import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";

const Microatividade4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista Simples</Text>
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
      <Text style={styles.titulo}>Lista com Seções</Text>
      <SectionList
        sections={[
          { title: "D", data: ["Devin", "Dan", "Dominic"] },
          {
            title: "J",
            data: [
              "Jackson",
              "James",
              "Jillian",
              "Jimmy",
              "Joel",
              "John",
              "Julie",
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.texto2}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 10,
    height: 320,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#61dafb",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "white",
  },
  texto2: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#eee",
  },
});

export default Microatividade4;

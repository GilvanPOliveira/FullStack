import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Microatividade5 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoReact}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Image
        style={styles.logoReact}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Image
        style={styles.positivo}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />
      <Image
        style={styles.logoReactAlterado}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  logoReact: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  positivo: {
    width: 33,
    height: 29,
    marginBottom: 10,
  },
  logoReactAlterado: {
    width: 55,
    height: 111,
    resizeMode: "stretch",
  },
});

export default Microatividade5;

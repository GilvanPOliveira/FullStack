import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Animated, 
  Easing, 
} from "react-native";
import logo from "../assets/logo.png";

const Microatividade1 = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 9000, 
          easing: Easing.linear, 
          useNativeDriver: true, 
        })
      ).start();
    };
    startRotation(); 
  }, [rotateValue]);
  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], 
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.microatividade}>
      <Text style={styles.texto}>Microatividade 1</Text>
      <Animated.Image source={logo} style={[styles.logo, animatedStyle]} />
      <Text style={styles.texto}>
        Edit <Text style={styles.texto2}>src/App.js</Text> and save to reload.
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://reactjs.org")}>
        <Text style={styles.link}>Learn React</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  microatividade: {
    height: 407,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#61dafb",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: 274,
  },
  logo: {
    width: 90,
    height: 100,
    marginBottom: 20,
  },
  texto: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  texto2: {
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "white",
    textAlign: "center",
  },
  link: {
    color: "#61dafb",
  },
});

export default Microatividade1;

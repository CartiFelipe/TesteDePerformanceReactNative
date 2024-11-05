import React from "react";
import { View, Text, StyleSheet } from "react-native";

const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString();
};

const Index = () => {
  const nome = "Caio Felipe Fernandes de Andrade";
  const horaAtual = getCurrentTime();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá, {nome}! Agora são {horaAtual}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Index;

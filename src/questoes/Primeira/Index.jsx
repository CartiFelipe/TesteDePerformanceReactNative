import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Index() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkPalindrome = () => {
    const cleanedText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedText = cleanedText.split("").reverse().join("");
    if (cleanedText === reversedText) {
      setResult("É um palíndromo");
    } else {
      setResult("Não é um palíndromo");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Palíndromo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um texto"
        value={text}
        onChangeText={setText}
      />
      <Button title="Verificar" onPress={checkPalindrome} />
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    textAlign: "center",
  },
});

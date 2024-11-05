import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: "#DDDDDD",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 32,
  },
});

export default Index;

import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
const index = () => {
  const nome = "Caio Felipe Fernandes de Andrade";
  const [horaAtual, setHoraAtual] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={style.container}>
      <Text>Olá, {nome}!</Text>
      <Text>Agora são: {horaAtual}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 10,
  },
});
export default index;

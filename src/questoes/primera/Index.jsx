import { View, Text, StyleSheet } from "react-native";

const Index = () => {
  const seuNomeCompleto = "Caio Felipe Fernandes de Andrade";
  const horaAtual = new Date().toLocaleTimeString();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá, {seuNomeCompleto}! Agora são {horaAtual}
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

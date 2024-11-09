import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

const Index = ({ products }) => {
  return (
    <View style={style.container}>
      <Text>Products</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 200,
    height: "100%",
    width: "100%",

    gap: 20,
  },
});
export default Index;

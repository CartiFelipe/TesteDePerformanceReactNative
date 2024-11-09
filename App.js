import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ProductLog from './src/views/productsLog/Index.jsx';
import Products from './src/views/products/Index.jsx';
import Main from "./src/views/main/Index.jsx";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ddd",

  },
});

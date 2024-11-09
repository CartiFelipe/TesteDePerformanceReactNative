import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Primeira from "./src/questoes/primera/Index.jsx";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Primeira />


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

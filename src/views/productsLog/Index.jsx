import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
const Index = ({ handleSubmit }) => {
  const [products, setProducts] = useState([]);
  const [inputs, setInputs] = useState({});
  const handleInputChange = (text, name) => {
    setInputs({
      ...inputs,
      [name]: text,
    });
  };

  return (
    <View style={style.container}>
      <TextInput
        placeholder="Product Name"
        style={style.input}
        onChangeText={(text) => {
          handleInputChange(text, "name");
        }}
      />
      <TextInput
        placeholder="Product Price"
        style={style.input}
        keyboardType="number-pad"
        onChangeText={(text) => {
          handleInputChange(text, "price");
        }}
      />
      <Button
        title="Add Product"
        style={style.btn}
        onPress={() => handleSubmit(inputs)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: "black",

    height: 150,
    width: 150,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: 200,
  },
});

export default Index;

import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import Products from "../products/Index";
import ProductLog from "../productsLog/Index";
import { useEffect, useState } from "react";
import { View } from "react-native";

const Index = () => {
  const [screen, setScreen] = useState(1);
  const [products, setProducts] = useState([]);
  const submit = (inputs) => {
    const newProduct = {
      name: inputs.name,
      price: inputs.price,
    };
    setProducts([...products, newProduct]);
  };

  useEffect(() => {
    products.length ? setScreen(1) : setScreen(2);
  }, [products]);

  return (
    <View>
      {screen === 1 && <Products products={products} setProducts={setProducts} />}
      {screen === 2 && <ProductLog handleSubmit={submit} />}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
export default Index;

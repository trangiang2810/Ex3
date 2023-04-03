import React, { useState, useEffect, useContext } from "react";
import { useApi } from "../../apis/api";
import Product from "../../components/Products";
import styles from "./styles.module.scss";
import { ShoppingCartContext } from "@/contexts/ShoppingContext";

const Products: React.FC = () => {
  // const [dataProducts, setDataProducts] = useState([]);
  const { dataProducts, setDataProducts }: any =
    useContext(ShoppingCartContext);
  const $api = useApi();

  useEffect(() => {
    const getProduct = async () => {
      const data: any = await $api.getProducts();
      setDataProducts(data);
    };
    getProduct();
  }, []);

  return (
    <div className={styles.container}>
      {dataProducts.map((products: any, index: number) => (
        <Product key={index} {...products} />
      ))}
    </div>
  );
};
export default Products;

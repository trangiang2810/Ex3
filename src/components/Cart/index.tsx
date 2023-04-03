import React, { useContext, useEffect, useState } from "react";
import { useApi } from "../../apis/api";
import { Layout, Rate, Image, Button } from "antd";
import styles from "./styles.module.scss";
import { ShoppingCartContext } from "@/contexts/ShoppingContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

const Carts = ({ id, quantity }: CartItemProps) => {
  const {
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    dataProducts,
  }: any = useContext(ShoppingCartContext);

  console.log(dataProducts);

  const item = dataProducts.find((i: any) => i.id === id);
  if (item === null) return null;
  console.log(item);

  return (
    <Layout className={styles.container}>
      <div className={styles.productItems}>
        <Image className={styles.imgUrl} src={item.images[0]} alt="img" />
        <span>{item.title}</span>
        <span>{item.price}.000 đ</span>
        <div className={styles.quantity}>
          <span>
            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
          </span>
          <span>{quantity}</span>
          <span>
            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
          </span>
        </div>
        <span>
          <Button onClick={() => removeFromCart(id)}>Remove</Button>
        </span>
      </div>
    </Layout>
  );
};

export default Carts;

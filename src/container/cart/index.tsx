// import Carts from "@/components/Cart";
import { ShoppingCartContext } from "@/contexts/ShoppingContext";
import { Button, Layout } from "antd";
import { useContext } from "react";
import Carts from "../../components/Cart/";
import styles from "./styles.module.scss";
type CartItemProps = {
  id: number;
  quantity: number;
};
export default function Cart() {
  const { cartItems, dataProducts, clearFromCart }: any =
    useContext(ShoppingCartContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Giỏ hàng của bạn</h1>
      {cartItems.map((item: CartItemProps, index: number) => (
        <Carts key={index} {...item} />
      ))}

      <div className={styles.total}>
        Total:
        {cartItems.reduce((total: any, cartItems: any) => {
          const item = dataProducts.find((i: any) => i.id === cartItems.id);
          return total + (item?.price || 0) * cartItems.quantity;
        }, 0)}
        .000d
      </div>
    </div>
  );
}

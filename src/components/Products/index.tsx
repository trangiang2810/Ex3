import React, { useContext } from "react";
import { Layout, Rate, Image, Button } from "antd";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ShoppingCartContext } from "@/contexts/ShoppingContext";

const Product: React.FC = ({ id, title, rating, price, images }: any) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  }: any = useContext(ShoppingCartContext);

  const quantity = getItemQuantity(id);

  return (
    <Layout>
      <div key={id} className={styles.itemContainer}>
        <div className={styles.imgItems}>
          <Image src={images[0]} alt="img" />
        </div>
        <div className={styles.wrapperContent}>
          <Link href={`/product/${id}`}>
            <h2>{title}</h2>
            <span className={styles.price}>{price}.000 đ</span>
            <div className={styles.reviews}>
              <span>Đánh giá: {price}</span>
              <Rate allowHalf defaultValue={rating} />
            </div>
          </Link>
          <div className={styles.btnAdd}>
            {quantity === 0 ? (
              <button onClick={() => increaseCartQuantity(id)}>
                Thêm sản phẩm
              </button>
            ) : (
              <div>
                <div className={styles.btnQuantity}>
                  <button onClick={() => decreaseCartQuantity(id)}>-</button>
                  <div>
                    <span>{quantity} </span>
                    cart
                  </div>
                  <button onClick={() => increaseCartQuantity(id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(id)}>Remove</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

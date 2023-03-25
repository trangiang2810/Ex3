import React from "react";
import { Layout, Rate } from "antd";
import styles from "./styles.module.scss";
import Image from "next/image";
import { dataProducts } from "../../data/data";
import axios from "axios";
const Product: React.FC = () => (
  <Layout>
    <div className={styles.container}>
      {dataProducts.map(({ id, image, title, price, rating }) => (
        <div key={id} className={styles.itemContainer}>
          <div>
            <Image src={image} alt="hi" />
          </div>
          <div className={styles.wrapperContent}>
            <h2>{title}</h2>

            <span className={styles.price}>{price}.000 đ</span>

            <div className={styles.reviews}>
              <span>Đánh giá: </span>
              <Rate allowHalf defaultValue={rating} />
            </div>
            <div className={styles.btnAdd}>
              <button>Thêm sản phẩm</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default Product;

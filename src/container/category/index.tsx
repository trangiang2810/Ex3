import React, { useState, useEffect } from "react";
import { Layout, Rate } from "antd";
import styles from "./styles.module.scss";
import Image from "next/image";
import { dataProducts } from "../../data/data";
import a from "../product/access/chairs/chair1.jpg";
const Product: React.FC = () => (
  <Layout className={styles.container}>
    {dataProducts.map(({ category }, index) => (
      <div key={index} className={styles.itemContainer}>
        <Image alt="s" src={a} />
        <div className={styles.content}>
          <h2>aasa</h2>
          <p>10 Sản phẩm</p>
        </div>
      </div>
    ))}
  </Layout>
);

export default Product;

import React, { useState, useEffect, useContext } from "react";
import { Layout, Rate } from "antd";
import styles from "./styles.module.scss";
import Image from "next/image";
import { dataProducts } from "../../data/data";
import axios from "axios";
import { useApi } from "@/context/Context";
// import config from "../../../config.json";
const Product: React.FC = () => {
  const { posts } = useApi();

  return (
    <Layout>
      <div className={styles.container}>
        {posts.products?.map((items: any) => (
          <div key={items.id} className={styles.itemContainer}>
            <div>
              <img src={items.images[0]} alt="img" />
            </div>
            <div className={styles.wrapperContent}>
              <h2>{items.title}</h2>

              <span className={styles.price}>{items.price}.000 đ</span>

              <div className={styles.reviews}>
                <span>Đánh giá: {items.price}</span>
                <Rate allowHalf defaultValue={items.rating} />
              </div>
              <div className={styles.btnAdd}>
                <button>Thêm sản phẩm</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 
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
      </div> */}
    </Layout>
  );
};

export default Product;

import React, { useState, useEffect } from "react";
import { Layout, Rate } from "antd";
import styles from "./styles.module.scss";
import Image from "next/image";
import { dataProducts } from "../../data/data";
import axios from "axios";
import config from "../../../config.json";
const Product: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPonit = "https://dummyjson.com/products";

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(config.apiUrl);
      setPosts(data);
    };
    getPosts();
    console.log(posts);
  }, []);

  let data = Array.from(posts.products);
  console.log(data);

  return (
    <Layout>
      <div className={styles.container}>
        {data.map((items: any, index: number): any => (
          <div key={index} className={styles.itemContainer}>
            <div>
              <img src={items.images[1]} alt="hi" />{" "}
            </div>
            <div className={styles.wrapperContent}>
              <h2>{items.title}</h2>

              <span className={styles.price}>{items.price}.000 đ</span>

              <div className={styles.reviews}>
                <span>Đánh giá: </span>
                <Rate allowHalf defaultValue={items.rating} />
              </div>
              <div className={styles.btnAdd}>
                <button>Thêm sản phẩm</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className={styles.container}>
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

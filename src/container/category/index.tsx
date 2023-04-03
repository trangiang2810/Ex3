import React, { useState, useEffect } from "react";
import { Layout, Rate } from "antd";
import styles from "./styles.module.scss";
import axios from "axios";
const Product: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPonit = "https://dummyjson.com/products/categories";

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPonit);
      setPosts(res);
    };
    getPosts();
  }, []);

  return (
    <>
      <Layout className={styles.container}>
        {posts.map((a, index) => (
          <div key={index} className={styles.itemContainer}>
            <div className={styles.content}>
              <h2>{a}</h2>
            </div>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Product;

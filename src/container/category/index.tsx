import React, { useState, useEffect } from "react";
import { Layout, Rate } from "antd";
import styles from "./styles.module.scss";
import Image from "next/image";
import { dataProducts } from "../../data/data";
import a from "../product/access/chairs/chair1.jpg";
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
    // console.log(posts);
  }, []);

  return (
    <>
      <Layout className={styles.container}>
        {posts.map((a, index) => (
          <div key={index} className={styles.itemContainer}>
            {/* <Image alt="s" src={a} /> */}
            <div className={styles.content}>
              <h2>{a}</h2>
            </div>
          </div>
        ))}
      </Layout>
      ;
    </>
  );
};

export default Product;

// import React, { useState, useEffect } from "react";
// import { Layout, Rate } from "antd";
// import styles from "./styles.module.scss";
// import Image from "next/image";
// import { dataProducts } from "../../data/data";
// import a from "../product/access/chairs/chair1.jpg";
// const Product: React.FC = () => (
//   <Layout className={styles.container}>
//     {dataProducts.map(({ category }, index) => (
//       <div key={index} className={styles.itemContainer}>
//         <Image alt="s" src={a} />
//         <div className={styles.content}>
//           <h2>aasa</h2>
//           <p>10 Sản phẩm</p>
//         </div>
//       </div>
//     ))}
//   </Layout>
// );

// export default Product;

import { Layout } from "antd";
import img from "./chair3.jpg";
import Image from "next/image";
import styles from "./styles.module.scss";

const ProductDetail: React.FC = () => {
  return (
    <Layout className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={img} alt="a" />

        <div className={styles.content}>
          <h1>Ghe Ema chan go boc cao su</h1>
          <p>
            <span>Đơn giá:</span>
            <span>100000</span>
          </p>
          <p>Mô tả: chân gỗ ép, đệm bọc da</p>
          <button>Thêm sản phẩm</button>
        </div>
      </div>
    </Layout>
  );
};
export default ProductDetail;

// export const getStaticPaths = async () => {
//   const query = `*[_type == "post]`;
// };

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, InputNumber, Upload } from "antd";
import axios from "axios";
import Axios from "axios";
const { TextArea } = Input;

const CreateProduct: React.FC = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState("");

  const AddProductInfo = async () => {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
      const getPosts = async () => {
        const { data: res } = await axios.get(apiEndPoint);
        setPosts(res);
      };
      getPosts();
    }, []);
    //   formField.append("title", title);
    //   formField.append("description", description);
    //   formField.append("price", price);
    //   formField.append("discountPercentage", discountPercentage);
    //   formField.append("rating", rating);
    //   formField.append("stock", stock);
    //   formField.append("brand", brand);
    //   formField.append("category", category);
    //   formField.append("thumbnail", thumbnail);
    //   if (images !== null) {
    //     formField.append("images", images);
    //   }
    //   await axios({
    //     method: "post",
    //     url: "https://dummyjson.com/products",
    //     data: formField,
    //   }).then((response) => {
    //     console.log(response.data);
    //   });
  };

  const apiProduct = "https://dummyjson.com/products";

  // useEffect(() => {
  // const getPosts = async () => {
  //   const { data: res } = await axios.get(apiProduct);
  //   setPosts(res);
  // };
  // getPosts();
  //   axios
  //     .get(apiProduct)
  //     .then((res) => {
  //       console.log("get ::: ", res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const postData = (e: any) => {
    e.preventDefault();
    Axios.post(apiProduct, {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    })
      .then((res) => console.log("posting data", res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Add product</h1>
      <label>Select to </label>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="des"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="discountPercentage"
          name="discountPercentage"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />
        <input
          type="text"
          placeholder="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          placeholder="stock"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="text"
          placeholder="brand"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <input
          type="text"
          placeholder="images"
          name="images"
          value={images}
          // multiple
          onChange={(e) => setImages(e.target.value)}
        />
      </div>
      <button onClick={postData}>Adddddd</button>
    </div>

    // {arr}
  );
};

export default CreateProduct;

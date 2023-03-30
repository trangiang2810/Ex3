import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useParams } from "react-router";
import axios from "axios";
import config from "../../../config.json";
import { useRouter } from "next/router";
import { useApi } from "@/apis/api";
interface PostClone {
  // images: string;
  title: string;
  description: string;
  price: string;
  discountPercentage: string;
  rating: string;
  stock: string;
  brand: string;
  category: string;
  // thumbnail: string;
}
const New: React.FC = () => {
  // const id = "new";
  const [post, setPost] = useState<PostClone>({
    // images: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    // thumbnail: "",
  });

  const router = useRouter();

  const $api = useApi();

  // useEffect(() => {
  //   // if(id === "new")
  //   const fetchPosts = async () => {
  //     const data: any = await $api.getProducts();
  //     setPost(data);
  //   };
  //   fetchPosts();
  // }, []);

  console.log(post);

  const handleChange = (e: any) => {
    const postClone: any = { ...post };
    postClone[e.target.name] = e.target.value;
    setPost(postClone);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      axios.post("https://dummyjson.com/products", post);
      return router.push("/postProduct");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="images">Tải ảnh lên</label>
          {/* <input
            type="file"
            name="images"
            value={post.images}
            onChange={handleChange}
          /> */}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          <label htmlFor="description"></label>
          description
          <input
            type="text"
            name="description"
            value={post.description}
            onChange={handleChange}
          />
          <label htmlFor="price">price</label>
          <input
            type="number"
            name="price"
            value={post.price}
            onChange={handleChange}
          />
          <label htmlFor="discountPercentage">discountPercentage</label>
          <input
            type="text"
            name="discountPercentage"
            value={post.discountPercentage}
            onChange={handleChange}
          />
          <label htmlFor="rating">rating</label>
          <input
            type="number"
            name="rating"
            value={post.rating}
            onChange={handleChange}
          />
          <label htmlFor="stock">stock</label>
          <input
            type="text"
            name="stock"
            value={post.stock}
            onChange={handleChange}
          />
          <label htmlFor="brand">brand</label>
          <input
            type="text"
            name="brand"
            value={post.brand}
            onChange={handleChange}
          />
          <label htmlFor="category">category</label>
          <input
            type="text"
            name="category"
            value={post.category}
            onChange={handleChange}
          />
          {/* <label htmlFor="tair anhr leeng">tair anhr leeng</label>
          <input
            type="file"
            name="thumbnail"
            value={post.thumbnail}
            onChange={handleChange}
          /> */}
          <button onClick={handleSubmit}>post</button>
        </form>
      </div>
    </Layout>
  );
};
export default New;

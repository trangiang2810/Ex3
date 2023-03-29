import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useParams } from "react-router";
import axios from "axios";
import config from "../../../config.json";
import { useRouter } from "next/router";

interface PostClone {
  file: string;
  title: string;
  description: string;
  price: string;
  discountPercentage: string;
  rating: string;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
}
const New: React.FC = () => {
  // const id = "new";
  const [post, setPost] = useState<PostClone>({
    file: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(config.apiUrl);
      setPost(data);
    };
    fetchPost();
  }, []);

  const handleChange = (e: any) => {
    const postClone: any = { ...post };
    postClone[e.target.name] = e.target.value;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      axios.post(config.apiUrl, post);
      return router.push("/post/postProduct");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="images">Tải ảnh lên</label>
          <input
            type="file"
            name="images"
            value={post.products?.images}
            onChange={handleChange}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={post.products?.title}
            onChange={handleChange}
          />
          <label htmlFor="description"></label>
          description
          <input
            type="text"
            name="description"
            value={post.products?.description}
            onChange={handleChange}
          />
          <label htmlFor="price">price</label>
          <input
            type="text"
            name="price"
            value={post.products?.price}
            onChange={handleChange}
          />
          <label htmlFor="discountPercentage">discountPercentage</label>
          <input
            type="text"
            name="discountPercentage"
            value={post.products?.discountPercentage}
            onChange={handleChange}
          />
          <label htmlFor="rating">rating</label>
          <input
            type="text"
            name="rating"
            value={post.products?.rating}
            onChange={handleChange}
          />
          <label htmlFor="stock">stock</label>
          <input
            type="text"
            name="stock"
            value={post.products?.stock}
            onChange={handleChange}
          />
          <label htmlFor="brand">brand</label>
          <input
            type="text"
            name="brand"
            value={post.products?.brand}
            onChange={handleChange}
          />
          <label htmlFor="category">category</label>
          <input
            type="text"
            name="category"
            value={post.products?.category}
            onChange={handleChange}
          />
          <label htmlFor="tair anhr leeng">tair anhr leeng</label>
          <input
            type="file"
            name="thumbnail"
            value={post.products?.thumbnail}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>post</button>
        </form>
      </div>
    </Layout>
  );
};
export default New;

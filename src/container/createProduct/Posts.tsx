import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config.json";
import { Button, Image } from "antd";
import { useRouter } from "next/router";
import { useApi } from "@/apis/api";
const CreateProduct: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const $api = useApi();
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const data: any = await $api.getProducts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  console.log(posts);

  const handleDelete = async (post: any) => {
    try {
      setPosts(posts.filter((p: any) => p.id !== post.id));
      await axios.delete(`${config.apiUrl}/${post.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={() => router.push(`post/new`)}>Add product</Button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>images</th>
            <th>Title</th>
            <th>description</th>
            <th> price</th>
            <th>discountPercentage</th>
            <th>rating</th>
            <th>stock</th>
            <th>brand</th>
            <th>category</th>
            <th>thumbnail</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: any) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Image src={post.images[0]} alt="" />
              </td>
              <td style={{ display: "inline" }}>{post.title}</td>
              <td>{post.description}</td>
              <td>{post.price}</td>
              <td>{post.discountPercentage}</td>
              <td>{post.rating}</td>
              <td>{post.stock}</td>
              <td>{post.brand}</td>
              <td>{post.category}</td>
              <Image src={post.thumbnail} alt="" />

              <td>
                <Button onClick={() => router.push(`/post/${post.id}`)}>
                  Update
                </Button>
              </td>
              <td>
                <Button onClick={() => handleDelete(post)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateProduct;

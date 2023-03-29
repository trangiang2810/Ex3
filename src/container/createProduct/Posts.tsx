import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config.json";
import { Button } from "antd";
import { useRouter } from "next/router";
const CreateProduct: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(config.apiUrl);
      setPosts(data);
    };
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <div>
      <Button onClick={() => router.push("/post/new")}>Add product</Button>
      <table>
        <thead>
          <tr>
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
          {posts.products?.map((post: any) => (
            <tr key={post.id}>
              <td>
                <img style={{ width: "100%" }} src={post.images[0]} alt="" />
              </td>
              <td style={{ display: "inline" }}>{post.title}</td>
              <td>{post.description}</td>
              <td>{post.price}</td>
              <td>{post.rating}</td>
              <td>{post.stock}</td>
              <td>{post.brand}</td>
              <td>{post.category}</td>
              <td>{post.thumbnail}</td>
              <td>{post.category}</td>
              <td>
                <Button onClick={() => router.push(`/post/${post.id}`)}>
                  Update
                </Button>
              </td>
              <td>
                <Button>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateProduct;

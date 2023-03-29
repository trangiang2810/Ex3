import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useParams } from "react-router";
import axios from "axios";
import config from "../../../config.json";

const New: React.FC = () => {
  const id = "new";
  const [post, setPost] = useState({});

  useEffect(() => {
    if (id === "new") return;

    const fetchPost = async () => {
      const { data } = await axios.get(`config.apiUrl/${id}`);
      setPost(data);
    };
    fetchPost();
  });
  console.log(post);

  return (
    <Layout>
      <div>
        <form>{/* <input type="text" value={post.products?.title} /> */}</form>
      </div>
    </Layout>
  );
};
export default New;

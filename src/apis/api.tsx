import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config.json";

export const useApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(config.apiUrl);
      setPosts(data);
    };
    fetchPosts();
  }, []);
  console.log(posts);
};

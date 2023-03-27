import { useState } from "react";
import Chair1 from "../container/product/access/chairs/chair1.jpg";
import Chair2 from "../container/product/access/chairs/chair2.jpg";
import Chair3 from "../container/product/access/chairs/chair3.jpg";
import Chair4 from "../container/product/access/chairs/chair4.jpg";

import Lamp1 from "../container/product/access/lamps/lamp1.jpg";
import Lamp2 from "../container/product/access/lamps/lamp2.jpg";
import Lamp3 from "../container/product/access/lamps/lamp3.jpg";

import Wardrobe1 from "../container/product/access/wardrobes/wardrobe1.jpg";
import Wardrobe2 from "../container/product/access/wardrobes/wardrobe2.jpg";
import Wardrobe3 from "../container/product/access/wardrobes/wardrobe3.jpg";
import Wardrobe4 from "../container/product/access/wardrobes/wardrobe4.jpg";
import axios from "axios";
// const Api = () => {
//   const [posts, setPosts] = useState([]);
//   const apiEndPonit = "https://dummyjson.com/products";

//   const getPosts = async () => {
//     const { data: res } = await axios.get<any>(apiEndPonit);
//     setPosts(res);
//   };
//   getPosts();
//   console.log(posts);
// };

export const dataProducts: ProductItem[] = [
  {
    id: 1,
    category: "Ghế",
    title: "Ghế Eames",
    image: Chair1,
    price: 170,
    rating: 4.5,
  },
  {
    id: 2,
    category: "Ghế",
    title: "Ghế Eames bọc da",
    image: Chair3,
    price: 230,
    rating: 3.8,
  },
  {
    id: 3,
    category: "Ghế",
    title: "Ghế nhực chân gỗ",
    image: Chair4,
    price: 170,
    rating: 5,
  },
  {
    id: 4,
    category: "Đèn",
    title: "Đèn kim cương",
    image: Lamp1,
    price: 220,
    rating: 3.8,
  },
  {
    id: 5,
    category: "Đèn",
    title: "Đèn xoắn ốc",
    image: Lamp2,
    price: 730,
    rating: 5,
  },
  {
    id: 6,
    category: "Đèn",
    title: "Ghế nhực chân gỗ",
    image: Lamp3,
    price: 840,
    rating: 4.3,
  },
  {
    id: 7,
    category: "Tủ",
    title: "Tủ gỗ",
    image: Wardrobe1,
    price: 2040,
    rating: 4.3,
  },
  {
    id: 8,
    category: "Tủ",
    title: "Tủ nhựa đen tuyền",
    image: Wardrobe2,
    price: 840,
    rating: 4.8,
  },
  {
    id: 9,
    category: "Tủ",
    title: "Tủ gỗ ép",
    image: Wardrobe3,
    price: 1540,
    rating: 5,
  },
  {
    id: 10,
    category: "Tủ",
    title: "Tủ nhựa cao cấp",
    image: Wardrobe4,
    price: 2540,
    rating: 5,
  },
];

import axios from "axios";
import config from "../../config.json";
export const useApi = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return {
    getProducts: async () => {
      let data: string[] = [];
      await axios
        .get("https://dummyjson.com/products", config)
        .then((response) => {
          data = response.data.products;
        })
        .catch((error) => console.log(error));
      return data;
    },
    getProductById: async (productId: string) => {
      let data: string[] = [];
      await axios
        .get(`https://dummyjson.com/products/${productId}`, config)
        .then((response) => {
          data = response.data;
        })
        .catch((error) => console.log(error));
      return data;
    },
  };
};

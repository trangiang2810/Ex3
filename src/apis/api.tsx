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

    getUser: async (body?: ILoginData) => {
      const dataRes: IDataResLogin = {
        success: false,
        data: {},
      };
      await axios
        .post("https://dummyjson.com/auth/login", body, config)
        .then((response) => {
          dataRes.success = true;
          dataRes.data = response.data;
          console.log(response.data);
        })
        .catch((error) => console.log(error));
      return dataRes;
    },
  };
};

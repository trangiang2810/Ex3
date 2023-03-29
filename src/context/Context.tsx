import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { dataProducts } from "@/data/data";
import axios from "axios";

type ContextProviderProps = {
  children: ReactNode;
};

type UserItem = {
  id?: number;
  title: string[];
  quntity: number;
};

interface ContextProps {
  posts: UserItem[];
}

const ProductContext = createContext<ContextProps>({
  posts: [],
});
export function useApi() {
  return useContext(ProductContext);
}
export const ProductContextProvider = ({ children }: ContextProviderProps) => {
  // const [posts, setPosts] = useState([]);

  const [posts, setPosts] = useState([]);
  const apiProduct = "https://dummyjson.com/products";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiProduct);
      setPosts(res);
    };
    getPosts();
  }, []);
  return (
    <ProductContext.Provider value={{ posts }}>
      {children}
    </ProductContext.Provider>
  );
};

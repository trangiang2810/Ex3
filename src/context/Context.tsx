import { ReactNode, createContext, useEffect, useState } from "react";
import { dataProducts } from "@/data/data";
import Category from "@/pages/category";

type ContextProviderProps = {
  children: ReactNode;
};

type CategoryItem = {
  id?: number;
  title: string[];
  quntity: number;
};

interface ContextProps {
  category: CategoryItem[];
}

const ProductContext = createContext<ContextProps>({
  category: [],
});

export const ProductContextProvider = ({ children }: ContextProviderProps) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const allCategory = dataProducts.map(({ category }) => {
      return category;
    });
    // const uniqueCategory = [...new Set(allCategory)];
    // setCategory(uniqueCategory);
  }, []);
  return (
    <ProductContext.Provider value={{ category }}>
      {children}
    </ProductContext.Provider>
  );
};

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ReactNode, createContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [dataProducts, setDataProducts] = useState([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number): number {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number): void {
    setCartItems((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number): void {
    setCartItems((currItem) => {
      if (currItem.find((item) => item.id === id)?.quantity == 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number): void {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        dataProducts,
        setDataProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

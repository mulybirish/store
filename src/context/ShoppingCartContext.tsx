import { createContext, useContext, useState } from "react";
import { NavItem } from "react-bootstrap";
type ShoppingCartProviderProps = {};
type ShoppingCartContextProps = {
  getCartItemQuantity: (id: number) => number;
  increaceCartQuantity: (id: number) => void;
  decreaceCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getCartItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaceCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        //if the item doesnt exist
        return [...currentItems, { id: id, quantity: 1 }]; // we add a new item
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            // if it does exist
            return { ...item, quantity: item.quantity + 1 }; // we increase quantity by 1
          } else {
            return item; // otherqise just return item
          }
        });
      }
    });
  };
  const decreaceCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        // checking qunatity
        return currentItems.filter((item) => item.id !== id); // return list of items without the spesific item (id) i.e removing
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            // if item is already in cart
            return { ...item, quantity: item.quantity - 1 }; // decrement quantity
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getCartItemQuantity,
        increaceCartQuantity,
        decreaceCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

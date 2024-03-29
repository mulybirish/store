import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { NavItem } from "react-bootstrap";
import { ShoppingCart } from "../components/shoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};
type ShoppingCartContextProps = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaceCartQuantity: (id: number) => void;
  decreaceCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  products: ProductType[];
};
type CartItem = {
  id: number;
  quantity: number;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-list",
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8800/products");
        const data = await response.data;

        setProducts(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const getItemQuantity = (id: number) => {
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
        getItemQuantity,
        increaceCartQuantity,
        decreaceCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        products,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}

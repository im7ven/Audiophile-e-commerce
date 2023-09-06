import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartContextValue {
  addToCart: (
    id: number,
    image: string,
    name: string,
    basePrice: number,
    price: number,
    quantity: number
  ) => void;
  cart: CartItem[];
  clearCart: () => void;
}

interface CartItem {
  id: number;
  image: string;
  name: string;
  basePrice: number;
  price: number;
  quantity: number;
}

interface Props {
  children: ReactNode;
}

const CartContext = createContext<CartContextValue>({} as CartContextValue);

export const CartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (
    id: number,
    image: string,
    name: string,
    basePrice: number,
    price: number,
    quantity: number
  ) => {
    const existingProduct = cart.find((product) => product.id === id);

    if (existingProduct) {
      const updatedCart = cart.map((product) =>
        product.id === id
          ? {
              ...product,
              price: product.price + quantity * basePrice,
              quantity: product.quantity + quantity,
            }
          : product
      );
      updateCart(updatedCart);
    } else {
      const updatedCart = [
        ...cart,
        { id, image, name, basePrice, price, quantity },
      ];
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const cardContextValue: CartContextValue = {
    addToCart,
    cart,
    clearCart,
  };
  return (
    <CartContext.Provider value={cardContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

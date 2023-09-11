import { ReactNode, createContext, useContext, useState } from "react";

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
  decreaseProductQuantity: (id: number) => void;
  increaseProductQuantity: (id: number) => void;
  formatValue: (value: number) => string;
}

interface CartItem {
  id: number;
  image: string;
  name: string;
  basePrice: number;
  price: number;
  vat: number;
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
    const vat = (20 / 100) * price;

    const existingProduct = cart.find((product) => product.id === id);

    if (existingProduct) {
      const updatedCart = cart.map((product) =>
        product.id === id
          ? {
              ...product,
              price: product.price + quantity * basePrice,
              quantity: product.quantity + quantity,
              vat: (20 / 100) * (product.price + quantity * basePrice),
            }
          : product
      );
      updateCart(updatedCart);
    } else {
      const updatedCart = [
        ...cart,
        { id, image, name, basePrice, price, vat, quantity },
      ];
      setCart(updatedCart);
      updateCart(updatedCart);
    }
  };

  const decreaseProductQuantity = (id: number) => {
    const multipleQuantityProd = cart.find(
      (product) => product.id === id && product.quantity > 1
    );

    if (multipleQuantityProd) {
      const updatedCart = cart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity - 1,
              price: product.price - product.basePrice,
              vat: (20 / 100) * (product.price - product.basePrice),
            }
          : product
      );
      updateCart(updatedCart);
    } else {
      const newCart = cart.filter((product) => product.id !== id);
      setCart(newCart);
    }
  };

  const increaseProductQuantity = (id: number) => {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? {
            ...product,
            price: product.price + product.basePrice,
            quantity: product.quantity + 1,
            vat: (20 / 100) * (product.price + product.basePrice),
          }
        : product
    );
    updateCart(updatedCart);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const formatValue = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "decimal",
      maximumFractionDigits: 0,
    });
  };

  const cardContextValue: CartContextValue = {
    addToCart,
    cart,
    clearCart,
    decreaseProductQuantity,
    increaseProductQuantity,
    formatValue,
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

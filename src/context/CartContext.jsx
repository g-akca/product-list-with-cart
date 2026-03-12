import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      if (prevCart.find(item => item.name === product.name)) {
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (name, amount = 1) => {
    setCart(prevCart => {
      const prevProduct = prevCart.find(item => item.name === name);

      if (prevProduct) {
        if (prevProduct.quantity > amount) {
          return prevCart.map(item =>
            item.name === name
              ? { ...item, quantity: item.quantity - amount }
              : item
          );
        }

        return prevCart.filter(item => item.name !== name);
      }

      return prevCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
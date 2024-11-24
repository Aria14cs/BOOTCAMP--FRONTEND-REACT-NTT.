import { useState } from "react";

export const useCart = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = () => {
    setCartCount(cartCount + 1); // Incrementa el contador del carrito
  };

  return { cartCount, addToCart };
};

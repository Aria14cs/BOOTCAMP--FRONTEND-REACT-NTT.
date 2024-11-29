import { useState, useEffect } from "react";
import { Productos } from "../domain/productos/productos";

interface CartItem {
  product: Productos;
  quantity: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Recuperar el carrito del localStorage al cargar la página
  useEffect(() => {
    // esto podr'ia ser un util para no estar accediendo directamente al localstorage, que pasa si luego piden usar el session? se tendr'ia que cambiar en todos los lugares que usen esta implementaci'on, y lo otro es que las keys deber'ian estar en enum
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Guardar el carrito en el localStorage cada vez que cambia
  useEffect(() => {
    if (cartItems.length > 0) {
      // esto tambi'en podr'ia estar en un util
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Agregar un producto al carrito
  const addToCart = (product: Productos) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        // podr'iamos usar las llaves para que sea m'as f'acil la lectura
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Aumentar la cantidad de un producto
  const increaseQuantity = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Disminuir la cantidad de un producto
  const decreaseQuantity = (productId: number) => {
    // igual aqu'i llaves para facilitar la lectura
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.product.id === productId && item.quantity > 1
              ? // por qu'e -1?
                { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Eliminar los productos con cantidad 0
    );
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
    // esto podr'ia ser parte de un util
    localStorage.removeItem("cart");
  };

  return {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };
};

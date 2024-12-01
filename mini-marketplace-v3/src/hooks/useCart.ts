import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Productos } from "../domain/productos/productos";

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const addToCart = (product: Productos) => {
    dispatch({ type: "AÑADIR_AL_CARRITO", product });
  };

  const increaseQuantity = (productId: number) => {
    dispatch({ type: "AUMENTAR_CANTIDAD", productId });
  };

  const decreaseQuantity = (productId: number) => {
    dispatch({ type: "DISMINUIR_CANTIDAD", productId });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "ELIMINAR_DEL_CARRITO", productId });
  };

  const clearCart = () => {
    dispatch({ type: "VACIAR_CARRITO" });
  };

  return {
    cartItems: state.cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };
};

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Productos } from "../domain/productos/productos"; // Importa el contexto

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext); // Obtener el state y dispatch

  const addToCart = (product: Productos) => {
    dispatch({ type: "AÑADIR_AL_CARRITO", product });
  };

  const increaseQuantity = (productId: number) => {
    dispatch({ type: "AUMENTAR_CANTIDAD", productId }); // Asegúrate de que la acción sea correcta
  };

  const decreaseQuantity = (productId: number) => {
    dispatch({ type: "DISMINUIR_CANTIDAD", productId }); // Decrecer cantidad correctamente
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "ELIMINAR_DEL_CARRITO", productId }); // Eliminar producto del carrito
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

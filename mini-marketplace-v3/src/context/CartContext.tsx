import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { Productos } from "../domain/productos/productos";

export type CartItem = {
  product: Productos;
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [], // Estado inicial vacío
};

// Definimos las acciones disponibles para el carrito
type CartAction =
  | { type: "AÑADIR_AL_CARRITO"; product: Productos }
  | { type: "ELIMINAR_DEL_CARRITO"; productId: number }
  | { type: "AUMENTAR_CANTIDAD"; productId: number }
  | { type: "DISMINUIR_CANTIDAD"; productId: number }
  | { type: "VACIAR_CARRITO" };

// Reducer que maneja las acciones del carrito
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "AÑADIR_AL_CARRITO":
      const existingItem = state.cartItems.find(
        (item) => item.product.id === action.product.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { product: action.product, quantity: 1 },
        ],
      };

    case "AUMENTAR_CANTIDAD":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DISMINUIR_CANTIDAD":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.product.id === action.productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "ELIMINAR_DEL_CARRITO":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== action.productId
        ),
      };

    case "VACIAR_CARRITO":
      return initialState;

    default:
      return state;
  }
};

// Contexto y proveedor del carrito
export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => undefined });

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

import React from "react";

interface CartItem {
  product: {
    price: number;
  };
  quantity: number;
}

interface CarritoTotalProps {
  cartItems: CartItem[];
}

const CarritoTotal: React.FC<CarritoTotalProps> = ({ cartItems }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return <h3>Total: $ {total}</h3>;
};

export default CarritoTotal;

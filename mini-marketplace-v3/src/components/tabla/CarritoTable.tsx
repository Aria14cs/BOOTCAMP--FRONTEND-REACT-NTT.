import React from "react";
import Boton from "../botones/boton";
import { useCart } from "../../hooks/useCart";

interface CartItem {
  product: {
    id: number;
    title: string;
    price: number;
    images: string[];
  };
  quantity: number;
}

interface CarritoTablaProps {
  cartItems: CartItem[];
}

const CarritoTabla: React.FC<CarritoTablaProps> = ({ cartItems }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.product.id}>
            <td>
              <img src={item.product.images[0]} alt={item.product.title} />
            </td>
            <td>{item.product.title}</td>
            <td>${item.product.price}</td>
            <td>
              <Boton
                text="-"
                color="blue"
                size="small"
                onClick={() => decreaseQuantity(item.product.id)}
                aria-label={`Disminuir cantidad de ${item.product.title}`}
              />
              {item.quantity}
              <Boton
                text="+"
                color="blue"
                size="small"
                onClick={() => increaseQuantity(item.product.id)}
                aria-label={`Aumentar cantidad de ${item.product.title}`}
              />
            </td>
            <td className="px-4 py-2">
              <Boton
                text="Eliminar"
                color="blue"
                size="small"
                onClick={() => removeFromCart(item.product.id)}
                aria-label={`Eliminar ${item.product.title} del carrito`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarritoTabla;

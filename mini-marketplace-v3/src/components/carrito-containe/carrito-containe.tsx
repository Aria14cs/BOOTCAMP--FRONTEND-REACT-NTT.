import React from "react";
import "./carrito-compra.css";

interface CarritoCompraProps {
  cantidadProductos: number;
}

const CarritoCompra: React.FC<CarritoCompraProps> = ({ cantidadProductos }) => {
  return (
    <div className="carrito-container">
      <img
        src="/src/assets/imagenes/iconos/carrito.svg"
        className="carrito"
        alt="Carrito"
      />
      <span className="notificacion">{cantidadProductos}</span>
    </div>
  );
};

export default CarritoCompra;

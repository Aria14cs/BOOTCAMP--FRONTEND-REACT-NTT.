import React from "react";
import "./carrito-compra.css";
import { Link } from "react-router-dom";

interface CarritoCompraProps {
  cantidadProductos: number;
}

const CarritoCompra: React.FC<CarritoCompraProps> = ({ cantidadProductos }) => {
  return (
    <div className="carrito-container">
      <Link to="/resumen">
        <img
          src="/src/assets/imagenes/iconos/carrito.svg"
          className="carrito"
          alt="Carrito"
        />
        {cantidadProductos > 0 && (
          <span className="notificacion">{cantidadProductos}</span>
        )}
      </Link>
    </div>
  );
};

export default CarritoCompra;

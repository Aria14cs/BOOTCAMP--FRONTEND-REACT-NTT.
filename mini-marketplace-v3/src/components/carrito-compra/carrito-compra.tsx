import React from "react";
import "./carrito-compra.css";
import { Link } from "react-router-dom";
import { ModuleRoutes } from "@/routes/routes";

interface CarritoCompraProps {
  cantidadProductos: number;
}
// la carpeta y el nombre del componente no tienen relaci'on
const CarritoCompra: React.FC<CarritoCompraProps> = ({ cantidadProductos }) => {
  // los paths podr'ian estar en enum para evitar escribirlos directamente y tener errores
  return (
    <div className="carrito-container">
      <Link to={ModuleRoutes.Resumen}>
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

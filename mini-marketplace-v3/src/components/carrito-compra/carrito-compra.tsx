// import React from "react";
// import "./carrito-compra.css";
// import { Link } from "react-router-dom";
// import { ModuleRoutes } from "@/routes/routes";

// interface CarritoCompraProps {
//   cantidadProductos: number;
// }
// // la carpeta y el nombre del componente no tienen relaci'on
// const CarritoCompra: React.FC<CarritoCompraProps> = ({ cantidadProductos }) => {
//   // los paths podr'ian estar en enum para evitar escribirlos directamente y tener errores
//   return (
//     <div className="carrito-container">
//       <Link to={ModuleRoutes.Resumen}>
//         <img
//           src="/src/assets/imagenes/iconos/carrito.svg"
//           className="carrito"
//           alt="Carrito"
//         />
//         {cantidadProductos > 0 && (
//           <span className="notificacion">{cantidadProductos}</span>
//         )}
//       </Link>
//     </div>
//   );
// };

// export default CarritoCompra;
import { Link } from "react-router-dom";
import { ModuleRoutes } from "../../routes/routes"; // Asegúrate de importar el enum de rutas

interface CarritoCompraProps {
  cantidadProductos: number;
}

const CarritoCompra: React.FC<CarritoCompraProps> = ({ cantidadProductos }) => {
  return (
    <div className="carrito-container">
      <Link to={ModuleRoutes.Resumen}>
        <img
          src="/src/assets/imagenes/iconos/carrito.svg" // Considera mover la imagen a la carpeta "public" si no usas import
          className="carrito"
          alt="Carrito"
          aria-label="Ver carrito de compras" // Mejorar la accesibilidad
        />
        {cantidadProductos > 0 && (
          <span className="notificacion">{cantidadProductos}</span>
        )}
      </Link>
    </div>
  );
};

export default CarritoCompra;

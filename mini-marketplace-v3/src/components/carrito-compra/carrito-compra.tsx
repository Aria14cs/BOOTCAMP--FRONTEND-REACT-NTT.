import { Link } from "react-router-dom";
import { ModuleRoutes } from "../../routes/routes";

interface CarritoCompraProps {
  cantidadProductos: number;
}

const CarritoCompra: React.FC<CarritoCompraProps> = ({ cantidadProductos }) => {
  return (
    <div className="carrito-container">
      <Link to={ModuleRoutes.Resumen}>
        <img
          src="/src/assets/imagenes/iconos/carrito.svg"
          className="carrito"
          alt="Carrito"
          aria-label="Ver carrito de compras"
        />
        {cantidadProductos > 0 && (
          <span className="notificacion">{cantidadProductos}</span>
        )}
      </Link>
    </div>
  );
};

export default CarritoCompra;

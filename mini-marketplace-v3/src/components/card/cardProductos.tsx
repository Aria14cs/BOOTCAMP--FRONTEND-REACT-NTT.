import { Productos } from "../../domain/productos/productos";
import Boton from "../botones/boton";
import "./cardProductos.css";

interface CardProductosProps {
  product: Productos;
  onAddToCart: () => void;
}

const CardProductos: React.FC<CardProductosProps> = ({
  product,
  onAddToCart,
}) => {
  const { images, title, description, category, price } = product;

  return (
    <section className="productos">
      <div className="imagenes-producto">
        {images.length > 0 && (
          <img
            src={images[0]}
            alt={`Imagen del producto ${title}`}
            className="img-producto"
          />
        )}
      </div>
      <h3 className="nombre-producto">{title}</h3>
      <p className="categoria">{description}</p>
      <p className="categoria-detalle">{category}</p>
      <p className="precio">${price}</p>

      <Boton
        text="Añadir al carrito"
        color="orange"
        size="large"
        onClick={onAddToCart}
      />
    </section>
  );
};

export default CardProductos;

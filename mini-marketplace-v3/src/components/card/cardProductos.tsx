import React from "react";
import { Character } from "../../domain/character/character";
import Boton from "../botones/boton";
import "./cardProductos.css";

interface CardProductos {
  character: Character;
  onAddToCart: () => void; // Función para añadir al carrito
}

const CardProductos: React.FC<CardProductos> = ({ character, onAddToCart }) => {
  const { images, title, description, category, price } = character;

  return (
    <section className="productos">
      <div className="producto">
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
        {/* Botón para añadir al carrito */}
        <Boton
          text="Añadir al carrito"
          color="green"
          size="large"
          onClick={onAddToCart}
        />
      </div>
    </section>
  );
};

export default CardProductos;

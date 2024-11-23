import React from "react";

const SelectorCategoria: React.FC = () => {
  return (
    <>
      <select className="opciones" id="categoriaOpciones">
        <option value="" id="opciones">
          Todas las categorias
        </option>
      </select>
    </>
  );
};

export default SelectorCategoria;

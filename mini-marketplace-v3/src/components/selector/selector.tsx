import React from "react";

interface CategoriaOption {
  value: string;
  label: string;
}

interface SelectorCategoriaProps {
  categorias: CategoriaOption[];
  onCategoryChange: (categorySlug: string) => void; // Nueva prop para manejar el cambio de categoría
}

const SelectorCategoria: React.FC<SelectorCategoriaProps> = ({
  categorias,
  onCategoryChange, // Recibimos la función que manejará el cambio de categoría
}) => {
  return (
    <>
      <select
        className="opciones"
        id="categoriaOpciones"
        onChange={(e) => onCategoryChange(e.target.value)} // Llamamos a la función al cambiar el select
      >
        <option value="">Todas las categorías</option>
        {/* Iteramos sobre las categorias mapeadas pasadas como prop */}
        {categorias.map((categoria) => (
          <option key={categoria.value} value={categoria.value}>
            {categoria.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectorCategoria;

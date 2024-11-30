// import React from "react";

// interface CategoriaOption {
//   value: string;
//   label: string;
// }

// interface SelectorCategoriaProps {
//   categorias: CategoriaOption[];
//   onCategoryChange: (categorySlug: string) => void; // Nueva prop para manejar el cambio de categoría
//   selectedCategory: string; // Nueva prop para pasar el valor seleccionado
// }

// const SelectorCategoria: React.FC<SelectorCategoriaProps> = ({
//   categorias,
//   onCategoryChange, // Recibimos la función que manejará el cambio de categoría
//   selectedCategory, // Recibimos el valor seleccionado
// }) => {
//   return (
//     <select
//       className="opciones"
//       id="categoriaOpciones"
//       value={selectedCategory} // Aseguramos que el valor seleccionado esté controlado
//       onChange={(e) => onCategoryChange(e.target.value)} // Llamamos a la función al cambiar el select
//     >
//       <option value="">Todas las categorías</option>
//       {/* Iteramos sobre las categorias mapeadas pasadas como prop */}
//       {categorias.map((categoria) => (
//         <option key={categoria.value} value={categoria.value}>
//           {categoria.label}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default SelectorCategoria;
import SelectInput from "../selec/SelectInput"; // Importamos el componente SelectInput

interface CategoriaOption {
  value: string;
  label: string;
}

interface SelectorCategoriaProps {
  categorias: CategoriaOption[];
  onCategoryChange: (categorySlug: string) => void;
  selectedCategory: string;
  placeholder?: string; // Añadimos la prop placeholder para cambiar el título
}

const SelectorCategoria: React.FC<SelectorCategoriaProps> = ({
  categorias,
  onCategoryChange,
  selectedCategory,
  placeholder = "Selecciona una categoría", // Valor por defecto si no se pasa11
}) => {
  // Usamos el componente SelectInput para la selección de categorías
  return (
    <div>
      <SelectInput
        options={categorias} // Pasamos las opciones de categorías
        selectedValue={selectedCategory} // Pasamos el valor seleccionado
        onChange={onCategoryChange} // Pasamos la función para manejar el cambio
        label="" // Etiqueta opcional para el select
        placeholder={placeholder} // Pasamos el título dinámico
      />
    </div>
  );
};

export default SelectorCategoria;

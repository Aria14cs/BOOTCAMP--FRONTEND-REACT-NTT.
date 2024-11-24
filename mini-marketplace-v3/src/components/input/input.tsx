import React, { useState } from "react";

interface BusquedaPorProductoProps {
  onSearch: (query: string) => void; // Recibimos la función onSearch
}

const BusquedaPorProducto: React.FC<BusquedaPorProductoProps> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Llamamos a la función onSearch del componente padre
  };

  return (
    <input
      type="text"
      placeholder="Buscar productos"
      id="buscador"
      value={query}
      onChange={handleInputChange} // Llamamos a la función para manejar el cambio en el input
    />
  );
};

export default BusquedaPorProducto;

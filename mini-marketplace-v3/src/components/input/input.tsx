// falta test
import React, { useState } from "react";
import "./input.css";

interface BusquedaPorProductoProps {
  onSearch: (query: string) => void;
}

const BusquedaPorProducto: React.FC<BusquedaPorProductoProps> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar productos"
      id="buscador"
      value={query}
      onChange={handleInputChange}
      className="buscador"
    />
  );
};

export default BusquedaPorProducto;

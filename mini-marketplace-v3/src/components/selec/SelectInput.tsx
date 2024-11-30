import React, { ChangeEvent } from "react";

interface SelectInputProps {
  options: { value: string; label: string }[]; // Opciones del select
  selectedValue: string; // Valor seleccionado
  onChange: (value: string) => void; // Función para manejar el cambio
  label?: string; // Etiqueta opcional para el select
  placeholder?: string; // Título dinámico para la opción
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  selectedValue,
  onChange,
  label,
  placeholder = "Open this select menu", // Valor por defecto para el título
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value); // Actualiza el valor seleccionado
  };

  return (
    <div className="form-group">
      {label && <label className="block mb-2">{label}</label>}{" "}
      {/* Si hay etiqueta, se muestra */}
      <select
        className="form-select"
        value={selectedValue}
        onChange={handleChange}
        aria-label="Default select example"
      >
        <option value="" disabled>
          {placeholder} {/* Título dinámico según la vista */}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;

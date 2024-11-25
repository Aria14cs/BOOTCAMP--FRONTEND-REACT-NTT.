import React from "react";

interface CampoFormularioProps {
  label: string; // Texto del label
  type: string; // Tipo del input (e.g., text, email, password)
  id: string; // ID del input
  name: string; // Name del input
  className: string;
  value: string; // Valor del input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Función de cambio
  errorMessage?: string; // Mensaje de error (si hay)
}

const CampoFormulario: React.FC<CampoFormularioProps> = ({
  label,
  type,
  id,
  name,
  className,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <li>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
        required // Asegúrate de que los campos obligatorios tengan esta propiedad
      />
      {errorMessage && <span className="error">{errorMessage}</span>}{" "}
      {/* Mostrar error si existe */}
    </li>
  );
};

export default CampoFormulario;

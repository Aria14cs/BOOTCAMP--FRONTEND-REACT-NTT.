import React from "react";

interface CampoFormularioProps {
  label: string;
  type: string;
  id: string;
  name: string;
  className: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  errorMessage?: string;
  component?: React.ReactNode; // Prop opcional para un componente personalizado
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
  component,
}) => {
  return (
    <li>
      <label htmlFor={id}>{label}:</label>
      {component ? (
        component // Si hay un componente personalizado, lo renderizamos
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={className}
          value={value} // Asegurarse de que el valor sea controlado
          onChange={onChange} // Asegurarse de que el onChange esté pasando el cambio
          required
        />
      )}
      {errorMessage && <span className="error">{errorMessage}</span>}
    </li>
  );
};

export default CampoFormulario;

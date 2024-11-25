import React from "react";

interface CampoFormularioProps {
  label: string;
  type: string;
  id: string;
  name: string;
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
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
        required
      />
      {errorMessage && <span className="error">{errorMessage}</span>}{" "}
    </li>
  );
};

export default CampoFormulario;

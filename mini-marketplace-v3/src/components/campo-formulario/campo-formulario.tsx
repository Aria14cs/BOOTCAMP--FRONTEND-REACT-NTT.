import "./campoFormulario.css";

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
  component?: React.ReactNode;
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
        component
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={className}
          value={value}
          onChange={onChange}
        />
      )}
      {errorMessage && <span className="error">{errorMessage}</span>}
    </li>
  );
};

export default CampoFormulario;

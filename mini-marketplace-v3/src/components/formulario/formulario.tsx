import React, { useState } from "react";
import "./formulario.css";
import Boton from "../botones/boton";
import Title from "../../components/title/title";
import CampoFormulario from "../campo-formulario/campo-formulario"; // Asegúrate de que este sea el componente adecuado para los campos

interface FormularioProps {
  campos: {
    label: string;
    type: string;
    id: string;
    name: string;
    component?: React.ReactNode;
  }[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Formulario: React.FC<FormularioProps> = ({ campos, onSubmit }) => {
  // Estado para controlar los valores del formulario
  const [formValues, setFormValues] = useState(
    campos.reduce((acc, campo) => {
      acc[campo.id] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  // Función para manejar el cambio de valores en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="formulario-container">
      <Title
        text="Información de envio"
        size="large"
        align="center"
        color="black"
      />

      {campos.map((campo) => (
        <div key={campo.id} className="form-group">
          <CampoFormulario
            label={campo.label}
            type={campo.type}
            id={campo.id}
            name={campo.name}
            className="form-input"
            value={formValues[campo.id]} // Pasar el valor desde el estado
            onChange={handleChange} // Controlador de cambios
            component={campo.component} // Pasar componente si existe
          />
        </div>
      ))}
      <Boton text="Comprar" color="blue" size="large" />
    </form>
  );
};

export default Formulario;

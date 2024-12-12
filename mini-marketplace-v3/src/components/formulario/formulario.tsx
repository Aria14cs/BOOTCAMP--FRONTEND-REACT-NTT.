// falta test
import React, { useState } from "react";

import "./formulario.css";
import Boton from "../botones/boton";
import Title from "../../components/title/title";
import CampoFormulario from "../campo-formulario/campo-formulario";

interface FormularioProps {
  campos: {
    label: string;
    type: string;
    id: string;
    name: string;
    component?: React.ReactNode;
  }[];
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    values: Record<string, string>
  ) => void;
}

const Formulario: React.FC<FormularioProps> = ({ campos, onSubmit }) => {
  const [formValues, setFormValues] = useState(
    campos.reduce((acc, campo) => {
      acc[campo.id] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (value: string): string => {
    if (!value.trim()) {
      return "Este campo es obligatorio.";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isFormValid = Object.keys(formValues).every(
      (field) => validateField(formValues[field]) === ""
    );

    if (isFormValid) {
      onSubmit(e, formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-container">
      <Title
        text="Información de envio"
        size="large"
        align="center"
        color="black"
      />

      {campos.map((campo) => (
        <div key={campo.id} className="formulario-lista">
          <CampoFormulario
            label={campo.label}
            type={campo.type}
            id={campo.id}
            name={campo.name}
            className="form-input"
            value={formValues[campo.id]}
            onChange={handleChange}
            component={campo.component}
            errorMessage={errors[campo.id]}
          />
        </div>
      ))}
      <Boton text="Comprar" color="blue" size="large" />
    </form>
  );
};

export default Formulario;

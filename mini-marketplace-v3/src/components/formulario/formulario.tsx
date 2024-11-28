
// no dejar comentarios, ya que si el c'odigo esta bien estructurado no son necesarios
// el formulario no valida acepta cualquier valor
import React, { useState } from "react";
import CampoFormulario from "../campo-formulario/campo-formulario";
import Boton from "../botones/boton";
import "./formulario.css";
import Title from "../../components/title/title";

interface CampoFormularioConfig {
  label: string;
  type: string;
  id: string;
  name: string;
  className?: string;
  required?: boolean; // Indica si el campo es obligatorio
}

interface FormularioProps {
  campos: CampoFormularioConfig[]; // Configuración de los campos
  onSubmit: (e: React.FormEvent<HTMLFormElement>, formValues: any) => void; // Función para manejar el submit
}

const Formulario: React.FC<FormularioProps> = ({ campos, onSubmit }) => {
  // Estado para manejar los valores del formulario
  // por qu'e usar any? por qu'e no tiparlos?
  const [formValues, setFormValues] = useState<any>({});
  // Estado para manejar los errores de validación
  // por qu'e usar any? por qu'e no tiparlos?
  const [errores, setErrores] = useState<any>({});

  // Función para manejar el cambio de valores en los campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Función de validación
  const validateForm = () => {
    const newErrores: any = {};
    campos.forEach((campo) => {
      if (campo.required && !formValues[campo.name]) {
        newErrores[campo.name] = `${campo.label} es obligatorio.`;
      }
    });
    setErrores(newErrores);
    return Object.keys(newErrores).length === 0; // Si no hay errores, es válido
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(e, formValues); // Llamar a onSubmit con los valores del formulario
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
      <ul className="formulario-lista">
        {campos.map((campo, index) => (
          <li key={index}>
            <CampoFormulario
              label={campo.label}
              type={campo.type}
              id={campo.id}
              name={campo.name}
              value={formValues[campo.name] || ""}
              onChange={handleChange}
              className={campo.className || "campo-formulario"}
              errorMessage={errores[campo.name]} // Pasar el error al CampoFormulario
            />
          </li>
        ))}
      </ul>

      <Boton text="Comprar" color="blue" size="large" />
    </form>
  );
};

export default Formulario;

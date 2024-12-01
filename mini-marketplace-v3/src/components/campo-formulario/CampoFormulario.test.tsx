import { render, screen, fireEvent } from "@testing-library/react";
import CampoFormulario from "../campo-formulario/campo-formulario";
import "@testing-library/jest-dom";

describe("CampoFormulario", () => {
  it("debe renderizar el campo con el valor pasado como prop", () => {
    render(
      <CampoFormulario
        label="Nombre"
        type="text"
        id="nombre"
        name="nombre"
        className="input"
        value="Juan"
        onChange={() => {}}
      />
    );

    const input = screen.getByLabelText("Nombre:");
    expect(input).toHaveValue("Juan");
  });

  it("debe mostrar el mensaje de error si se pasa un errorMessage", () => {
    render(
      <CampoFormulario
        label="Email"
        type="email"
        id="email"
        name="email"
        className="input"
        value=""
        onChange={() => {}}
        errorMessage="Este campo es obligatorio"
      />
    );

    const errorMessage = screen.getByText("Este campo es obligatorio");
    expect(errorMessage).toBeInTheDocument();
  });

  it("debe renderizar un componente personalizado si se pasa como prop", () => {
    const CustomComponent = () => <input type="checkbox" />;

    render(
      <CampoFormulario
        label="Aceptar términos"
        type="checkbox"
        id="terminos"
        name="terminos"
        className="input"
        value=""
        onChange={() => {}}
        component={<CustomComponent />}
      />
    );

    const customComponent = screen.getByRole("checkbox");
    expect(customComponent).toBeInTheDocument();
  });

  it("debe llamar a onChange cuando el valor del input cambia", () => {
    const mockOnChange = jest.fn(); // Creamos una función mock

    render(
      <CampoFormulario
        label="Apellido"
        type="text"
        id="apellido"
        name="apellido"
        className="input"
        value=""
        onChange={mockOnChange}
      />
    );

    const input = screen.getByLabelText("Apellido:");
    fireEvent.change(input, { target: { value: "Perez" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});

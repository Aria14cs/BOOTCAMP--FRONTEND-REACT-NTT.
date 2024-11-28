import { render, screen, fireEvent } from "@testing-library/react";
import Boton from "../botones/boton";

describe("Boton Component", () => {
  it("debería renderizar correctamente con el texto proporcionado", () => {
    render(<Boton text="Click Me" color="primary" size="medium" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("debería aplicar las clases de color y tamaño correctamente", () => {
    render(<Boton text="Click Me" color="success" size="large" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toHaveClass("button");
    expect(buttonElement).toHaveClass("button-success");
    expect(buttonElement).toHaveClass("button-large");
  });

  it("debería ejecutar la función onClick al hacer clic", () => {
    const handleClick = jest.fn(); // Mock de la función
    render(
      <Boton
        text="Click Me"
        color="primary"
        size="medium"
        onClick={handleClick}
      />
    );
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("debería estar deshabilitado cuando la prop `disabled` sea true", () => {
    render(<Boton text="Click Me" color="primary" size="medium" disabled />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeDisabled();
  });

  it("no debería estar deshabilitado cuando la prop `disabled` sea false o no se pase", () => {
    render(<Boton text="Click Me" color="primary" size="medium" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).not.toBeDisabled();
  });
});

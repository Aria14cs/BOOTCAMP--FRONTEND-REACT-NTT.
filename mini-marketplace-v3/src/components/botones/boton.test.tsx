import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Boton from "../botones/boton";

describe("Componente Boton", () => {
  test("debe renderizar con el texto proporcionado", () => {
    render(<Boton text="Hacer clic" color="primary" size="medium" />);
    const boton = screen.getByRole("button", { name: /hacer clic/i });
    expect(boton).toBeInTheDocument();
  });

  test("debe aplicar la clase de color correctamente", () => {
    render(<Boton text="Hacer clic" color="secondary" size="medium" />);
    const boton = screen.getByRole("button", { name: /hacer clic/i });
    expect(boton).toHaveClass("button-secondary");
  });

  test("debe aplicar la clase de tamaño correctamente", () => {
    render(<Boton text="Hacer clic" color="primary" size="large" />);
    const boton = screen.getByRole("button", { name: /hacer clic/i });
    expect(boton).toHaveClass("button-large");
  });

  test("debe ejecutar la función onClick cuando se hace clic", () => {
    const mockOnClick = jest.fn();
    render(
      <Boton
        text="Hacer clic"
        color="primary"
        size="medium"
        onClick={mockOnClick}
      />
    );
    const boton = screen.getByRole("button", { name: /hacer clic/i });
    fireEvent.click(boton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

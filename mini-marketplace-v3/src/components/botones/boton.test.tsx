import { render, screen, fireEvent } from "@testing-library/react";
import Boton from "../botones/boton";
import "@testing-library/jest-dom";

describe("Componente Boton", () => {
  it("debe renderizar el texto pasado como prop", () => {
    render(<Boton text="Haz clic aquí" color="orange" size="medium" />);
    const boton = screen.getByText("Haz clic aquí");
    expect(boton).toBeInTheDocument();
  });

  it("debe aplicar la clase de color correctamente cuando es 'red'", () => {
    render(<Boton text="Botón Rojo" color="red" size="medium" />);
    const boton = screen.getByText("Botón Rojo");

    expect(boton).toHaveClass("button-red");
  });

  it("debe aplicar la clase de color correctamente cuando es 'AzulCielo'", () => {
    render(<Boton text="Añadir al carrito" color="AzulCielo" size="medium" />);
    const boton = screen.getByText("Añadir al carrito");

    expect(boton).toHaveClass("button-AzulCielo");
  });

  it("debe aplicar la clase de color correctamente cuando es 'blue'", () => {
    render(<Boton text="Botón Azul" color="blue" size="medium" />);
    const boton = screen.getByText("Botón Azul");

    expect(boton).toHaveClass("button-blue");
  });

  it("debe llamar a la función onClick cuando se hace clic", () => {
    const mockOnClick = jest.fn();

    render(
      <Boton
        text="Botón con Click"
        color="red"
        size="small"
        onClick={mockOnClick}
      />
    );

    const boton = screen.getByText("Botón con Click");
    fireEvent.click(boton);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("no llama a la función onClick si no se pasa una función", () => {
    const mockOnClick = jest.fn();

    render(<Boton text="Botón sin Click" color="yellow" size="large" />);

    const boton = screen.getByText("Botón sin Click");
    fireEvent.click(boton);

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});

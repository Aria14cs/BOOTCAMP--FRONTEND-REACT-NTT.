import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CardProductos from "../card/cardProductos";
import { Productos } from "../../domain/productos/productos";

const mockProduct: Productos = {
  id: 1,
  title: "Producto de prueba",
  description: "Descripción del producto",
  category: "Categoría de prueba",
  price: 100,
  images: ["https://via.placeholder.com/150"],
};

describe("CardProductos", () => {
  it("debería renderizar el producto correctamente", () => {
    const mockOnAddToCart = jest.fn();
    render(
      <CardProductos product={mockProduct} onAddToCart={mockOnAddToCart} />
    );

    expect(screen.getByText("Producto de prueba")).toBeInTheDocument();
    expect(screen.getByText("Descripción del producto")).toBeInTheDocument();
    expect(screen.getByText("Categoría de prueba")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();

    expect(
      screen.getByAltText("Imagen del producto Producto de prueba")
    ).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Añadir al carrito/i });
    expect(button).toBeInTheDocument();
  });

  it("debería llamar a onAddToCart cuando el botón es clickeado", () => {
    const mockOnAddToCart = jest.fn();
    render(
      <CardProductos product={mockProduct} onAddToCart={mockOnAddToCart} />
    );

    const button = screen.getByRole("button", { name: /Añadir al carrito/i });
    fireEvent.click(button);

    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
  });
});

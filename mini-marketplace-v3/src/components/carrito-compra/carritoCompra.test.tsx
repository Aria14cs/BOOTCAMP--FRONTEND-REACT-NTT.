import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CarritoCompra from "../carrito-compra/carrito-compra";
import { ModuleRoutes } from "../../routes/routes";

describe("CarritoCompra", () => {
  it("debería renderizar el icono del carrito", () => {
    render(
      <BrowserRouter>
        <CarritoCompra cantidadProductos={0} />
      </BrowserRouter>
    );

    const carritoIcon = screen.getByAltText("Carrito");
    expect(carritoIcon).toBeInTheDocument();
  });

  it("debería renderizar el número de productos en el carrito cuando cantidadProductos es mayor que 0", () => {
    render(
      <BrowserRouter>
        <CarritoCompra cantidadProductos={5} />
      </BrowserRouter>
    );

    const notificacion = screen.getByText("5");
    expect(notificacion).toBeInTheDocument();
  });

  it("no debería renderizar el contador cuando cantidadProductos es 0", () => {
    render(
      <BrowserRouter>
        <CarritoCompra cantidadProductos={0} />
      </BrowserRouter>
    );

    const notificacion = screen.queryByText("0");
    expect(notificacion).toBeNull();
  });

  it("debería redirigir a la página de resumen cuando se hace clic en el carrito", () => {
    render(
      <BrowserRouter>
        <CarritoCompra cantidadProductos={3} />
      </BrowserRouter>
    );

    const carritoLink = screen.getByRole("link", {
      name: /ver carrito de compras/i,
    });
    expect(carritoLink).toHaveAttribute("href", ModuleRoutes.Resumen);
  });
});

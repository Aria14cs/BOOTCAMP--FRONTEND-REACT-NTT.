import React from "react";
import { useCart } from "../../hooks/useCart";
import Formulario from "../../components/formulario/formulario";
import Header from "../../components/header/header";
import CarritoCompra from "../../components/carrito-compra/carrito-compra";
import CarritoTabla from "../../components/tabla/CarritoTable";
import CarritoTotal from "../../components/tabla/CarritoTotal";
import "./resumen.css";

const Resumen = () => {
  const { cartItems, clearCart } = useCart();

  const campos = [
    { label: "Nombre", type: "text", id: "nombre", name: "nombre" },
    { label: "Apellidos", type: "text", id: "apellidos", name: "apellidos" },
    { label: "Distrito", type: "text", id: "distrito", name: "distrito" },
    { label: "Dirección", type: "text", id: "direccion", name: "direccion" },
    { label: "Referencia", type: "text", id: "referencia", name: "referencia" },
    { label: "Celular", type: "number", id: "celular", name: "celular" },
  ];

  const manejarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
    clearCart();
  };

  return (
    <div>
      <div className="contenedor-header-carrito">
        <Header />
        <CarritoCompra cantidadProductos={cartItems.length} />
      </div>
      <CarritoTabla cartItems={cartItems} />
      <CarritoTotal cartItems={cartItems} />
      <Formulario campos={campos} onSubmit={manejarSubmit} />
    </div>
  );
};

export default Resumen;

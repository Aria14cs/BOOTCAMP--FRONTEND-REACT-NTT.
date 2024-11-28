import React from "react";
import { useCart } from "../../hooks/useCart";
import Formulario from "../../components/formulario/formulario";
import "./resumen.css";
import Header from "../../components/header/header";
import CarritoCompra from "../../components/carrito-compra/carrito-compra";
import Boton from "../../components/botones/boton";

const Resumen = () => {
  const {
    cartItems,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  // valores esta'ticos deben estar fuera del componente
  // no mezclar epa;ol e ingl'es
  const campos = [
    {
      label: "Nombre",
      type: "text",
      id: "nombre",
      name: "nombre",
    },
    {
      label: "Apellidos",
      type: "text",
      id: "apellidos",
      name: "apellidos",
    },
    {
      label: "Distrito",
      type: "text",
      id: "distrito",
      name: "distrito",
    },
    {
      label: "Dirección",
      type: "text",
      id: "direccion",
      name: "direccion",
    },
    {
      label: "Referencia",
      type: "text",
      id: "referencia",
      name: "referencia",
    },
    {
      label: "Celular",
      type: "number",
      id: "celular",
      name: "celular",
    },
  ];

  const manejarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
    clearCart(); // Limpiar el carrito después de finalizar la compra
  };

  return (
    <div>
      <div className="contenedor-header-carrito">
        <Header />
        <CarritoCompra cantidadProductos={cartItems.length} />
      </div>

      {/* Mostrar productos en el carrito */}

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.product.id}>
              <td>
                <img
                  src={item.product.images[0]}
                  alt={item.product.title}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{item.product.title}</td>
              <td>${item.product.price}</td>
              <td>
                <Boton
                  text="-"
                  color="blue"
                  size="small"
                  onClick={() => decreaseQuantity(item.product.id)}
                />
                {item.quantity}
                <Boton
                  text="+"
                  color="blue"
                  size="small"
                  onClick={() => increaseQuantity(item.product.id)}
                />
              </td>
              <td>
                <Boton
                  text="Eliminar"
                  color="blue"
                  size="small"
                  onClick={() => removeFromCart(item.product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* la logica de sumatoria deber'ia estar en una funci'on o en un util */}
      <h3>
        Total: $
        {cartItems.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        )}
      </h3>
      <Formulario campos={campos} onSubmit={manejarSubmit} />
    </div>
  );
};

export default Resumen;

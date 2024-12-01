import { Productos } from "../domain/productos/productos";
import { Categoria } from "../domain/categoria/categoria";
import { getProductosMapper, getCategoriaMapper } from "./productos.mapper";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getProductos = async (): Promise<Productos[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();
    const getProductosData = data.products.map(getProductosMapper);
    console.log({ getProductosData });
    return getProductosData;
  } catch (error) {
    console.log({ error });
    return undefined; 
  }
};

export const getCategoria = async (): Promise<Categoria[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);

    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const dataCategoria = await response.json();
    console.log("Respuesta de la API:", dataCategoria);
    const getDataCategoria = dataCategoria.map(getCategoriaMapper);
    console.log({ getDataCategoria });
    return getDataCategoria; 
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return undefined; 
};

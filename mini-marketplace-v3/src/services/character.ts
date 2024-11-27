// no dejar console ni comentarios, si el c'odigo est'a bien estructurado no es necesario
import { Character } from "../domain/character/character";
import { Categoria } from "../domain/categoria/categoria";
import { getCharacterMapper, getCategoriaMapper } from "./character.mapper";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getCharacter = async (): Promise<Character[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }

    const data = await response.json();

    const characters = data.products.map(getCharacterMapper);

    console.log({ characters });
    return characters;
  } catch (error) {
    console.log({ error });
  }
};

export const getCategoria = async (): Promise<Categoria[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);

    // Comprobamos si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }

    const dataCategoria = await response.json();
    console.log("Respuesta de la API:", dataCategoria);

    // Si la respuesta es directamente un arreglo de objetos
    if (Array.isArray(dataCategoria)) {
      // Mapear los elementos directamente como categorías
      const categorias = dataCategoria.map(getCategoriaMapper);
      console.log("Categorías obtenidas:", categorias);
      return categorias;
    } else {
      throw new Error("La respuesta no es un arreglo."); // por qu'e dejar'ia de ser un arreglo? en caso cambie ser'ia un error del backend
    }
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    if (error instanceof Error) {
      console.error("Detalles del error:", error.message);
    }
    return undefined; // Retornamos undefined si ocurre un error
  }
};

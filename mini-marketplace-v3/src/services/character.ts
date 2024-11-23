import { Character } from "../domain/character";
import { getCharacterMapper } from "./character.mapper";

// Cambié la URL para obtener todos los productos
export const getCharacter = async (): Promise<Character[] | undefined> => {
  try {
    const response = await fetch(`https://dummyjson.com/products`);
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }

    const data = await response.json();

    // Aquí mapeamos todos los productos, no solo uno
    const characters = data.products.map(getCharacterMapper);

    console.log({ characters }); // Para ver los productos mapeados
    return characters; // Devuelve la lista de productos
  } catch (error) {
    console.log({ error });
  }
};

import { Character } from "../domain/character/character";
import { Categoria } from "../domain/categoria/categoria";
import { CharacterResponse } from "../domain/character/character-response";
import { CategoriaResponse } from "../domain/categoria/categoria-response";

export const getCharacterMapper = (character: CharacterResponse): Character => {
  return {
    id: character.id,
    title: character.title,
    description: character.description,
    category: character.category,
    price: character.price,
    images: character.images,
  };
};

export const getCategoriaMapper = (categoria: CategoriaResponse): Categoria => {
  return {
    slug: categoria.slug,
    name: categoria.name,
  };
};

// export const getBusquedaMapper = (busqueda: CategoriaResponse): Categoria => {
//   return {
//     slug: busqueda.slug,
//     name: busqueda.name,
//   };
// };

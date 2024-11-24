import { useState, useEffect } from "react";
import { Character } from "../domain/character/character";
import { getCharacter, getCategoria } from "../services/character";
import { Categoria } from "../domain/categoria/categoria";

export const useCharacter = () => {
  const [characters, setCharacters] = useState<Character[] | undefined>(
    undefined
  );
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const getCharacterData = async () => {
      try {
        const charactersData = await getCharacter();
        if (charactersData) {
          setCharacters(charactersData);
        }
      } catch (error) {
        console.log({ error });
      }
    };

    const getCategoriaData = async () => {
      try {
        const categoriasData = await getCategoria();
        if (categoriasData) {
          setCategorias(categoriasData);
        }
      } catch (error) {
        console.log("Error al obtener categorías:", error);
      }
    };

    getCharacterData();
    getCategoriaData();
  }, []);

  return { characters, categorias };
};

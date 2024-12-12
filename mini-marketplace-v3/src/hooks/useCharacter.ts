// falta test
import { useState, useEffect } from "react";
import { Productos } from "../domain/productos/productos";
import { getProductos, getCategoria } from "../services/productos";
import { Categoria } from "../domain/categoria/categoria";

export const useCharacter = () => {
  const [productos, setProductos] = useState<Productos[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productosData, categoriasData] = await Promise.all([
          getProductos(),
          getCategoria(),
        ]);

        if (productosData) {
          setProductos(productosData);
        }

        if (categoriasData) {
          setCategorias(categoriasData);
        }
      } catch (error) {
        console.log("Error al obtener productos y categorías:", error);
        setError("Hubo un problema al obtener los datos. Intenta más tarde.");
      }
    };

    fetchData();
  }, []);

  return { productos, categorias, error };
};

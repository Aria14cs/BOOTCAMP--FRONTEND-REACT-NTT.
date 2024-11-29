import { useState, useEffect } from "react";
import { Productos } from "../domain/productos/productos";
import { getProductos, getCategoria } from "../services/productos";
import { Categoria } from "../domain/categoria/categoria";

export const useCharacter = () => {
  // 2 idiomas
  const [productos, setProductos] = useState<Productos[]>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const getProductosData = async () => {
      try {
        const productosData = await getProductos();
        if (productosData) {
          setProductos(productosData);
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

    getProductosData();
    getCategoriaData();
  }, []);

  return { productos, categorias };
};

// import { useState, useEffect } from "react";
// import { Productos } from "../domain/productos/productos";
// import { getProductos, getCategoria } from "../services/productos";
// import { Categoria } from "../domain/categoria/categoria";

// export const useCharacter = () => {
//   // 2 idiomas
//   const [productos, setProductos] = useState<Productos[]>();
//   const [categorias, setCategorias] = useState<Categoria[]>([]);

//   useEffect(() => {
//     const getProductosData = async () => {
//       try {
//         const productosData = await getProductos();
//         if (productosData) {
//           setProductos(productosData);
//         }
//       } catch (error) {
//         console.log({ error });
//       }
//     };

//     const getCategoriaData = async () => {
//       try {
//         const categoriasData = await getCategoria();
//         if (categoriasData) {
//           setCategorias(categoriasData);
//         }
//       } catch (error) {
//         console.log("Error al obtener categorías:", error);
//       }
//     };

//     getProductosData();
//     getCategoriaData();
//   }, []);

//   return { productos, categorias };
// };
import { useState, useEffect } from "react";
import { Productos } from "../domain/productos/productos";
import { getProductos, getCategoria } from "../services/productos";
import { Categoria } from "../domain/categoria/categoria";

export const useCharacter = () => {
  const [productos, setProductos] = useState<Productos[]>([]); // Inicializamos como array vacío
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [error, setError] = useState<string | null>(null); // Agregamos un estado de error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productosData, categoriasData] = await Promise.all([
          getProductos(), // Ejecutamos ambas peticiones en paralelo
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

  return { productos, categorias, error }; // Ahora retornamos el estado de error
};

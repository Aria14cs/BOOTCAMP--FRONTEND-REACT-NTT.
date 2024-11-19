import { Product, Category } from "../interfaces/Producto";

// URLs de las APIs
export const urlProductos: string = "https://dummyjson.com/products";
export const urlCategoria: string = "https://dummyjson.com/products/categories";

// Función para obtener productos
export async function obtenerProductos(categoria: string = ''): Promise<Product[]> {
  try {
    let url = urlProductos;

    if (categoria) {
      url = `https://dummyjson.com/products/category/${categoria}`;
    }

    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error('Error al obtener los productos');
    }
    const datos = await respuesta.json();
    return datos.products || [];
  } catch (error) {
    console.error('Error al cargar los productos:', error);
    return [];
  }
}

// Función para obtener categorías
export async function obtenerCategorias(): Promise<Category[]> {
  try {
    const respuesta = await fetch(urlCategoria);
    if (!respuesta.ok) {
      throw new Error('Error al obtener las categorías');
    }
    return await respuesta.json();
  } catch (error) {
    console.error('Error al cargar las categorías:', error);
    return [];
  }
}

import { Product, Category } from "../interfaces/Producto";

// URLs de las APIs
// me parece bien, un siguiente nivel podr'ia ser el uso de variables de entorno
export const urlProductos: string = "https://dummyjson.com/products";
export const urlCategoria: string = "https://dummyjson.com/products/categories";

// Función para obtener productos
// si bien la funcion trata de cubrir los escenarios de busqueda de producots y categorias se le esta delegando 2 responsabilidades, lo ideal es que solo haga una de ellas que ser'ia obtener productos que es como esta nombrada, y otra que se llama obtener productos por categoria, respecto a la logica de validacion de errores esta puede estar en utilitario para evitar repetirla
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

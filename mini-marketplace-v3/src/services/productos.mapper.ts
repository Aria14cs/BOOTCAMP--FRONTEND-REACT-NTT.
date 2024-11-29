import { Productos } from "../domain/productos/productos";
import { Categoria } from "../domain/categoria/categoria";
import { ProductosResponse } from "../domain/productos/productos-response";
import { CategoriaResponse } from "../domain/categoria/categoria-response";

export const getProductosMapper = (productos: ProductosResponse): Productos => {
  return {
    id: productos.id,
    title: productos.title,
    description: productos.description,
    category: productos.category,
    price: productos.price,
    images: productos.images,
  };
};

export const getCategoriaMapper = (categoria: CategoriaResponse): Categoria => {
  return {
    slug: categoria.slug,
    name: categoria.name,
  };
};

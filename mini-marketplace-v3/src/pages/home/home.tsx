import { useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import { useCart } from "../../hooks/useCart"; // Ya tienes esto correctamente
import CardProductos from "../../components/card/cardProductos";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./home.css";
import SelectorCategoria from "../../components/selectorCategoria/selectorCategoria";
import BusquedaPorProducto from "../../components/input/input";
import CarritoCompra from "../../components/carrito-compra/carrito-compra";

function Home() {
  const { productos, categorias, error } = useCharacter(); // Desestructuramos también el estado error y loading
  const { cartItems, addToCart } = useCart(); // Extraemos los datos del carrito
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtra los productos por la categoría seleccionada
  const filteredProducts = productos?.length
    ? productos.filter((product) => {
        const matchesCategory =
          !selectedCategory || product.category === selectedCategory;
        const matchesSearch =
          !searchQuery ||
          product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
    : [];

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Si hay un error, lo mostramos en lugar de los productos
  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p> {/* Mostramos el mensaje de error */}
      </div>
    );
  }

  // Si está cargando, mostramos un mensaje de carga

  return (
    <>
      <div className="contenedor-productos">
        <div className="contenedor-header-carrito">
          <Header />
          <CarritoCompra cantidadProductos={cartItems.length} />{" "}
          {/* Mostramos la cantidad de productos en el carrito */}
        </div>

        <div className="busqueda">
          <BusquedaPorProducto onSearch={handleSearch} />{" "}
          {/* Pasamos la función de búsqueda */}
          {categorias.length > 0 ? (
            <SelectorCategoria
              categorias={categorias.map((categoria) => ({
                value: categoria.slug,
                label: categoria.name,
              }))}
              onCategoryChange={handleCategoryChange}
              selectedCategory={selectedCategory} // Pasamos el valor seleccionado
            />
          ) : (
            <p>No hay categorías disponibles</p>
          )}
        </div>

        {/* Mostrar los productos filtrados */}
        {filteredProducts?.length ? (
          <div className="productos-lista">
            {filteredProducts.map((product) => (
              <CardProductos
                key={product.id}
                product={product} // Pasamos 'product' en lugar de 'character'
                onAddToCart={() => addToCart(product)} // Añadimos el producto al carrito
              />
            ))}
          </div>
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;

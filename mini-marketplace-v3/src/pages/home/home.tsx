import { useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import { useCart } from "../../hooks/useCart";
import CardProductos from "../../components/card/cardProductos";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./home.css";
import SelectorCategoria from "../../components/selectorCategoria/selectorCategoria";
import BusquedaPorProducto from "../../components/input/input";
import CarritoCompra from "../../components/carrito-compra/carrito-compra";

function Home() {
  const { productos, categorias, error } = useCharacter();
  const { cartItems, addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="contenedor-productos">
        <div className="contenedor-header-carrito">
          <Header />
          <CarritoCompra cantidadProductos={cartItems.length} />
        </div>

        <div className="busqueda">
          <BusquedaPorProducto onSearch={handleSearch} />

          {categorias.length > 0 ? (
            <SelectorCategoria
              categorias={categorias.map((categoria) => ({
                value: categoria.slug,
                label: categoria.name,
              }))}
              onCategoryChange={handleCategoryChange}
              selectedCategory={selectedCategory}
            />
          ) : (
            <p>No hay categorías disponibles</p>
          )}
        </div>

        {filteredProducts?.length ? (
          <div className="productos-lista">
            {filteredProducts.map((product) => (
              <CardProductos
                key={product.id}
                product={product}
                onAddToCart={() => addToCart(product)}
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

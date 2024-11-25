import { useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import { useCart } from "../../hooks/useCart";
import CardProductos from "../../components/card/cardProductos";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./home.css";
import SelectorCategoria from "../../components/selector/selector";
import BusquedaPorProducto from "../../components/input/input";
import CarritoCompra from "../../components/carrito-containe/carrito-containe";

function Home() {
  const { characters, categorias } = useCharacter();
  const { cartItems, addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtra los productos por la categoría seleccionada
  const filteredCharacters = characters?.filter((character) => {
    const matchesCategory =
      !selectedCategory || character.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      character.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="contenedor-productos">
        <div className="contenedor-header-carrito">
          <Header />
          <CarritoCompra cantidadProductos={cartItems.length} />
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
            />
          ) : (
            <p>No hay categorías disponibles</p>
          )}
        </div>

        {/* Mostrar los productos filtrados */}
        {filteredCharacters?.length ? (
          <div className="productos-lista">
            {filteredCharacters.map((character) => (
              <CardProductos
                key={character.id}
                character={character}
                onAddToCart={() => addToCart(character)}
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

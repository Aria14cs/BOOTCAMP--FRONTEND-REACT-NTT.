import { useState } from "react";
import { useCharacter } from "../hooks/useCharacter"; // Importamos el hook para los personajes
import { useCart } from "../hooks/useCart"; // Importamos el hook para el carrito
import CardProductos from "../components/card/cardProductos";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import "./home/home.css";
import SelectorCategoria from "../components/selector/selector";
import BusquedaPorProducto from "../components/input/input";
import CarritoCompra from "../components/carrito-containe/carrito-containe";

function Home() {
  const { characters, categorias } = useCharacter(); // Usamos el hook para obtener los personajes y categorías
  const { cartCount, addToCart } = useCart(); // Usamos el hook para obtener el contador del carrito y la función de añadir al carrito
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // Estado para la categoría seleccionada
  const [searchQuery, setSearchQuery] = useState<string>(""); // Estado para la búsqueda

  // Filtra los productos por la categoría seleccionada
  const filteredCharacters = characters?.filter((character) => {
    const matchesCategory =
      !selectedCategory || character.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      character.title.toLowerCase().includes(searchQuery.toLowerCase()); // Filtrado por búsqueda
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug); // Actualiza el estado con la categoría seleccionada
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query); // Actualiza el estado con el valor de búsqueda
  };

  return (
    <>
      <div className="contenedor-productos">
        <div className="contenedor-header-carrito">
          <Header />
          <CarritoCompra cantidadProductos={cartCount} />
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
              onCategoryChange={handleCategoryChange} // Proporcionamos la función para manejar el cambio
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
                onAddToCart={addToCart}
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

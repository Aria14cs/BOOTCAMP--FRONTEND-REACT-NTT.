import { useEffect, useState } from "react";
import { Character } from "../domain/character";

import { getCharacter } from "../services/character";

import CardProductos from "../components/card/cardProductos";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import "./home/home.css";
import SelectorCategoria from "../components/selector/selector";
import BusquedaPorProducto from "../components/input/input";

function Home() {
  const [characters, setCharacters] = useState<Character[] | undefined>(
    undefined
  );

  const getCharacterData = async () => {
    try {
      const charactersData = await getCharacter();
      if (charactersData) {
        setCharacters(charactersData);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getCharacterData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className="busqueda">
          <BusquedaPorProducto />
          <SelectorCategoria />
        </div>

        {characters ? (
          <div className="productos-lista">
            {characters.map((character) => (
              <CardProductos key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;

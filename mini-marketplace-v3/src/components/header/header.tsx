// falta test
import "./header.css";
function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="images-header">
            <img
              src="/src/assets/imagenes/iconos/store.svg"
              className="store"
              alt="Logo tienda"
            />
          </div>
          <h1>G & E </h1>
        </div>
      </header>
    </>
  );
}

export default Header;

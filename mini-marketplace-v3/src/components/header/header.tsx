import "./header.css";
import { useUser } from "@/hooks/usuario";
import "../../styles/variables.css";

function Header() {
  const { user, isAuthenticated } = useUser();
  console.log(isAuthenticated);
  console.log(user);
  console.log(user?.firstName);
  console.log("firstName:", user?.firstName);

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
          <div className="usuario-nombre">
            {isAuthenticated ? (
              <p>Bienvenido, {user?.username}!</p>
            ) : (
              <a href="/">Iniciar sesión</a>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

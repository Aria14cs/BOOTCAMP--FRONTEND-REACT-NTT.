// falta test
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <p>Siguenos en nuestras redes sociales</p>
        <div className="redes">
          <img
            src="/src/assets/imagenes/iconos/twitter.svg"
            className="iconos"
          />
          <img
            src="/src/assets/imagenes/iconos/instagram.svg"
            className="iconos"
          />
          <img
            src="/src/assets/imagenes/iconos/tik-tok.svg"
            className="iconos"
          />
        </div>
        <p> &copy; 2024 My Market. Todos los derechos reservados.</p>
        <p> Politica de privacidad | Términos de uso | Contacto</p>
      </footer>
    </>
  );
}

export default Footer;

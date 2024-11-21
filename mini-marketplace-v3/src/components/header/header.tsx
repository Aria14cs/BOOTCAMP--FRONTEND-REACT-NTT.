function Header() {
    return(
        <>
            <header>
        <div className="header">
            <div className="images-header">
                <img src="./imagenes/iconos/store.svg" className="store" alt="Logo tienda" />
            </div>
            <h1>G & E </h1>
            <div className="carrito-container">
                <img src="./imagenes/iconos/carrito.svg" className="carrito" alt="Carrito" />
                <span className="notificacion">3</span>
            </div>
        </div>

    </header>
        </>
    )
}


export default Header;
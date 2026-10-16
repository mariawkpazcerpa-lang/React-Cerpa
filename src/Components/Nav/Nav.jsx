import "./Nav.css";



export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav">
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/About">Nosotros</a>
                </li>
                <li>
                    <a href="/Cart"><img src="src\assets\cart.png" alt="Carrito"/></a>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;
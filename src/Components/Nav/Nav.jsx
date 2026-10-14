import "./Nav.css";



export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="Products.jsx">Productos</a>
                </li>
                <li>
                    <a href="About.jsx">Nosotros</a>
                </li>
                <li>
                    <a href="Cart.jsx"><img src="src\assets\cart.png" alt="Carrito"/></a>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;
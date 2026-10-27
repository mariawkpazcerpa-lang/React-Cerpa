import { Link } from "react-router-dom";
import "./Nav.css";



export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/About">
                        Nosotros
                    </Link >
                </li>
                <li>
                    <Link to="/Cart">
                        <img src="/src/assets/cart.png" alt="Carrito"/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;
import Logo from "/src/assets/Oniric-logo.png"
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom"; 
import "./Header.css";

export const Header = () => {
  return (
    <header className="header container">
        <div className="logo-container">
        <Link to="/">
        <span><img src={Logo} alt="Oniric" /></span>
        </Link>
        </div>
        <div>
        <Nav />
        </div>
    </header>
  );
};

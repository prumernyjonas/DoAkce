import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Připoj CSS pro styling
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Zavře menu při kliknutí na jakýkoliv odkaz
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>
          DoAkce
        </Link>
      </div>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__toggle-icon">☰</span>
      </div>
      <div className={`navbar__links ${isOpen ? "active" : ""}`}>
        <Link to="/akce" onClick={closeMenu}>
          Akce
        </Link>
        <Link to="/vylety" onClick={closeMenu}>
          Výlety
        </Link>
        <Link to="/kalendar" onClick={closeMenu}>
          Kalendář
        </Link>
        <Link to="/mapa" onClick={closeMenu}>
          Mapa
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

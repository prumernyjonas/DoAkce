import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "../css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-bila shadow-sm">
      <a
        href="/"
        className="navbar-brand d-flex align-items-center fw-bold"
        style={{ marginLeft: "20px" }}
      >
        <div>
          <img className="logo-icon" src={logo} alt="logo" />
        </div>
        Do Akce!
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="/akce">
              Akce
            </a>
          </li>
          <li className="nav-item user-select-none">
            <span className="nav-link">/</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/vylety">
              Výlety
            </a>
          </li>
          <li className="nav-item user-select-none">
            <span className="nav-link">/</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/kalendar">
              Kalendář
            </a>
          </li>
          <li className="nav-item user-select-none">
            <span className="nav-link">/</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/mapa">
              Mapa
            </a>
          </li>
          <li className="nav-item user-select-nonex">
            <span className="nav-link">/</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/o-nas">
              O nás
            </a>
          </li>
        </ul>
        <form className="form-inline mx-auto" style={{ maxWidth: "400px" }}>
          <div className="input-group" style={{ width: "100%" }}>
            <input
              type="search"
              className="form-control"
              placeholder="Zadejte hledaný text"
              aria-label="Search"
            />
          </div>
        </form>
        <button
          className="btn btn-success fw-bold ml-3"
          type="button"
          onClick={handleLoginRedirect}
          style={{ marginRight: "60px" }}
        >
          Přihlásit se
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

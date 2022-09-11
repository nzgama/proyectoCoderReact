import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const text = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" to="/">
          MiTenda
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#top">
                ¿Quienes Somos?
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#top"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ropa
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/category/1">
                    Remeras
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/2">
                    Pantalones
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/3">
                    Camperas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#top" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <CartWidget />
          </form>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_pokemon.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header-bg">
      <div className="container header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={(nav) => (nav.isActive ? "nav-active" : undefined)}
              >
                Home
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="pokemons"
                className={(nav) => (nav.isActive ? "nav-active" : undefined)}
              >
                Pokemons
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={(nav) => (nav.isActive ? "nav-active" : undefined)}
              >
                Contato
                <span></span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

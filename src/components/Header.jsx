/*
  Composant Header à utiliser sur les différentes pages du site.
*/

import { NavLink } from "react-router-dom"
import "../Styles/Header.css"

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <picture>
          <source srcSet="src/assets/Logo/LogoSmall.png" media="(max-width: 768px)" />
          <source srcSet="src/assets/Logo/LogoBig.png" media="(min-width: 769px)" />
          <img src="src/assets/Logo/LogoBig.png" alt="Kasa Logo" />
        </picture>
      </div>
      <nav className="headerLinks">
        <ul>
          <li>
            <NavLink to="/"
            className={({ isActive}) => (isActive ? "activeLink" : "" )}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos"
              className={({ isActive }) => (isActive ? "activeLink" : "")}>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
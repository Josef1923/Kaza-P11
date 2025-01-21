import { NavLink } from "react-router-dom"
import "./style.scss"
import LogoSmall from "../../assets/Logo/LogoSmall.png"
import LogoBig from "../../assets/Logo/LogoBig.png"

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <picture>
          <source srcSet={LogoSmall} media="(max-width: 768px)" />
          <img src={LogoBig} alt="Logo kaza" />
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
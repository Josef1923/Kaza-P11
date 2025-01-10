/*
  Composant Header à utiliser sur les différentes pages du site.
*/

import { Link } from "react-router-dom" 
import "../Styles/Header.css"

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" >Accueil</Link>
        <Link to="/a-propos" >À propos</Link>
        <Link to="/logement/1">Fiche logement 1</Link>
        <Link to="/*" >Erreur 404</Link>
      </nav>
    </header>
  );
}
 export default Header
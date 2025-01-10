/*
  Composant Header à utiliser sur les différentes pages du site.
*/

import { Link } from "react-router-dom" 

function Header() {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <nav>
        <Link to="/" style={{ marginRight: '15px' }}>Accueil</Link>
        <Link to="/a-propos" style={{ marginRight: '15px' }}>À propos</Link>
        <Link to="/logement/1" style={{ marginRight: '15px' }}>Fiche logement 1</Link>
        <Link to="/*" style={{ marginRight: '15px' }}>Erreur 404</Link>
      </nav>
    </header>
  );
}
 export default Header
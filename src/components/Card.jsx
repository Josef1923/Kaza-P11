/*
  Composant card utilisé sur page d'accueil.
*/
import PropTypes from "prop-types"
import "../Styles/Card.css"

function Card({ cover, title }) {
    return (
        <div className="card">
            <img src={cover} alt="photo du logement" className="cardCover" />
            <h2 className="cardTitle">{title}</h2>
        </div>
    )

}

// Validation props
Card.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
}

export default Card
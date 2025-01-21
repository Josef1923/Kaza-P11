import PropTypes from "prop-types"
import "./Card.scss"

function Card({ cover, title, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={cover} alt="photo du logement" className="cardCover" />
            <h2 className="cardTitle">{title}</h2>
        </div>
    )
}

// Validation props
Card.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Card
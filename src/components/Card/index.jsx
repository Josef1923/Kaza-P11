import PropTypes from "prop-types"
import "./style.scss"

function Card({ cover, title, onClick }) {

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            onClick();
            event.preventDefault();
        }
    };

    return (
        <div className="card" onClick={onClick}  tabIndex={0} onKeyDown={handleKeyDown} >
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
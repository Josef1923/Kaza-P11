import PropTypes from "prop-types"

function Carrousel( {picture}) {
    return (
        <img src={picture} className="carrouselPicture" ></img>
    )
}

// Validation props
Carrousel.propTypes = {
  picture: PropTypes.node
}

export default Carrousel
import PropTypes from "prop-types"
import "../Styles/Host.css"

function Host({ name, picture }) {
    return (
        <div className="hostContainer">
            <div className="hostName">{name}</div>
            <img className="hostPicture" src={picture} alt={`portraitof ${name}`}></img>
        </div>
    )
}

// Validation props
Host.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
}

export default Host
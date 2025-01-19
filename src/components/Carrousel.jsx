import PropTypes from "prop-types"
import "../styles/Carrousel.css"
import CarrouselLeftSlideVector from "../assets/svg/CarrouselLeftSlideVector.svg"
import CarrouselRightSlideVector from "../assets/svg/CarrouselRightSlideVector.svg"

function Carrousel({ picture }) {

    return (
        <div className="carrouselContainer">
            <img src={picture} className="carrouselPicture" ></img>
            <span className="leftSlide">
                <img src={CarrouselLeftSlideVector} />
            </span>
            <span className="rightSlide">
                <img src={CarrouselRightSlideVector} />
            </span>
        </div>
    )
}

// Validation props
Carrousel.propTypes = {
    picture: PropTypes.node
}

export default Carrousel
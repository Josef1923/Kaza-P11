import PropTypes from "prop-types"
import "./style.scss"
import CarrouselLeftSlideVector from "../../assets/svg/CarrouselLeftSlideVector.svg"
import CarrouselRightSlideVector from "../../assets/svg/CarrouselRightSlideVector.svg"
import { useState } from "react"

function Carrousel({ picture }) {

    const [currentImageIndex, setIndex] = useState(0)

    const rightSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % picture.length)
    }
    
    const leftSlide = () => {
        setIndex((prevIndex) => prevIndex === 0 ? picture.length -1 : prevIndex -1)
    }

    return (
        <div className="carrouselContainer">
            <img src={picture[currentImageIndex]} className="carrouselPicture" ></img>
            <span className="leftSlide">
                <img src={CarrouselLeftSlideVector} onClick={leftSlide}/>
            </span>
            <span className="rightSlide">
                <img src={CarrouselRightSlideVector} onClick={rightSlide}/>
            </span>
            <span className="visualIndex">{currentImageIndex + 1}/{picture.length}</span>
        </div>
    )
}

// Validation props
Carrousel.propTypes = {
    picture: PropTypes.node
}

export default Carrousel
import PropTypes from "prop-types"
import "./style.scss"

function Banner({ images, className, text }) {
    return (
        <div className="banner">
          <img src={images} alt="banner" className={`bannerImg ${className}`}/>
          {text && <p className="bannerText">{text}</p>}
        </div>
    );
}

// Validation props
Banner.propTypes = {
    images: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string
}

export default Banner
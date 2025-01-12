/*
  Composant Banner 
*/

import PropTypes from "prop-types"
import "../Styles/Banner.css"

function Banner({ images }) {
    return (
        <div className="banner">
          <img src={images} alt="banner" className="bannerImg" />
        </div>
    );
}

// Valisdation props
Banner.propTypes = {
    images: PropTypes.string.isRequired,
}

export default Banner
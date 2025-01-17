import PropTypes from "prop-types"
import "../Styles/Tag.css"

function Tag({ tag }) {
    return (
        <div className="tag">{tag}</div>
    )
}

// Validation props
Tag.propTypes = {
  tag: PropTypes.string,
}

export default Tag
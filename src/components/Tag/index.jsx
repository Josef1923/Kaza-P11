import PropTypes from "prop-types"
import "./style.scss"

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
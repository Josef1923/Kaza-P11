import PropTypes from "prop-types"
import ColoredStar from "../../assets/svg/ColoredStar.svg"
import EmptyStar from "../../assets/svg/EmptyStar.svg"

function Rating({ rate }) {

    let stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rate) {
            stars.push(<img key={i} src={ColoredStar} className="coloredStar" alt={`Étoile ${i} sur ${rate} remplie`}></img>)
        } else {
            stars.push(<img key={i} src={EmptyStar} className="emptyStar" alt={`Étoile ${i} sur ${rate} vide`}></img>)
        }
    }
    return (
        <div className="rating">{stars}</div>
    )
}

// Validation props
Rating.propTypes = {
    rate: PropTypes.number,
}

export default Rating
import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../assets/svg/Vector.svg";
import "../Styles/Collapse.css";

function Collapse({ title, description }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapseContainer">
            <button className="collapseButton" >{title}
                <img src={Vector} onClick={() => setIsOpen(!isOpen)} className={`collapseVector ${isOpen ? "open" : ""}`}></img>
            </button>
            <div className={`collapseContent ${isOpen ? "open" : ""}`}>
                <div className="innerContent">{description}</div>
                </div>
        </div>
    );
}

// Validation props
Collapse.propTypes = {
    title: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}


export default Collapse;
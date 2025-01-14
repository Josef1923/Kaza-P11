import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../assets/svg/Vector.svg";
import "../Styles/Collapse.css";

function Dropdown({ title, description }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapseContainer">
            <button className="collapseButton" >{title}
                <img src={Vector} onClick={() => setIsOpen(!isOpen)} className={`collapseVector ${isOpen ? "open" : ""}`}></img>
            </button>
            <div className={`collapseContent ${isOpen ? "open" : ""}`}>{description}</div>
        </div>
    );
}

// Validation props
Dropdown.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}


export default Dropdown;
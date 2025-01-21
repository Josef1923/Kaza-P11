import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../../assets/svg/CollapseVector.svg";
import "./Collapse.scss";

function Collapse({ title, description }) {

    const [isOpen, setIsOpen] = useState(false);

    const OpenCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapseContainer">
            <button className="collapseButton" >{title}
                <img src={Vector} onClick={OpenCollapse} className={`collapseVector ${isOpen ? "open" : ""}`}></img>
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
    description: PropTypes.node
}


export default Collapse;
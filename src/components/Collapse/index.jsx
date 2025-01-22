import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../../assets/svg/CollapseVector.svg";
import "./style.scss";

function Collapse({ title, description }) {

    const [isOpen, setIsOpen] = useState(false);

    const OpenCollapse = () => {
        setIsOpen(!isOpen)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            OpenCollapse();
            event.preventDefault();
        }
    };

    return (
        <div className={`collapseContainer ${isOpen ? "open" : ""}`}>
            <button className="collapseButton">{title}
                <img src={Vector}
                    onClick={OpenCollapse}
                    className="collapseVector"
                    alt={title}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                ></img>
            </button>
            <div className="collapseContent">
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
import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../assets/svg/Vector.svg";

function Dropdown({title, description}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button >{title}<img src={Vector} onClick={() => setIsOpen(!isOpen)}></img></button>
            {isOpen && <p>{description}</p>}
        </div>
    );
}

// Validation props
Dropdown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}


export default Dropdown;
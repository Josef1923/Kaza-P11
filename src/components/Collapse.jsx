import PropTypes from "prop-types";
import { useState } from "react";
import Vector from "../assets/svg/Vector.svg";

function Dropdown({title, description}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{title}<img src={Vector}></img></button>
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
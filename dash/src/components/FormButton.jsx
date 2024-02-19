import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function FormButton(props) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    padding: props.size,
    backgroundColor: props.buttonColor,
    color: props.textColor,
    display: 'inline-block',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    transition: 'background-color 0.3s ease'
  };

  const hoverStyle = {
    backgroundColor: props.textColor === '#267eb5' ? '#d1cfcf' : '#1a5b80' // Change hover color based on text color
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <NavLink
      to="/ContactForm"
      className="FormButton"
      style={{ ...buttonStyle, ...(isHovered && hoverStyle) }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.text}
    </NavLink>
  );
}

export default FormButton;


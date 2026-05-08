import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Buttoncomp = ({ text = "Click Me", link = "#", className = "" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`glow-btn ${className}`}
      style={{ fontSize: '0.95rem', marginTop: '16px' }}
    >
      {text} <FaExternalLinkAlt size={12} />
    </a>
  );
};

export default Buttoncomp;

import React from 'react';

const Buttoncomp = ({ text = "Click Me", link = "#", className = "" }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-6 py-3
        bg-gradient-to-r from-indigo-500 to-purple-600
        text-white
        text-lg font-semibold
        rounded-full
        shadow-md
        transition-all duration-300
        hover:scale-105 hover:shadow-lg
        active:scale-95
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Buttoncomp;

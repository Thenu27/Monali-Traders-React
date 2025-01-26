import React, { useState } from "react";
import './Dropdown.css'
const Dropdown = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track the active accordion

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active panel
  };

  return (
    <div className="dropdown-section">
      <button
        className={`accordion ${activeIndex === 0 ? "active" : ""}`}
        onClick={() => handleClick(0)}
      >
        What types of Ariel bundle cable accessories do you offer?
      </button>
      {activeIndex === 0 && (
        <div className="panel">
          <p className="answer">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      )}

      <button
        className={`accordion ${activeIndex === 1 ? "active" : ""}`}
        onClick={() => handleClick(1)}
      >
        From which countries do you source, import, or procure your products
      </button>
      {activeIndex === 1 && (
        <div className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      )}


<button
        className={`accordion ${activeIndex === 2 ? "active" : ""}`}
        onClick={() => handleClick(2)}
      >
        What specific safety standards and certifications do your Ariel bundle cable accessories meet?
      </button>
      {activeIndex === 2 && (
        <div className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      )}

      <button
        className={`accordion ${activeIndex === 3 ? "active" : ""}`}
        onClick={() => handleClick(3)}
      >
        How can I purchase your Ariel bundle cable accessories or other equipment, and what are the available purchasing methods, payment options
      </button>
      {activeIndex === 3 && (
        <div className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

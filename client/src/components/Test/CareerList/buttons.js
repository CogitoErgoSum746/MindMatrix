import React, { useState } from 'react';

const ButtonList = ({ values }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleButtonClick = (value) => {
    // Add the value to the selectedValues list
    setSelectedValues((prevValues) => [...prevValues, value]);
  };

  return (
    <div>
      <div className="flex space-x-4">
        {values.map((value, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
      {selectedValues.length > 0 && (
        <div className="mt-4">
          <h2>Selected Values:</h2>
          <ul>
            {selectedValues.map((selectedValue, index) => (
              <li key={index}>{selectedValue}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ButtonList;

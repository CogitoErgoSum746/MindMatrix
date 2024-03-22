import React, { useState } from 'react';

const CollapsibleComponent = ({ image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapsible-container">
      <button className="toggle-button bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out" onClick={toggleExpansion}>
  {isExpanded ? 'Hide Details' : 'Show Details'}
</button>

      {isExpanded && (
        <div className="content">
          <div className="image-container">
            <img src={image} alt="Collapsible Content" className="w-100 h-64" />
          </div>
          {/* <button className='bg-blue-500 px-4 py-2 rounded mt-5 text-white'>Buy Now</button> */}
        </div>
      )}
    </div>
  );
};

export default CollapsibleComponent;

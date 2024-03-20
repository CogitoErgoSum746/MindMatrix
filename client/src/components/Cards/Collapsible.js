import React, { useState } from 'react';

const CollapsibleComponent = ({ image, items, buttonText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapsible-container">
      <button className="toggle-button" onClick={toggleExpansion}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      {isExpanded && (
        <div className="content">
          {/* <div className="image-container">
            <img src={image} alt="Collapsible Content" />
          </div> */}
          <ul className="list-disc text-left ml-5">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                <li>Stress</li>
                <li>Anxiety</li>
                <li>Panic Attacks</li>
                <li>Anger</li>
                <li>Fear</li>
                <li>Depression</li>
                <li>Low mood</li>
                <li>Phobias</li>
                <li>Shame</li>
                <li>Sadness</li>
                <li>Guilt</li>
                <li>Addiction</li>
                <li>OCD</li>
                <li>PTSD</li>
                <li>Relationship Issues</li>
                <li>ADHD & Teenage Issues</li>
              </div>
            </ul>
          <p>{buttonText}</p>
          {/* <button className='bg-blue-500 px-4 py-2 rounded mt-5 text-white'>Buy Now</button> */}
        </div>
      )}
    </div>
  );
};

export default CollapsibleComponent;

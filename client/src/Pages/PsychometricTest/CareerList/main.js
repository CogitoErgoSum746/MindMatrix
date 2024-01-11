import React, { useState } from 'react';

const Homepage = () => {
  let dictionary = {
    'Priority1': ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6', 'Value 7', 'Value 8', 'Value 9', 'Value 10'],
    'Priority2': ['Value 11', 'Value 12', 'Value 13', 'Value 14', 'Value 15', 'Value 16', 'Value 17', 'Value 18', 'Value 19', 'Value 20'],
    // Add more lists as needed
  };

  // Convert the dictionary into an array of objects for easier mapping
  let lists = Object.entries(dictionary).map(([listName, values]) => ({ listName, values }));

  let [selectedValues, setSelectedValues] = useState([]);

  const handleButtonClick = (value, listName, isSelected) => {
    if (isSelected) {
      setSelectedValues((prevValues) =>
        prevValues.filter((item) => item.listName !== listName || item.listValue !== value)
      );

      dictionary[listName].push(value);
    } else {
      setSelectedValues((prevValues) => [...prevValues, { listName, listValue: value }]);

      dictionary[listName] = dictionary[listName].filter((item) => item !== value);
    }
  };

  const handleSubmit = () => {
    // Display the latest selected values
    alert(`Latest Selected Values: ${selectedValues.map(({ listValue }) => listValue).join(', ')}`);
  };

  return (
    <div className='flex h-screen relative'>
      <div className='p-20 border-r-4 border-blue-500 pr-8 text-center'>
        <h2 className="text-xl font-bold mb-4">Selected Values:</h2>
        {selectedValues.length > 0 && (
          <div className="space-y-4">
            {selectedValues.map(({ listName, listValue }, index) => (
              <div key={index} className="flex items-center space-x-2">
              <button
                className="bg-red-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105"
              >
                {listValue}
              </button>
              <span
                className="text-red-500 cursor-pointer text-3xl"
                onClick={() => handleButtonClick(listValue, listName, true)}
              >
                ×
              </span>
            </div>
            
            ))}
          </div>
        )}
      </div>
      <div className='flex-1 flex flex-col p-20'>
        {lists.map((list, listIndex) => (
          <div key={listIndex} className='mb-4 text-left'>
            <h3 className="text-lg font-bold mb-2">{list.listName}</h3>
              {list.values
                .filter((value) => !selectedValues.find((item) => item.listName === list.listName && item.listValue === value))
                .map((value, index) => (
                  <button
                    key={index}
                    className="bg-blue-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105 mb-2 px-4 ml-2"
                    onClick={() => handleButtonClick(value, list.listName, false)}
                  >
                    {value}
                  </button>
                ))}
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 right-20">
        <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Homepage;

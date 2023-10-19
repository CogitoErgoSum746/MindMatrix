import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { API_BASE_URL } from '../config';

function Careeropt() {
  const [careerOption, setCareerOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [priorityMap, setPriorityMap] = useState({});
  const [availablePriorities, setAvailablePriorities] = useState([1, 2, 3, 4, 5,6,7,8,9,10]);

  const authtoken = localStorage.getItem("authtoken");

  useEffect(() => {
    const usedPriorities = new Set(Object.values(priorityMap));
    const available = availablePriorities.filter((priority) => !usedPriorities.has(priority));
    setAvailablePriorities(available);
  }, [priorityMap]);

  const handleCareerOptionChange = (e) => {
    setCareerOption(e.target.value);
  };

  const handleAddCareerOption = async(e) => {
    e.preventDefault();

    if (careerOption.trim() === '') {
      alert('Please enter a career option.');
      return;
    }
    if (selectedOptions.length >= 10) {
      alert('You can only select up to 10 career options.');
      return;
    }

    if (selectedOptions.includes(careerOption)) {
      alert('This career option is already selected.');
      return;
    }

    const priority = availablePriorities[0];
    try {
      const response = await fetch(`${API_BASE_URL}/user/carreerOptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authtoken':authtoken,
        },
        body: JSON.stringify({
          careerOption: careerOption,
          priority: priority,
        }),
      });

      if (response.ok) {
        setSelectedOptions([...selectedOptions, careerOption]);
        setPriorityMap({ ...priorityMap, [careerOption]: priority });
        setAvailablePriorities(availablePriorities.slice(1));
        setCareerOption('');
      } else {
        console.error('Failed to add career option:', response);
        alert('Failed to add career option. Please try again later.');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      alert('Failed to add career option. Please try again later.');
    }
  };

  const handlePriorityChange = (option, newPriority) => {
    const currentPriority = priorityMap[option];
    if (currentPriority === newPriority) {
      return; // No change needed
    }

    const updatedPriorityMap = { ...priorityMap };
    updatedPriorityMap[option] = newPriority;

    setPriorityMap(updatedPriorityMap);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newOptions = [...selectedOptions];
    newOptions.splice(result.destination.index, 0, newOptions.splice(result.source.index, 1)[0]);

    setSelectedOptions(newOptions);
  };

  return (
    <div className='flex flex-col bg-gray-800 min-h-screen p-10 text-white'>
      <div className="p-4 max-w-md">
        <a href="https://shorturl.at/epzUX" target="_blank" rel="noopener noreferrer" className='bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg mt-4 text-white'>View Career Options</a>

        <div className="mb-4">
          <input
            type="text"
            value={careerOption}
            onChange={handleCareerOptionChange}
            placeholder="Enter a career option"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded mt-10"
          />
          <button onClick={handleAddCareerOption} className='bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg mt-2 text-white'>Add</button>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {selectedOptions.map((option, index) => (
                  <Draggable key={option} draggableId={option} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex items-center mb-2"
                      >
                        <span>{option}</span>
                        <select
                          value={priorityMap[option] || 1}
                          onChange={(e) => handlePriorityChange(option, e.target.value)}
                          className="w-16 px-2 py-1 ml-2 bg-gray-700 border border-gray-600 rounded"
                        >
                          {availablePriorities.map((priority) => (
                            <option key={priority} value={priority}>
                              {priority}
                            </option>
                          ))}
                        </select>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        <h2 className="text-xl font-bold mt-4">Selected Career Options (Sorted by Priority):</h2>
        <ul>
          {selectedOptions.map((option) => (
            <li key={option} className="mb-2">
              {option} (Priority: {priorityMap[option]})
            </li>
          ))}
        </ul>

        {selectedOptions.length >= 5 && selectedOptions.length <= 10 && (
          <Link to="/test/2/careeropt">
            <button className='bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg mt-4 text-white'>Next</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Careeropt;

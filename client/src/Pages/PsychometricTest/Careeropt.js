import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";
import { Link } from "react-router-dom";

function CareerOptions() {
  const authtoken = localStorage.getItem("authtoken");
  const [sortedNames, setSortedNames] = useState([]);

  let dictionary = {
    Naturalistic: [
      "Botanist",
      "Ecologist",
      "Environmental Scientist",
      "Zoologist",
      "Wildlife Biologist",
      "Marine Biologist",
      "Geologist",
      "Meteorologist",
      "Environmental Educator",
      "Conservation Scientist",
    ],
    Intrapersonal: [
      "Psychologist",
      "Therapist/Counselor",
      "Life Coach",
      "Philosopher",
      "Spiritual Leader",
      "Self-Help Author",
      "Meditation Instructor",
      "Motivational Speaker",
      "Personal Development Trainer",
      "Career Counselor",

    ],
    Linguistic: [
      "Writer",
      "Journalist",
      "Editor",
      "Blogger",
      "Copywriter",
      "Technical Writer",
      "Content Creator",
      "Speechwriter",
      "Novelist",

    ],
    Logical: [
      "Mathematician",
      "Statistician",
      "Computer Scientist",
      "Data Scientist",
      "Actuary",
      "Financial Analyst",
      "Economist",
      "Research Scientist",
      "Operations Research Analyst",
      "Quantitative Analyst (Quant)",
    ],
    Musical: [
      "Musician",
      "Composer",
      "Music Producer",
      "Singer/Vocalist",
      "Conductor",
      "Music Teacher/Instructor",
      "Music Arranger",
      "Sound Engineer",
      "Music Therapist",
      "Music Director",
    ],
    Interpersonal: [
      "Counselor/Psychologist",
      "Social Worker",
      "Human Resources Specialist/Manager",
      "Teacher/Educator",
      "Life Coach",
      "Therapist",
      "Mediator",
      "Salesperson",
      "Customer Service Representative",
      "Public Relations Specialist",
    ],
    Spatial: [
      "Graphic Designer",
      "Architect",
      "Interior Designer",
      "Animator",
      "Photographer",
      "Industrial Designer",
      "Fashion Designer",
      "Game Designer",
      "Illustrator",
      "Art Director",
    ],
    Kinesthetic: [
      "Athlete",
      "Dancer",
      "Actor/Actress",
      "Surgeon",
      "Physical Therapist",
      "Carpenter",
      "Chef",
      "Fashion Designer",
      "Mechanic",
      "Circus Performer",
    ],
  };

  // Convert the dictionary into an array of objects for easier mapping
  let lists = Object.entries(dictionary).map(([listName, values]) => ({ listName, values }));

  const sortedLists = sortedNames.map((sortedName) =>
    lists.find((list) => list.listName === sortedName)
  );

  let [selectedValues, setSelectedValues] = useState([]);
  let [otherValue, setOtherValue] = useState('');

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

  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  const handleSubmit = () => {
    // Display the latest selected values and the other value
    alert(
      `Latest Selected Values: ${selectedValues.map(({ listValue }) => listValue).join(', ')}\nOther Value: ${otherValue}`
    );
  };

  useEffect(() => {
    fetch(`${API_BASE_URL}/user/multilpleIRank`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: authtoken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sortedNames) {
          setSortedNames(data.sortedNames);
        }
        console.log(sortedNames);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className='flex h-screen relative bg-gray-100'>
  <div className='p-8 border-r-4 border-blue-500 pr-8 bg-white'>
    <h2 className="text-2xl font-bold mb-4">Selected Values:</h2>
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
  <div className='flex-1 flex flex-col p-8 overflow-auto bg-gray-200'>
    {sortedLists.map((list, listIndex) => (
      <div key={listIndex} className='mb-4 text-left bg-white p-4 rounded'>
        <h3 className="text-lg font-bold mb-2">{list.listName}</h3>
        <div className="max-h-48 overflow-y-auto">
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
      </div>
    ))}
  </div>
  <div className="p-8 bg-gray-100">
    <div className="mt-4">
      <label className="block text-left text-lg font-bold mb-2">Other (Optional):</label>
      <input
        type="text"
        value={otherValue}
        onChange={handleOtherInputChange}
        className="border border-gray-400 p-2 rounded w-full"
      />
    </div>
    <button
      onClick={handleSubmit}
      className="bg-green-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105 mt-4"
    >
      Submit
    </button>
  </div>
</div>


    </>
  );
}

export default CareerOptions;
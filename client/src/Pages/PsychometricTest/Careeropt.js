import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { API_BASE_URL } from "../../config";

function CareerOptions() {
  const authtoken = localStorage.getItem("authtoken");
  const navigate = useNavigate();
  const [sortedNames, setSortedNames] = useState([]);
  const [showOtherInput, setShowOtherInput] = useState(false);

  let dictionary = {
    Naturalistic: [
      "Animal Trainer",
      "Arborist-Tree surgeon",
      "Archaeologist",
      "Astronomer",
      "Bird and Wild Life Researcher",
      "Botanist",
      "Conservationist / Ecologist",
      "Farmer / Horticulturist",
      "Floriculturists",
      "Geologist",
      "Landscape Designers",
      "Marine Biologist",
      "Meteorologist",
      "Veterinary Doctor",
      "Wildlife/ Nature photographer",
      "Zookeeper",
    ],
    Intrapersonal: [
      "Consultant",
      "Creative Director",
      "Criminologist",
      "Energy Healer",
      "Entrepreneur",
      "Librarian",
      "Life Coach/ Leadership Coach",
      "Motivational Speaker",
      "Philosopher",
      "Psychologist",
      "Psychotherapist / Counsellor",
      "Receptionist",
      "Scientist/ Inventor/ Researcher",
      "Self-Help Writer",
      "Spiritual Guide",
      "Theologian/Religious Leader",
      "Writer",
    ],
    Linguistic: [
      "Actor / Actress",
      "Blogger/ Writer",
      "Commentator",
      "Diplomat",
      "Editor/ Proof-reader",
      "Historian",
      "Journalist",
      "Lawyer",
      "Linguist",
      "News Reader",
      "Poet/ Novelist",
      "Politician",
      "Teacher/ Professor",
      "Trainer/ Public Speaker",
      "Translator",
    ],
    Logical: [
      "Accountant/Auditor",
      "Banker",
      "Computer & IT professionals",
      "Doctor",
      "Economist",
      "Engineer/ Technician",
      "Financial Planner/ Analyst",
      "Lawyer/Attorney/ Judge",
      "Math /Science Teacher-Professor",
      "Mathematician / Statistician",
      "Military Officer",
      "Pharmacist",
      "Physicist",
      "Scientist",
      "Stock Broker",
    ],
    Musical: [
      "Choir Director",
      "Composer",
      "DJ (Disc Jockey)",
      "Music Producer",
      "Music Teacher (Intermediate/Advanced Levels)",
      "Music Therapist",
      "Musician",
      "Singer",
      "Songwriter",
      "Sound Engineer",
    ],
    Interpersonal: [
      "Administrator",
      "Anthropologist",
      "CEO",
      "Coach /Mentor",
      "Consultant",
      "Counsellor / Therapist",
      "Diplomat",
      "Educator",
      "HR-Professional",
      "Manager",
      "Nurse",
      "Politician",
      "Teacher/Principal",
      "Psychologist",
      "Receptionist",
      "Sales/ Customer Service Professional",
      "Social Worker/ Sociologist",
      "Supervisor / Team Coordinator",
      "Travel Agent",
    ],
    Spatial: [
      "Advertising Specialist",
      "Architect",
      "Art Director",
      "Artist",
      "Chef",
      "Civil Engineer",
      "Designer (fashion, industrial design, graphics, animation, and interior design)",
      "Driver",
      "Filmmaker",
      "Fine Artist",
      "Mechanical Engineer",
      "Photographer/ Cinematographer",
      "Pilot",
      "Poet",
      "Sculptor",
      "Surgeon",
    ],
    Kinesthetic: [
      "Actor / Actress",
      "Athlete",
      "Builder/ Construction Worker",
      "Carpenter",
      "Circus Arts Performer",
      "Craftsman",
      "Dancer /Choreographer",
      "Farmer",
      "Firefighter",
      "Martial Arts Instructor",
      "Mechanic",
      "Mime/Dumb Artist",
      "Painter",
      "Physiotherapist",
      "Soldier/Police",
      "Stunt Performer",
      "Surgeon",
      "Yoga/ Fitness/Physical Education Instructor",
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
      if (selectedValues.length >= 10) {
        alert("You have already selected the maximum of 10 values.");
        return;
      }

      setSelectedValues((prevValues) => [...prevValues, { listName, listValue: value }]);

      dictionary[listName] = dictionary[listName].filter((item) => item !== value);
    }
  };

  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  const handleToggleOtherInput = () => {
    setShowOtherInput((prev) => !prev);
  };

  const sendCareerOptionsToBackend = () => {
    const careerOptions = selectedValues.map(({ listValue }) => listValue);
    const others = otherValue;

    console.log(careerOptions);
    fetch(`${API_BASE_URL}/user/carreerOptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: authtoken,
      },
      body: JSON.stringify({ careerOptions, others }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Career options sent to the backend successfully");
        } else {
          alert("Failed to send career options to the backend");
        }
        navigate('/test');
      })
      .catch((error) => {
        console.error("Error sending career options:", error);
      });
  };

  useEffect(() => {
    if (selectedValues.length === 10) {
      toast.info("Maximum values reached!");
    }
  }, [selectedValues]);

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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
  <div className="flex flex-col lg:flex-row h-screen relative bg-gray-100">
    <div className="lg:w-1/4 p-8 border-r-4 border-blue-500 pr-8 bg-white">
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
    <div className="lg:flex-1 p-8 overflow-auto bg-gray-200">
      {sortedLists.map((list, listIndex) => (
        <div key={listIndex} className="mb-4 text-left bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold mb-2">{list.listName}</h3>
          <div className="max-h-48 overflow-y-auto">
            {list.values
              .filter((value) => !selectedValues.find((item) => item.listName === list.listName && item.listValue === value))
              .map((value, index) => (
                <button
                  key={index}
                  className={`bg-blue-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105 mb-2 px-4 ml-2 ${selectedValues.length >= 10 ? 'opacity-50 pointer-events-none' : ''}`}
                  onClick={() => handleButtonClick(value, list.listName, false)}
                  disabled={selectedValues.length >= 10}
                >
                  {value}
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
    <div className="p-8 bg-gray-100 w-[400px]">
      <div className="mt-4">
        <button
          onClick={handleToggleOtherInput}
          className="bg-red-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105 mt-4"
        >
          {showOtherInput ? "X" : "Any other profession"}
        </button>
      </div>

      {showOtherInput && (
        <div className="mt-4">
          <label className="block text-left text-lg font-bold mb-2">Other (Optional):</label>
          <input
            type="text"
            value={otherValue}
            onChange={handleOtherInputChange}
            className="border border-gray-400 p-2 rounded w-full"
          />
        </div>
      )}

      <button
        onClick={sendCareerOptionsToBackend}
        className="bg-green-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105 mt-4"
      >
        Submit
      </button>

      <div className="mt-4 bg-gray-200 p-4 rounded">
        <h3 className="text-2xl font-bold mb-5">Instructions:</h3>
        <p className="text-md text-gray-600 mb-2">• Your various intelligences are listed from the highest to the lowest dominance.</p>
        <p className="text-md text-gray-600 mb-2">• Pick your top 10 favorite jobs from the list below.</p>
        <p className="text-md text-gray-600">• If your preferred profession is not on the list, add it to the "Other (Optional)" box on the right side and hit “submit”.</p>
      </div>

      {selectedValues.length === 10 &&
        <div className={`mt-4 bg-green-200 p-4 rounded border-2 border-green-500 transition-transform transform hover:scale-105`}>
          <p className="text-md text-green-600 mt-2">Congrats on selecting your most preferred jobs from our comprehensive lists</p>
          <p className="text-xl text-green-800 mt-2">You may now submit!!</p>
        </div>
      }
    </div>
  </div>

  <ToastContainer position="top-center" autoClose={3000} />
</>

  );
}

export default CareerOptions;
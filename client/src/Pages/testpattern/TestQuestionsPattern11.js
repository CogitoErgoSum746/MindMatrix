import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Ellipse1 from "../../images/Ellipse1.png";
import Ellipse2 from '../../images/Ellipse2.png';
import Ellipse3 from "../../images/Ellipse3.png";
import { API_BASE_URL } from "../../config";

function TestQuestionsPattern11() {
  const { subtestId } = useParams();
  const id = 11;

  const subtests = [
    { id: 1, name: "Academic Competency" },
    { id: 2, name: "Health & Fitness" },
    { id: 3, name: "Social Friends" },
    { id: 4, name: "Discipline" },
    { id: 5, name: "Good Manners" },
    { id: 6, name: "Spirituality" },
    { id: 7, name: "Goal Orientation" },
    { id: 8, name: "Confidence" },
    { id: 9, name: "Responsible" },
    { id: 10, name: "Hobbies & Extracurriculars" }
  ];

  const subtestIdInt = parseInt(subtestId);
  const selectedSubtest = subtests.find(subtest => subtest.id === subtestIdInt);

  const [categoryScore, setCategoryScore] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  useEffect(() => {
    const fetchTestScores = async () => {
      try {
        const authtoken = localStorage.getItem("authtoken");
        const response = await fetch(`${API_BASE_URL}/user/checkscore`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authtoken: authtoken,
          },
          body: JSON.stringify({
            testType: "Students Wheel of Life",
            subCategory: selectedSubtest.name,
          }),
        });

        if (response.ok) {
          const score = await response.json();
          setCategoryScore(score);
          setIsTestCompleted(true);
        } else {
          console.error("Failed to fetch test scores");
        }
      } catch (error) {
        console.error("Error fetching test scores:", error);
      }
    };

    if (selectedSubtest) {
      fetchTestScores();
    }
  }, [selectedSubtest]);

  const handleScoreChange = (score) => {
    setCategoryScore(score);
  };

  const sendCategoryScoreToServer = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(`${API_BASE_URL}/user/testResultToAPI`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authtoken: authtoken,
        },
        body: JSON.stringify({
          testType: "Students Wheel of Life",
          subCategory: selectedSubtest.name,
          score: categoryScore,
        }),
      });

      if (response.ok) {
        console.log("Category score sent to the server successfully");
      } else {
        console.error("Failed to send category score to the server");
      }
    } catch (error) {
      console.error("Error sending category score:", error);
    }
  };

  return (
    <div className="container bg-white min-h-screen">
      {!isTestCompleted && (
        <>
          <img src={Ellipse1} alt="business" className="absolute top-0 left-6 mb-20" height="100px" />
          <img src={Ellipse2} alt="business" width="700px" height="400px" className="absolute top-0 left-80" style={{ marginBottom: 40 }} />
          <img src={Ellipse3} alt="bbbnn" width="1600px" height="400px" />
        </>
      )}
      <div className="p-10">
        <h2 className="text-left mt-70 font-bold text-2xl mb-10">Assessment Rating Criteria: </h2>
        <p className="text-left font-semibold mb-5">
          Please evaluate "{selectedSubtest.name}" according to how often it applies to your situation. Use the following scale:
        </p>
        <p className="text-left font-semibold">
          Rate it from 0 to 10, where 0 means it rarely applies to you, and 10 means it consistently applies to you.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {isTestCompleted && (
          <div className="bg-white shadow-md p-4 rounded-lg mt-20" style={{ width: 400, height: 300 }}>
            <p className="text-2xl font-semibold text-green-600 mb-5 text-center">Category score submitted!</p>
          </div>
        )}
      </div>
      {!isTestCompleted && (
        <div className="p-10">
          <div className="mb-4">
            <p className="text-lg text-left font-semibold mb-5">
              Please rate "{selectedSubtest.name}":
            </p>
            <div className="mt-2 text-left">
              <input
                type="number"
                min="0"
                max="10"
                value={categoryScore}
                onChange={(e) => handleScoreChange(parseInt(e.target.value))}
                className="w-20 px-2 py-1 bg-white border border-gray-600 rounded"
              />
            </div>
            <div className="mt-4">
              <Link to={`/test/${id}`}>
                <button onClick={sendCategoryScoreToServer} className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestQuestionsPattern11;

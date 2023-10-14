
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function TestQuestionsPattern11() {
  const { subtestId } = useParams();

  const categories = [
    "Academic Competency",
    "Health & Fitness",
    "Social Friends",
    "Discipline",
    "Good Manners",
    "Spirituality",
    "Goal Orientation",
    "Confidence",
    "Responsible",
    "Hobbies & Extracurricular",
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [categoryScores, setCategoryScores] = useState(Array(categories.length).fill(0));
  const [showScore, setShowScore] = useState(false);

  const handleScoreChange = (score) => {
    const newCategoryScores = [...categoryScores];
    newCategoryScores[categoryIndex] = score;
    setCategoryScores(newCategoryScores);
  };

  const handleNextCategory = () => {
    if (categoryIndex < categories.length - 1) {
      setCategoryIndex(categoryIndex + 1);
    } else {
      // Display total scores
      setShowScore(true);
    }
  };

  const totalScore = categoryScores.reduce((acc, score) => acc + score, 0);

  const subCategory = "Students Wheel of Life";
  const testType = "Students Wheel of Life";
  const score = totalScore;

  const sendTestDataToServer = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(
        "http://localhost:8001/user/testResultToAPI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authtoken: authtoken,
          },
          body: JSON.stringify({
            testType,
            subCategory,
            score,
          }),
        }
      );

      if (response.ok) {
        console.log("Test data sent to the server successfully");
      } else {
        console.error("Failed to send test data to the server");
      }
    } catch (error) {
      console.error("Error sending test data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 min-h-screen pt-20">
      {showScore ? (
        <div className="text-white">
          <p>Total Score: {totalScore}</p>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg mb-2 text-left text-white">
            Rate your {categories[categoryIndex]}:
          </p>
          <div className="mt-2 text-left">
            <input
              type="number"
              min="1"
              max="10"
              value={categoryScores[categoryIndex]}
              onChange={(e) => handleScoreChange(parseInt(e.target.value))}
              className="w-20 px-2 py-1 bg-gray-700 border border-gray-600 rounded"
            />
          </div>
          <div className="mt-4">
            {categoryIndex === categories.length - 1 ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  // Submit totalScore to the backend
                  console.log("Total Score:", totalScore);
                }}
              >
                Submit Test Data
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextCategory}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TestQuestionsPattern11;

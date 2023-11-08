import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import mainpurple from "../../images/mainpurple.png";
import { API_BASE_URL } from "../../config";

function TestQuestionsPattern16() {
  const { subtestId } = useParams();
  const id = 16;

  const subtests = [
    { id: 1, name: "Money & Wealth"},
    {id:2,name:"Career & Work"},
    {id:3,name:"Health & Fitness"},
    {id:4,name:"Fun & Recreation"},
    {id:5,name:"Contribution"},
    {id:6,name:"Community"},
    {id:7,name:"Family"},
    {id:8,name:"Social & Friends"},
    {id:9,name:"Love & Romance"},
    {id:10,name:"Growth & Learning"}
  ];

  const subtestIdInt = parseInt(subtestId);
  const selectedSubtest = subtests.find(
    (subtest) => subtest.id === subtestIdInt
  );

  const [categoryScore, setCategoryScore] = useState(1);
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
            testType: "Wheel of Life",
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
    <div className="bg-white min-h-screen">
      {!isTestCompleted && (
        <>
          <div className="relative">
          <img
            src={mainpurple}
            alt="bbbnn"
            className="md:min-w-full md:w-full lg:h-80 md:h-30 sm:h-30"
          />

          <div className="flex justify-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white absolute top-1/3 lg:left-1/3 text-left md:text-justify font-['Inter'] uppercase">
              GET ALL YOUR <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-clip text text-black space-y-2 font-['Inter'] uppercase leading-10">
                PSYCHOMETRIC
              </span>{" "}
              TESTS
              <br />
              HERE
            </h1>
          </div>
        </div>
        </>
      )}
      <div className="p-10">
        <h2 className="text-left mt-70 font-bold text-2xl mb-10">
          Assessment Rating Criteria:{" "}
        </h2>
        <p className="text-left font-semibold mb-5">
          Please evaluate "{selectedSubtest.name}" according to how often it
          applies to your situation. Use the following scale:
        </p>
        <p className="text-left font-semibold">
          Rate it from 1 to 10, where 0 means it rarely applies to you, and 10
          means it consistently applies to you.
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {isTestCompleted && (
          <div
            className="bg-white shadow-md p-4 rounded-lg mt-20"
            style={{ width: 400, height: 300 }}
          >
            <p className="text-2xl font-semibold text-green-600 mb-5 text-center">
              Category score submitted!
            </p>
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
                min="1"
                max="10"
                value={categoryScore}
                onChange={(e) => handleScoreChange(parseInt(e.target.value))}
                className="w-20 px-2 py-1 bg-white border border-gray-600 rounded"
              />
            </div>
            <div className="mt-4">
              <Link to={`/test/${id}`}>
                <button
                  onClick={sendCategoryScoreToServer}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl"
                >
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

export default TestQuestionsPattern16;

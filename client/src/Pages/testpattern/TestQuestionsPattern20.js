import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import mainpurple from "../../images/mainpurple.png";

function TestQuestionsPattern20() {
  const { subtestId } = useParams();
  const id = 20;

  const commonoption = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ];

  const tests = {
    1: {
      title: "Skills and Qualifications",
      questions : [
        {
          questionText: "1. I possess the necessary skills and qualifications for a successful career in this profession.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2. I am willing to invest time and effort in acquiring additional training if required.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    2:{
      title:"Passion and Interest",
      questions :[
        {
          questionText: "1. I am genuinely interested in the activities and responsibilities associated with this profession.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2. I see myself finding fulfillment and satisfaction in this career.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ]
    },
    3:{
      title:"Work-Life Balance and Demands",
      questions :[
        {
          questionText: "1. I am comfortable with the expected work hours and demands of this profession.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2. I value a career that allows for a healthy work-life balance.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ]
    },
    4:{
      title:"Long-Term Goals",
      questions :[
        {
          questionText: "1. This profession aligns well with my long-term career aspirations and goals.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2. I can envision myself progressing and excelling in this field.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ]
    },
    5:{
      title:"Market Demand and Trends",
      questions :[
        {
          questionText: "1. I am aware of the current and future demand for professionals in this field.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2. I am confident that this profession will continue to be relevant and valuable.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        }
      ]
    }

  };
  const subtestIdInt = parseInt(subtestId);
  const subtest = tests[subtestIdInt];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState(Array(subtest.questions.length).fill(0));
  const [showScore, setShowScore] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionWeightage, optionIndex) => {
    setSelectedOption(optionIndex);
    const newScores = [...scores];
    newScores[questionIndex] = optionWeightage[optionIndex];
    setScores(newScores);
  };

  const handleNextQuestion = () => {
    if (questionIndex < subtest.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null);
    } else {
      // Display total score
      setShowScore(true);
    }
  };

  let totalScore = 0;
  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }

  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";
  const testType = "Professional Suitability Assessment";
  const score = totalScore;

  useEffect(() => {
    const fetchTestScores = async () => {
      try {
        const authtoken = localStorage.getItem("authtoken");
        console.log(authtoken);
        const response = await fetch(`${API_BASE_URL}/user/checkscore`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authtoken: authtoken,
          },
          body: JSON.stringify({
            testType,
            subCategory,
          }),
        });
        console.log(response);
        if (response.ok) {
          console.log(response);
          const score = await response.json();

          setScores(score);
          console.log(score);

          if (score) {
            setIsTestCompleted(true);
          }
        } else {
          console.error("Failed to fetch test scores");
        }
      } catch (error) {
        console.error("Error fetching test scores:", error);
      }
    };

    if (subCategory && testType) {
      fetchTestScores();
    }
  }, [subCategory, testType]);

  const sendTestDataToServer = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(`${API_BASE_URL}/user/testResultToAPI`, {
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
      });

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
      {!isTestCompleted && (
        <>
          <div className="p-10">
            <h2 className="text-left mt-70 font-bold text-2xl mb-10">
              Assessment Rating Criteria:{" "}
            </h2>
            <p className="text-left font-semibold mb-5">
              Please evaluate each statement according to how often it applies
              to your situation. Use the following scale:
            </p>
            <p className="text-left font-semibold">
              <strong>Strongly Disagree: </strong>Assign a rating of 1 if the statement
              applies to you.
            </p>
            <p className="text-left font-semibold">
              <strong>Disagree: </strong> Assign a rating of 2 if the statement
              applies to you.
            </p>
            <p className="text-left font-semibold">
              <strong>Neutral: </strong> Assign a rating of 3 if the statement
              applies to you.
            </p>
            <p className="text-left font-semibold">
              <strong>Agree: </strong> Assign a rating of 4 if the statement
              applies to you.
            </p>
            <p className="text-left mb-5 font-semibold">
              <strong>Strongly Agree: </strong> Assign a rating of 5 if the statement
              applies to you.
            </p>
          </div>
        </>
      )}
      {/* Conditionally render the "Test completed" message */}
      <div className="w-full h-full flex items-center justify-center">
        {isTestCompleted && (
          <div
            className="bg-white shadow-md p-4 rounded-lg mt-20"
            style={{ width: 400, height: 300 }}
          >
            <p className="text-2xl font-semibold text-green-600 mb-5 text-center">
              Test completed!
            </p>
          </div>
        )}
      </div>
      {!isTestCompleted && (
        <div className="p-10">
          {showScore ? (
            <div>
              <p>Total Score: {totalScore}</p>
            </div>
          ) : (
            <div className="mb-4">
              <p className="text-lg text-left font-semibold mb-5">
                {subtest.questions[questionIndex].questionText}
              </p>
              <div className="mt-2 text-left">
                {subtest.questions[questionIndex].options.map(
                  (option, optionIndex) => (
                    <div key={optionIndex} className="mb-2">
                      <label className="inline-flex justify-items-start">
                        <input
                          type="radio"
                          className="form-radio h-5 w-5"
                          name={`question-${questionIndex}`}
                          value={optionIndex}
                          checked={selectedOption === optionIndex}
                          onChange={() =>
                            handleOptionChange(
                              subtest.questions[questionIndex].optionWeightage,
                              optionIndex
                            )
                          }
                        />
                        <span
                          className="ml-3 bg-gray-300 p-3 block"
                          style={{ width: "300px" }}
                        >
                          {option}
                        </span>
                      </label>
                    </div>
                  )
                )}
              </div>
              <div className="mt-4">
                {selectedOption !== null ? (
                  questionIndex === subtest.questions.length - 1 ? (
                    <Link to={`/test/${id}`}>
                      <button
                        onClick={sendTestDataToServer}
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl"
                      >
                        Submit Test Data
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 px-12 py-2 rounded-full font-semibold text-xl"
                      onClick={handleNextQuestion}
                    >
                      Next Question {">"}
                    </button>
                  )
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 p-2 rounded-full font-semibold text-xl"
                  >
                    Next Question {">"}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TestQuestionsPattern20;

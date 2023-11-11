import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import mainpurple from "../../images/mainpurple.png";

function TestQuestionsPattern3() {
  const { subtestId } = useParams();
  const id = 3;

  const commonoption = ["Yes", "No"];

  const tests = {
    1: {
      title: "Right Brain",
      questions: [
        {
          questionText:
            "1. When given a task or assignment, you want to know why it’s important because you like the big picture.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "2. You don't need 'to-do lists' since you prefer to go with the flow.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "3. You would prefer modelling clay into pottery over puzzles because it is more creative.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "4. When shopping for a new dress, you would probably pick what looks best, rather than what is best in quality.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "5.	When travelling, you like an impulsive adventure: Why plan it all out and ruin it?",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "6.	Because you are visual, you prefer textbooks to lectures.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "7.	You can remember a person’s face but not necessarily their name.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "8. Your study room is not necessarily organized but you find what you need, eventually.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "9. When trying a new software program, you install it and immediately begin experimenting with it.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "10. You aren’t always on time, even if you mean to be.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
      ],
    },
    2: {
      title: "Left Brain",
      questions: [
        {
          questionText:
            "1. When given a task or assignment, you don’t always need to know why it’s important.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "2. You get a great deal of pleasure in creating to-do lists and checking each item off as it is accomplished.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "3. You would prefer puzzles over getting messy with clay.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "4. When shopping for a new dress, you would probably look at quality ratings over the looks of the dress.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "5. When travelling, you like to have your journey completely planned down to the last detail.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "6. Because you respond to verbal cues, you prefer lectures to textbooks.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText: "7. You are good at remembering names.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "8. Your study room is neatly organized with a place for everything. You spend little time looking for things.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "9. When trying a new software program, you prefer to use the instruction manual.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "10. You are almost always on time or early for meetings and appointments.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
      ],
    },
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

  // const totalScore = scores.reduce((acc, score) => acc + score, 0);

  let totalScore = 0;
  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }
  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";
  const testType = "Left-Right Brain Dominance";
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
              <strong>Yes: </strong>If the statement
              applies to you.
            </p>
            <p className="text-left font-semibold mb-5">
              <strong>No: </strong>If the statement doesn't apply
              to you.
            </p>
          </div>
        </>
      )}

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

export default TestQuestionsPattern3;

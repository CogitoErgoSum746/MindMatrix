import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { API_BASE_URL } from "../../../config";

function TestQuestionsPattern6() {
  const { subtestId } = useParams();
  const id = 6;

  const commonoption = [
    "Never Applies to Me",
    "Sometimes Applies to Me",
    "Often Applies to Me",
  ];

  const tests = {
    1: {
      title: "Visual",
      questions: [
        {
          questionText:
            "1.	I enjoy doodling and even my notes have lots of pictures and arrows in them.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText: "2.	I remember something better if I write it down.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "3.	I get lost or am late if someone tells me how to get to a new place, and I don’t write down the directions.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "4.	When trying to remember someone’s telephone number or something new like that, it helps me to get a picture of it in my mind.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "5.	If I am taking a test, I can “see” the textbook page and where the answer is located.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "6.	It helps me to look at the person while listening; it keeps me focused.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "7.	Using flashcards helps me to retain material for tests.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "8.	It’s hard for me to understand what a person is saying when there are people talking or music playing.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "9.	It’s hard for me to understand a joke when someone tells me.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "10. It is better for me to get work done in a quiet place.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
      ],
    },
    2: {
      title: "Auditory",
      questions: [
        {
          questionText:
            "1.	My written work doesn’t look neat to me.  My papers have crossed-out words and erasures.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "2.	It helps to use my finger as a pointer when reading to keep my place.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "3.	Papers with very small print, blotchy dittos or poor copies are tough on me.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "4.	I understand how to do something if someone tells me, rather than having to read the same thing to myself.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "5.	I remember things that I hear, rather than things that I see or read.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "6.	Writing is tiring. I press down too hard with my pen or pencil.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "7.	My eyes get tired fast, even though the eye doctor says that my eyes are okay.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "8.	When I read, I mix up words that look alike, such as “them” and “then,” “bad” and “dad.”",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "9.	It’s hard for me to read other people’s handwriting.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "10. If I had the choice to learn new information through a lecture or textbook, I would choose to hear it rather than read it.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
      ],
    },
    3: {
      title: "Kinesthetic",
      questions: [
        {
          questionText:
            "1.	I don’t like to read directions; I’d rather just start doing it.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "2.	I learn best when I am shown how to do something, and I have the opportunity to do it.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText: "3.	Studying at a desk is not for me.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "4.	I tend to solve problems through a more trial-and-error approach, rather than from a step-by-step method.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "5.	Before I follow directions, it helps me to see someone else do it first.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "6.	I find myself needing frequent breaks while studying.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "7.	I am not skilled in giving verbal explanations or directions.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "8.	I do not become easily lost, even in strange surroundings.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "9.	I think better when I have the freedom to move around.",
          options: commonoption,
          optionWeightage: [1, 2, 3],
        },
        {
          questionText:
            "10. When I can’t think of a specific word, I’ll use my hands a lot ",
          options: commonoption,
          optionWeightage: [1, 2, 3],
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
  const testType = "Learning Style";
  const score = totalScore;

  useEffect(() => {
    const fetchTestScores = async () => {
      try {
        const authtoken = localStorage.getItem("authtoken");
        ;
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
          <div className="p-10">
            <h2 className="text-left font-semibold text-xl mb-5">
            Assess each statement based on its frequency of relevance to your situation.
            </h2> 
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

export default TestQuestionsPattern6;

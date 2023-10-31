import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import Ellipse1 from "../../images/Ellipse1.png";
// import Ellipse2 from "../../images/Ellipse2.png";
// import Ellipse3 from "../../images/Ellipse3.png";
import { API_BASE_URL } from "../../config";
import purple from "../../images/purple.png";

function TestQuestionsPattern4() {
  const { subtestId } = useParams();
  const id = 4;

  const commonoption = [
    "Disagree",
    "Slightly Disagree",
    "Neutral",
    "Slightly Agree",
    "Agree",
  ];

  const tests = {
    1: {
      title: "Openness",
      questions: [
        {
          questionText: "1.	I am full of ideas.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I am curious about many different things.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3.	I am sophisticated in art, music, or literature.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I have a lot of artistic interests.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I have an active imagination.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I have a rich vocabulary.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I value artistic and creative experiences.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I am inventive.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I am quick to understand things.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	I use difficult words.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    2: {
      title: "Conscientiousness",
      questions: [
        {
          questionText: "1.	I am extremely careful.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I am reliable in doing my work.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3.	I am organized.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I am diligent.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I stick to the task until it is finished.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I do things efficiently.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I prefer routine work. ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I am brainy and enjoy thinking profoundly.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I make plans and follow through with them.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	I am not easily distracted.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    3: {
      title: "Extroversion",
      questions: [
        {
          questionText: "1.	I am full of energy.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I am a party person.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3.	I generate a lot of enthusiasm.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I tend to be loud.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I start conversations.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I have a confident personality.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I am warm and friendly.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I like to reflect and ponder different ideas.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I am sociable.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	I am talkative.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    4: {
      title: "Agreeableness",
      questions: [
        {
          questionText: "1.	I am helpful to others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I avoid arguments with others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3.	I have a forgiving nature.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I am considerate and kind to almost everyone.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I like to cooperate with others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I am rarely rude to others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I am generally trusting.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I do not look for fault in others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I sympathize with others’ feelings.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	I make people feel at ease.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    5: {
      title: "Neuroticism",
      questions: [
        {
          questionText: "1.	I get stressed out easily.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I am easily disturbed.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3.	I get irritated easily.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I have frequent mood swings.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I worry a lot.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I can be moody.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I am shy and reserved.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I get nervous easily.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I do not remain calm in high-pressure situations.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	I get anxious in stressful situations.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
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

  let totalScore = 0;
  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }

  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";
  const testType = "Personality";
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
    <div className="container bg-white min-h-screen">
      {!isTestCompleted && (
        <>
          <div className="hidden md:flex">
          {/* <img
            src={Ellipse1}
            alt="business"
            className="absolute top-0 left-6 mb-20"
            height="100px"
          />
          <img
            src={Ellipse2}
            alt="business"
            width="700px"
            height="400px"
            className="absolute top-0 left-80"
            style={{ marginBottom: 40 }}
          />
          <img src={Ellipse3} alt="bbbnn" width="1600px" height="400px" /> */}
           <img src={purple} alt="headerimg" className="w-full" style={{ height: '350px' }}></img>
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
              <strong>Disagree: </strong>Assign a rating of 1 if the statement
              applies to you.
            </p>
            <p className="text-left font-semibold">
              <strong>Slightly Disagree: </strong> Assign a rating of 2 if the statement
              applies to you.
            </p>
            <p className="text-left font-semibold">
              <strong>Neutral: </strong> Assign a rating of 3 if the statement
              applies to you.
            </p>
            <p className="text-left font-semibold">
              <strong>Slightly Agree: </strong> Assign a rating of 4 if the statement
              applies to you.
            </p>
            <p className="text-left mb-5 font-semibold">
              <strong>Agree: </strong> Assign a rating of 5 if the statement
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

export default TestQuestionsPattern4;

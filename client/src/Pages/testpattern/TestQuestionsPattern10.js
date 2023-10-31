import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import Ellipse1 from "../../images/Ellipse1.png";
// import Ellipse2 from "../../images/Ellipse2.png";
// import Ellipse3 from "../../images/Ellipse3.png";
import purple from "../../images/purple.png";
import { API_BASE_URL } from "../../config";

function TestQuestionsPattern10() {
  const { subtestId } = useParams();
  const id = 10;

  const commonoption = [
    "NOT AT ALL",
    "SOMEWHAT",
    "MODERATELY SO",
    "VERY MUCH SO",
  ];

  const tests = {
    1: {
      title: "Cognitive Anxiety",
      questions: [
        {
          questionText: "1.	I often have racing thoughts when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "2.	I tend to worry excessively about potential mistakes and negative outcomes.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "3.	I frequently doubt my abilities and skills when facing challenging tasks.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "4.	I often fear that my performance won’t meet my own expectations.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "5.	I frequently find it hard to concentrate and focus when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.	I tend to overanalyse situations and events.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "7.	I often have negative thoughts about myself and my capabilities when under pressure.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "8.	I commonly experience self-critical thoughts before important tasks or events.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "9. I tend to dwell on past failures and mistakes.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
    2: {
      title: "Somatic Anxiety",
      questions: [
        {
          questionText:
            "1.	I often experience a racing heart or palpitations when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "2.	I frequently have tense muscles or muscle stiffness when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.	I tend to sweat excessively when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "4.	I often feel a tightness or discomfort in my chest when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "5.	I frequently experience shortness of breath or difficulty in breathing when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "6.	I often have stomach-aches or digestive issues when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.	I tend to tremble or shake when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "8.	I commonly experience headaches or migraines when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "9.	I often notice my hands or body trembling when I’m anxious.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
    3: {
      title: "Self-Confidence",
      questions: [
        {
          questionText:
            "1.	I generally feel confident in my abilities to accomplish tasks.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "2.	I often believe in myself and my capacity to overcome challenges.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "3.	I tend to have a positive self-image and self-esteem.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "4.	I frequently trust my judgment and decision-making skills.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "5.	I generally feel secure in my interactions with others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "6.	I often approach new situations with a sense of confidence.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "7.	I typically maintain a strong belief in my ability to achieve my goals.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "8.	I tend to handle criticism and setbacks with self-confidence.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "9. I usually feel comfortable expressing my opinions and ideas.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
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
  const testType = "Competitive State Anxiety Inventory";
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
              <strong>NOT AT ALL: </strong>Assign a rating of 1.
            </p>
            <p className="text-left font-semibold">
              <strong>SOMEWHAT: </strong> Assign a rating of 2.
            </p>
            <p className="text-left font-semibold">
              <strong>MODERATELY SO: </strong> Assign a rating of 3.
            </p>
            <p className="text-left mb-5 font-semibold">
              <strong>VERY MUCH SO: </strong> Assign a rating of 4.
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

export default TestQuestionsPattern10;

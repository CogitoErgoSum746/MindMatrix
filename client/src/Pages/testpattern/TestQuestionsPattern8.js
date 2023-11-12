import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import mainpurple from "../../images/mainpurple.png";

function TestQuestionsPattern8() {
  const { subtestId } = useParams();
  const id = 8;

  const commonoption = [
    "Strongly Disagree",
    "Somewhat Disagree",
    "Neither Agree nor Disagree",
    "Somewhat Agree",
    "Strongly Agree",
  ];

  const tests = {
    1: {
      title: "Authoritative",
      questions: [
        {
          questionText:
            "1. I enjoy providing clear directions to my team members.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2. I believe that a well-defined plan is crucial for achieving success.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3. I prefer to make decisions promptly to keep projects on track.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "4. I find it important to establish a sense of authority to maintain order in the team.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5. I feel comfortable stepping in as a leader even when there’s uncertainty.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "6. I focus on setting ambitious goals to drive the team’s performance.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7. I believe that my guidance is essential for the team’s success.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "8. I am skilled at motivating others to achieve challenging targets.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    2: {
      title: "Democratic",
      questions: [
        {
          questionText:
            "1. I value input from my peers when making decisions for group projects.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2. I believe that involving everyone in discussions leads to better outcomes.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3. I encourage classmates to share their opinions and ideas during team discussions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "4. I enjoy working collaboratively to make choices that benefit the entire group.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5. I prefer to gather suggestions before finalizing plans for school activities.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "6. I find it important to ensure everyone’s voice is heard during decision-making.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7. I think it’s important to either vote or try to agree as a group when making choices.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "8. I want to make a welcoming place where everyone’s different viewpoints are important.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    3: {
      title: "Facilitative",
      questions: [
        {
          questionText:
            "1. I enjoy bringing people together and encouraging open discussions to solve problems.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2. I often volunteer to help groups work together effectively during class projects.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3. I believe that everyone’s ideas should be valued and considered in decision-making.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "4. I’m good at guiding conversations to ensure that everyone gets a chance to speak.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5. I feel comfortable stepping back and letting others take the lead when appropriate.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "6. I help groups find common ground when there are disagreements or conflicts.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7. I believe that teamwork is about leveraging everyone’s strengths for success.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "8. I often encourage my peers to share their opinions and contribute to group projects.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    4: {
      title: "Situational",
      questions: [
        {
          questionText:
            "1. I adjust my leadership style based on the specific needs and skills of my peers.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2. I believe that different situations require different approaches to leadership.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3. I am comfortable taking charge, when necessary, but I also let others lead when they’re capable.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "4. I consider the strengths and weaknesses of my team members when delegating tasks.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5. I adapt my communication style to match the preferences of my teammates.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "6. I’m open to seeking guidance from others when I’m unsure about the best course of action.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7. I enjoy collaborating with different groups of students and adjusting my role as needed.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "8. I believe that leadership involves being adaptable and willing to learn from various situations.",
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

  // const totalScore = scores.reduce((acc, score) => acc + score, 0);
  let totalScore = 0;
  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }

  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";
  const testType = "Leadership Style";
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
            <h2 className="text-left font-semibold text-xl mb-5">
            Carefully evaluate your degree of agreement or disagreement for each statement.
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

export default TestQuestionsPattern8;

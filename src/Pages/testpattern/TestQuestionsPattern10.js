import React, { useState } from "react";
import { useParams } from "react-router-dom";

function TestQuestionsPattern10() {
  const { subtestId } = useParams();

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

  const handleOptionChange = (optionWeightage, optionIndex) => {
    const newScores = [...scores];
    newScores[questionIndex] = optionWeightage[optionIndex];
    setScores(newScores);
  };

  const handleNextQuestion = () => {
    if (questionIndex < subtest.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Display total score
      setShowScore(true);
    }
  };

  const totalScore = scores.reduce((acc, score) => acc + score, 0);

  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";
  const testType = "Leadership Style";
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
      <h2 className="text-white text-left">Assessment Rating Criteria: </h2>
      <p className="text-white text-left">
        <strong>Strongly Disagree</strong>Assign a rating of 1{" "}
      </p>
      <p className="text-white text-left">
        <strong>Somewhat Disagree</strong> Assign a rating of 2
      </p>
      <p className="text-white text-left">
        <strong>Neither Agree nor Disagree</strong> Assign a rating of 3{" "}
      </p>
      <p className="text-white text-left">
        <strong>Somewhat Agree</strong> Assign a rating of 4{" "}
      </p>
      <p className="text-white text-left">
        <strong>Strongly Agree</strong> Assign a rating of 5
      </p>

      <h1 className="text-2xl font-bold mb-4 text-white">{subtest.title}</h1>
      {showScore ? (
        <div className="text-white">
          <p>Total Score: {totalScore}</p>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg mb-2 text-left text-white">
            {subtest.questions[questionIndex].questionText}
          </p>
          <div className="mt-2 text-left">
            {subtest.questions[questionIndex].options.map(
              (option, optionIndex) => (
                <div key={optionIndex} className="mb-2">
                  <label className="inline-flex justify-items-start">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-white"
                      name={`question-${questionIndex}`}
                      value={optionIndex}
                      onChange={() =>
                        handleOptionChange(
                          subtest.questions[questionIndex].optionWeightage,
                          optionIndex
                        )
                      }
                    />
                    <span className="ml-3 text-white">{option}</span>
                  </label>
                </div>
              )
            )}
          </div>
          <div className="mt-4">
            {questionIndex === subtest.questions.length - 1 ? (
              <button
                onClick={sendTestDataToServer}
                className="bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-lg "
              >
                Submit Test Data
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextQuestion}
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

export default TestQuestionsPattern10;

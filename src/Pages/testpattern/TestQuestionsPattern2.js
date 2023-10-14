import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Ellipse1 from "../../images/Ellipse1.png"; 
import Ellipse2 from '../../images/Ellipse2.png';
import Ellipse3 from "../../images/Ellipse3.png";

function TestQuestionsPattern2() {
  const { subtestId } = useParams();

  const commonoption = [
    "NO, the statement is not at all like me.",
    "The statement is a little like me.",
    "The statement is somewhat like me.",
    "The statement is a lot like me.",
    "YES, the statement is me.",
  ];

  const tests = {
    1: {
      title: "Linguistic",
      questions: [
        {
          questionText:
            "1.	I can use lots of different words to express myself.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I feel comfortable working with language and words.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I enjoy crosswords and other word games like Scrabble.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "4.	I tend to remember things exactly as they are said to me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5.	I enjoy participating in debates and/or discussions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I find it easy to explain things to others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7.	I enjoy keeping a written journal and/or writing stories and articles.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I like to read a lot.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    2: {
      title: "Logical/Mathematical",
      questions: [
        {
          questionText:
            "1.	I work best in an organised work area. ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I enjoy maths and using numbers.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I keep a ‘things to do’ list.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I enjoy playing brainteasers and logic puzzles.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I like to ask ‘why’ questions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I work best when I have a day planner or timetable.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7. I quickly understand how cause and effect are related.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I always do things one step at a time.",
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
  const testType = "Multiple Intelligence";
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
    <div className="container bg-white min-h-screen ">
       <img src={Ellipse1} alt="business" className="absolute top-0 left-6 mb-20" height="100px"></img>
      <img src={Ellipse2} alt="business" width="700px" height="400px" className="absolute top-0 left-80" style={{marginBottom: 40}}></img>
      <img src={Ellipse3} alt="bbbnn" width="1600px" height="400px"></img>
      <div className="p-10">
      <h2 className="text-left mt-70 font-bold text-2xl mb-10">Assessment Rating Criteria: </h2>
      <p className="text-left font-semibold mb-5">
        Please evaluate each statement according to how often it applies to your
        situation. Use the following scale:
      </p>
      <p className="text-left font-semibold">
        <strong>Never: </strong>Assign a rating of 1 if the statement rarely
        applies to you.{" "}
      </p>
      <p className="text-left font-semibold">
        <strong>Sometimes:</strong> Assign a rating of 2 if the statement
        applies occasionally.{" "}
      </p>
      <p className="text-left font-semibold">
        <strong>Usually:</strong> Assign a rating of 3 if the statement applies
        frequently.{" "}
      </p>
      <p className="text-left mb-5 font-semibold">
        <strong>Always: </strong> Assign a rating of 4 if the statement
        consistently applies to you.{" "}
      </p>
    <h1 className="text-4xl font-bold text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{subtest.title}</h1>
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
                      className="form-radio h-5 w-5 "
                      name={`question-${questionIndex}`}
                      value={optionIndex}
                      onChange={() =>
                        handleOptionChange(
                          subtest.questions[questionIndex].optionWeightage,
                          optionIndex
                        )
                      }
                    />
                  
                    <span className="ml-3 bg-gray-300 p-3 block" style={{width:"300px"}}>{option}</span>
  
                  </label>
                </div>
              )
            )}
          </div>
          <div className="mt-4">
          {questionIndex === subtest.questions.length - 1
                ? <button onClick={sendTestDataToServer} className='bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl'>Submit Test Data</button>
                :   <button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 px-12 py-2 rounded-full font-semibold text-xl"
                onClick={handleNextQuestion}
              >Next Question {'>'}</button>}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default TestQuestionsPattern2;

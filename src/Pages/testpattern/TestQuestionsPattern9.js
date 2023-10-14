import React, { useState } from "react";
import { useParams } from "react-router-dom";

function TestQuestionsPattern9() {
  const { subtestId } = useParams();

  const commonoption = [
    "Rarely",
    "Occasionally",
    "Frequently",
    "Often",
    "Always"
  
  ];

  const tests = {
    1: {
      title: "Cyber Dependency",
      questions: [
        {
          questionText:
            "1.	I find that I stay online longer than I intended.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "2.	I neglect household chores to spend more time online.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText:
            "3.	I prioritize online excitement over spending time with my family.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "4.	I form new relationships with fellow online users.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5.	Others in my life complain to me about the amount of time I spend online.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	My grades or school work suffer because of the amount of time I spend online.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7.	I check my messages/email before something else that I need to do.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	My study performance or productivity suffers because of the Internet.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I become defensive or secretive when anyone asks me what I do online.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10. I replace disturbing thoughts about my life with comforting thoughts of the Internet.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "11. I catch myself looking forward to going online again.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "12. I fear that life without the Internet would be boring, empty, and joyless.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "13. I snap, yell, or act annoyed if someone bothers me while I am online.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "14. I lose sleep due to being online.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "15. I find myself thinking about the Internet or daydreaming about being online when I’m not connected.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "16. I find myself saying “just a few more minutes” when online.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "17. My attempts to reduce my online time end in failure.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "18. I attempt to hide the duration of my online activities.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "19. I choose to spend more time online instead of going out with others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "20. I feel depressed, moody, or nervous when I am offline, which goes away once I am back online.",
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
  const testType = "Cyber Dependency Test";
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
       <h2 className='text-white text-left'>Assessment Rating Criteria: </h2>
    <p className='text-white text-left'>Please evaluate each statement according to how often it applies to your situation. Use the following scale:</p>
    <p className='text-white text-left'><strong>Strongly Disagree</strong>Assign a rating of 1 </p>
    <p className='text-white text-left'><strong>Somewhat Disagree</strong> Assign a rating of 2</p>
    <p className='text-white text-left'><strong>Neither Agree nor Disagree</strong> Assign a rating of 3  </p>
    <p className='text-white text-left'><strong>Somewhat Agree</strong> Assign a rating of 4  </p>
    <p className='text-white text-left'><strong>Strongly Agree</strong> Assign a rating of 5</p>
   
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
          
              {questionIndex === subtest.questions.length - 1
                ? <button onClick={sendTestDataToServer} className='bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-lg '>Submit Test Data</button>
                :   <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextQuestion}
              >Next</button>}
          </div>
        </div>
      )}

    </div>
  );
}

export default TestQuestionsPattern9;

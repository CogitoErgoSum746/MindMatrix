import React, { useState} from "react";
import { useParams } from "react-router-dom";

function TestQuestionsPattern3() {
  const { subtestId } = useParams();

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
            "11. When given a task or assignment, you don’t always need to know why it’s important.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "12. You get a great deal of pleasure in creating to-do lists and checking each item off as it is accomplished.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "13. You would prefer puzzles over getting messy with clay.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "14. When shopping for a new dress, you would probably look at quality ratings over the looks of the dress.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "15. When travelling, you like to have your journey completely planned down to the last detail.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "16. Because you respond to verbal cues, you prefer lectures to textbooks.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText: "17. You are good at remembering names.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "18. Your study room is neatly organized with a place for everything. You spend little time looking for things.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "19. When trying a new software program, you prefer to use the instruction manual.",
          options: commonoption,
          optionWeightage: [1, 0],
        },
        {
          questionText:
            "20. You are almost always on time or early for meetings and appointments.",
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
  const testType = "Left-Right Brain Dominance";
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
        Please evaluate each statement according to how often it applies to your
        situation. Use the following scale:
      </p>
      <p className="text-white text-left">
        <strong>Yes: </strong>Assign a rating of 1 if the answer is yes.
      </p>
      <p className="text-white text-left">
        <strong>No:</strong> Assign a rating of 0 if the answer is no.
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

export default TestQuestionsPattern3;

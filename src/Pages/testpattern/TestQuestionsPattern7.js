import React, { useState } from "react";
import { useParams } from "react-router-dom";

function TestQuestionsPattern7() {
  const { subtestId } = useParams();

  const commonoption = [
    "Strongly Disagree",
    "Somewhat Disagree",
    "Neither Agree nor Disagree",
    "Somewhat Agree",
    "Strongly Agree"
  
  ];

  const tests = {
    1: {
      title: "Leadership",
      questions: [
        {
          questionText:
            "1.	Delegating work to others comes easily to me",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "2.	Communicating clearly with others is easy for me.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText:
            "3.	I enjoy engaging with other people on an interpersonal level.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "4.	I am proactive in offering constructive criticism.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5.	I place a high value on treating others fairly.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	Seeking advice from others is something I do often.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7.	Change energizes me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	Problem-solving is one of my strengths.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I am comfortable with being a role model.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	Working as part of a team energizes me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "11.	I am comfortable coaching and mentoring others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "12.	Directing the work of others is comfortable for me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "13.	I can set and accomplish goals.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "14.	I enjoy implementing new methods and strategies.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "15.	I am proactive in providing praise to others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "16.	I am comfortable admitting and correcting my own mistakes.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "17.	I have strong conflict management skills.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "18.	Diversity and inclusion are important to me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "19.	I enjoy listening to what others have to say.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "20.	When I see problems, I immediately look for possible solutions.",
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
  const testType = "Leadership Skills and Styles Test";
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

export default TestQuestionsPattern7;

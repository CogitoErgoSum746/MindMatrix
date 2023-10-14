import React, { useState } from "react";
import { useParams } from "react-router-dom";

function TestQuestionsPattern8() {
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
      title: "Authoritative",
      questions: [
        {
          questionText:
            "1. I enjoy providing clear directions to my team members.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2. I believe that a well-defined plan is crucial for achieving success.",
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
          questionText: "6. I focus on setting ambitious goals to drive the team’s performance.",
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
          questionText: "8. I am skilled at motivating others to achieve challenging targets.",
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
          optionWeightage: [1,2,3,4,5],
        },
        {
          questionText:
            "2. I believe that involving everyone in discussions leads to better outcomes.",
          options: commonoption,
          optionWeightage: [1,2,3,4,5],
        },
        {
          questionText:
            "3. I encourage classmates to share their opinions and ideas during team discussions.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "4. I enjoy working collaboratively to make choices that benefit the entire group.",
          options: commonoption,
          optionWeightage: [1,2,3,4,5],
        },
        {
          questionText: "5. I prefer to gather suggestions before finalizing plans for school activities.",
          options: commonoption,
          optionWeightage: [1,2,3,4,5],
        },
        {
          questionText: "6. I find it important to ensure everyone’s voice is heard during decision-making.",
          options: commonoption,
          optionWeightage: [1,2,3,4,5],
        },
        {
          questionText: "7. I think it’s important to either vote or try to agree as a group when making choices.",
          options: commonoption,
          optionWeightage: [1,2,3,4,5],
        },
        {
          questionText: "8. I want to make a welcoming place where everyone’s different viewpoints are important.",
          options: commonoption,
          optionWeightage: [1,2,3,4,5],
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
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText:
            "2. I often volunteer to help groups work together effectively during class projects.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText:
            "3. I believe that everyone’s ideas should be valued and considered in decision-making.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "4. I’m good at guiding conversations to ensure that everyone gets a chance to speak.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "5. I feel comfortable stepping back and letting others take the lead when appropriate.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "6. I help groups find common ground when there are disagreements or conflicts.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "7. I believe that teamwork is about leveraging everyone’s strengths for success.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "8. I often encourage my peers to share their opinions and contribute to group projects.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
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
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText:
            "2. I believe that different situations require different approaches to leadership.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText:
            "3. I am comfortable taking charge, when necessary, but I also let others lead when they’re capable.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "4. I consider the strengths and weaknesses of my team members when delegating tasks.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "5. I adapt my communication style to match the preferences of my teammates.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "6. I’m open to seeking guidance from others when I’m unsure about the best course of action.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "7. I enjoy collaborating with different groups of students and adjusting my role as needed.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
        },
        {
          questionText: "8. I believe that leadership involves being adaptable and willing to learn from various situations.",
          options: commonoption,
          optionWeightage: [1, 2, 3,4,5],
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
       <h2 className='text-white text-left'>Assessment Rating Criteria: </h2>
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

export default TestQuestionsPattern8;

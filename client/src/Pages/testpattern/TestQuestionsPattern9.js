import React, { useState ,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import Ellipse1 from "../../images/Ellipse1.png"; 
import Ellipse2 from '../../images/Ellipse2.png';
import Ellipse3 from "../../images/Ellipse3.png";
import { API_BASE_URL } from "../../config";

function TestQuestionsPattern9() {
  const { subtestId } = useParams();
  const id=9;

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
  const [isTestCompleted, setIsTestCompleted] = useState(false); 

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

  // const totalScore = scores.reduce((acc, score) => acc + score, 0);
  let totalScore = 0;
  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }


  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";
  const testType = "Cyber Dependency";
  const score = totalScore;

  useEffect(() => {
    const fetchTestScores = async () => {
      try {      
            const authtoken = localStorage.getItem("authtoken");  
            console.log(authtoken)
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
          console.log(response)
          if (response.ok) {
            console.log(response)
            const score = await response.json();
  
            setScores(score);
            console.log(score);
            
  
           if(score){
            setIsTestCompleted(true);
           }
            

          } 
          else {
            console.error("Failed to fetch test scores");
          }
      } catch (error) {
        console.error("Error fetching test scores:", error);
      }
    };
  
    if (subCategory &&  testType) {
      fetchTestScores();
    }
  }, [subCategory, testType]);

  const sendTestDataToServer = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(
        `${API_BASE_URL}/user/testResultToAPI`,
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
    <div className="container bg-white min-h-screen">
    {   !isTestCompleted && (
      <>
<img src={Ellipse1} alt="business" className="absolute top-0 left-6 mb-20" height="100px" />
<img src={Ellipse2} alt="business" width="700px" height="400px" className="absolute top-0 left-80" style={{ marginBottom: 40 }} />
<img src={Ellipse3} alt="bbbnn" width="1600px" height="400px" />
</>
) }
{ !isTestCompleted && (
  <>
<div className="p-10">
  <h2 className="text-left mt-70 font-bold text-2xl mb-10">Assessment Rating Criteria: </h2>
  <p className="text-left font-semibold mb-5">
    Please evaluate each statement according to how often it applies to your situation. Use the following scale:
  </p>
  <p className="text-left font-semibold">
    <strong>Never: </strong>Assign a rating of 1 if the statement rarely applies to you.
  </p>
  <p className="text-left font-semibold">
    <strong>Sometimes:</strong> Assign a rating of 2 if the statement applies occasionally.
  </p>
  <p className="text-left font-semibold">
    <strong>Usually:</strong> Assign a rating of 3 if the statement applies frequently.
  </p>
  <p className="text-left mb-5 font-semibold">
    <strong>Always: </strong> Assign a rating of 4 if the statement consistently applies to you.
  </p>
  </div>
  </>
    )}
  {/* Conditionally render the "Test completed" message */}
  <div className="w-full h-full flex items-center justify-center">
{isTestCompleted && (
  <div className="bg-white shadow-md p-4 rounded-lg mt-20" style={{ width: 400, height: 300 }}>
    <p className="text-2xl font-semibold text-green-600 mb-5 text-center">Test completed!</p>
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
            {subtest.questions[questionIndex].options.map((option, optionIndex) => (
              <div key={optionIndex} className="mb-2">
                <label className="inline-flex justify-items-start">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    onChange={() =>
                      handleOptionChange(
                        subtest.questions[questionIndex].optionWeightage,
                        optionIndex
                      )
                    }
                  />
                  <span className="ml-3 bg-gray-300 p-3 block" style={{ width: "300px" }}>
                    {option}
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className="mt-4">
            {questionIndex === subtest.questions.length - 1 ? (
              <Link to={`/test/${id}`}>
                <button onClick={sendTestDataToServer} className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl">
                  Submit Test Data
                </button>
              </Link>
            ) : (
              <button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 px-12 py-2 rounded-full font-semibold text-xl"
                onClick={handleNextQuestion}
              >
                Next Question {'>'}
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

export default TestQuestionsPattern9;

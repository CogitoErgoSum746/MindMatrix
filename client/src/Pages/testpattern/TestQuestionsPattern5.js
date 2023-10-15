import React, { useState ,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import Ellipse1 from "../../images/Ellipse1.png"; 
import Ellipse2 from '../../images/Ellipse2.png';
import Ellipse3 from "../../images/Ellipse3.png";
import { API_BASE_URL } from "../../config";

function TestQuestionsPattern5() {
  const { subtestId } = useParams();
const id=5;
  const commonoption = [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Always"
  
  ];
  const tests = {
    1: {
      title: "Self-Awareness",
      questions: [
        {
          questionText:
            "1.	I realise immediately when I lose my temper.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I know when I am happy.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	When I’m anxious, I usually know why.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "4.	I usually recognise when I am stressed.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5.	When I am being ‘emotional’ I am aware of this.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I always know when I’m being unreasonable.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7.	Awareness of my own emotions is very important to me at all times.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I can tell if someone has upset or annoyed me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I can let anger ‘go’ quickly so that it no longer affects me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10. I know what makes me happy.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    2: {
      title: "Managing Emotions",
      questions: [
        {
          questionText:
            "1.	I can ‘reframe’ bad situations quickly.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I do not wear my ‘heart on my sleeve’.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	Others can rarely tell what kind of mood I am in.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I rarely ‘fly off the handle’ at other people.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	Difficult people do not annoy me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I can consciously alter my frame of mind or mood.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I do not let stressful situations or people affect me once I have left work.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I rarely worry about work or life in general.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I can suppress my emotions when I need to.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10. Others often do not know how I am feeling about things.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    3: {
      title: "Motivating Oneself",
      questions: [
        {
          questionText:
            "1.	I can always motivate myself to do difficult tasks.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I am usually able to prioritise important activities at work and get on with them.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I always meet deadlines.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I never waste time.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I tell the truth or say exactly what I think ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I believe you should do the difficult things first.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I believe in the value of delayed gratification.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I believe in ‘Action this Day’.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I can always motivate myself even when I feel low.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10. Motivation has been the key to my success.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    4: {
      title: "Empathy",
      questions: [
        {
          questionText:
            "1.	I am always able to see things from the other person’s viewpoint.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I am excellent at empathising with someone else’s problem.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I can tell if someone is not happy with me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I can tell if a team of people are not getting along with each other.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I can usually understand why people are being difficult towards me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	Other individuals are not ‘difficult’ just ‘different’.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I can understand if I am being unreasonable.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I can understand why my actions sometimes offend others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I can sometimes see things from others’ points of view.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10. Reasons for disagreements are always clear to me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    5: {
      title: "Social Skill",
      questions: [
        {
          questionText:
            "1.	I am an excellent listener.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I never interrupt other people’s conversations.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I am good at adapting and mixing with a variety of people.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	People are the most interesting thing in life for me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I enjoy meeting new individuals and learning what interests and motivates them.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I need a variety of work colleagues to make my job interesting.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I like to ask questions to find out what is important to people.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I view working with challenging individuals as an opportunity to gain their cooperation.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I am good at reconciling differences with other people.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10. I generally build solid relationships with those I work with.",
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
  const testType = "Emotional Intelligence";
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

export default TestQuestionsPattern5;

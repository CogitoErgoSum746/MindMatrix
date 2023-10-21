import React, { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import Ellipse1 from "../../images/Ellipse1.png"; 
import Ellipse2 from '../../images/Ellipse2.png';
import Ellipse3 from "../../images/Ellipse3.png";
import { API_BASE_URL } from "../../config";

function TestQuestionsPattern2() {
  const { subtestId } = useParams();
 const id=2;
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
      title: "Logical",
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
    3: {
      title: "Spatial",
      questions: [
        {
          questionText:
            "1.	I understand colour combinations and what colours work well together. ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I enjoy solving jigsaw, maze and/or other visual puzzles.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I read and understand charts and maps easily.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I have a good sense of direction and can find my way around well.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I like to watch the scenes and actions in movies.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I am observant. I often see things that others miss.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I can predict moves and outcomes in a game plan (i.e., hockey sense, chess sense).",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	When I remember things, I can visualize scenes in my thoughts",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    4: {
      title: "Interpersonal",
      questions: [
        {
          questionText:
            "1.	I can sense the moods and feelings of others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I perform best when interacting with people.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I enjoy team sports rather than individual sports",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I can sort out arguments between friends",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I prefer group activities rather than ones I do alone.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I enjoy learning about different cultures.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I enjoy social events like parties",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I enjoy sharing my ideas and feelings with others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    5: {
      title: "Musical",
      questions: [
        {
          questionText:
            "1.	I often play music in my mind.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	My mood changes when I listen to music.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	It is easy for me to follow the beat of music.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I can pick out different instruments when I listen to a piece of music.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I keep time when music is playing.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I can hear an off-key note.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I find it easy to engage in musical activities.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I have a good memory of music.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    6: {
      title: "Naturalistic",
      questions: [
        {
          questionText:
            "1.	Pollution makes me angry.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I notice similarities and differences in trees, flowers and other things in nature.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I feel very strongly about protecting the environment.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I enjoy watching nature programs on television.   ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I engage in ‘clean-up days.’.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I like planting and caring for a garden.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I enjoy fishing, bushwalking and bird-watching.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	When I leave school, I hope to work with plants and animals.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    7: {
      title: "Intrapersonal",
      questions: [
        {
          questionText:
            "1.	I like to move, tap or fidget when sitting.  ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I am fascinated by how things feel, and I frequently touch and explore objects and examine their texture.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I enjoy participating in active sports.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I am well co-ordinated.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I like working with my hands.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I prefer to be physically involved rather than sitting and watching.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I understand best by doing (i.e., touching, moving and interacting).",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I like to think through problems while I walk or run.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    8: {
      title: "Kinesthetic",
      questions: [
        {
          questionText:
            "1.	I know myself well.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I have a few close friends.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I have strong opinions about controversial issues.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I work best when the activity is self-paced.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I am not easily influenced by other people.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I have a good understanding of my feelings and how I will react to situations.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I often raise questions concerning values and beliefs.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I enjoy working on my own.",
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
  const testType = "Multiple Intelligence";
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

export default TestQuestionsPattern2;

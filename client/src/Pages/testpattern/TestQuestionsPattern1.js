import React, { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import Ellipse1 from "../../images/Ellipse1.png"; 
import Ellipse2 from '../../images/Ellipse2.png';
import Ellipse3 from "../../images/Ellipse3.png";
import { API_BASE_URL } from "../../config";

function TestQuestionsPattern1() {
  const { subtestId } = useParams();
  const id=1;
  const commonoption = [
    "Never",
    "Sometimes",
    "Usually",
    "Always",
  ];


  const tests = {
    1: {
      title: "Time Management and Procrastination",
      questions: [
        {
          questionText: "1.I'm always on time for classes and assemblies.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I devote sufficient study time to each course.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.I plan study times with clear goals.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I prepare a “to-do” list daily.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I avoid things that mess up my planned schedule.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "6.I schedule my study sessions during my optimal alertness periods.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "7.At the beginning of the term itself I set daily plans for activities and studying.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "8.I proactively tackle significant course projects well before the deadline. ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
    2: {
      title: "Concentration and Memory",
      questions: [
        {
          questionText:
            "1.I make it a habit to study in a specific place at a set time.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "2.My study place is free from auditory and visual distractions distractions, ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "3.I can focus for at least 20 minutes without getting distracted.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "4.I am confident with the level of concentration I am able to maintain.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I fully grasp the material I wish to remember.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "6.I study with the intention of remembering what I learn.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "7.I reinforce my learning by speaking the learning materials aloud.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I can easily remember the things I've studied.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
    3: {
      title: "Study Aids and Note-Taking",
      questions: [
        {
          questionText:
            "1.I plan ahead for the utilization of my notes while I'm in the process of taking them.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "2.I grasp the lecture and class discussion and jot down notes.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "3.I arrange my notes in a meaningful way, like making an outline.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I review and enhance my notes systematically.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I take notes on additional readings.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I have a method for marking my textbooks.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.While reading, I underline important parts.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I write notes directly in my book while reading.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
    4: {
      title: "Test Strategies and Test Anxiety",
      questions: [
        {
          questionText:
            "1.I find out what the exam will cover and how it's graded.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I feel prepared and confident for the exam.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "3.In my exam preparation, I make an effort to imagine possible test questions ",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "4.I make sure to understand exam questions before answering.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I carefully follow instructions during exams.",
          options: ["Never", "Sometimes", "Usually", "Always"],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I get a good night's sleep before scheduled exams.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I stay calm and remember what I know during exams.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I know how to prepare for different types of tests.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
    5: {
      title: "Organizing and Processing Information",
      questions: [
        {
          questionText:
            "1.During my reading, I possess the ability to easily differentiate between important and unimportant points.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I divide assignments into smaller, doable tasks.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "3.I think critically while studying, not just accepting information.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I connect what I learn in different courses.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "5.I organize facts systematically for better understanding.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "6.I use questions to help me understand what I'm studying.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I try to find the best method to complete tasks.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I focus on the main point to solve problems.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
    6: {
      title: "Motivation and Attitude",
      questions: [
        {
          questionText:
            "1.If the opportunity arises, I choose to occupy a seat near the front of the classroom.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I am attentive during classes.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "3.I ask the teacher questions when I need to understand better.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "4.I offer answers when the teacher asks questions in class.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I participate in meaningful class discussions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I attend class regularly.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I take the lead in group activities.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "8.I use study techniques that make the material to be studied interesting to me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
    7: {
      title: "Reading and Selecting the Main Idea",
      questions: [
        {
          questionText: "1.I review each chapter before I begin reading.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "2.I stick to the author's structure to understand better.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "3.I review reading material multiple times during a semester.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "4.When studying a topic, I summarize it in my own words.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I am confident in my reading speed.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I search for meanings of unfamiliar parts.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I am content with my reading skills.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I concentrate on the main point while reading.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
    8: {
      title: "Writing",
      questions: [
        {
          questionText:
            "1.I am able to effectively communicate my thoughts in writing.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "2.I quickly and spontaneously write drafts from my notes.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "3.I give myself a day's break from a written assignment and then rewrite it.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I check for grammatical errors.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I seek feedback for better writing.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "6.I am comfortable using library resources for research.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText:
            "7.I am able to narrow a topic for an essay, research paper, etc.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I allocate ample time for research and writing.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4],
        },
      ],
    },
  };




  const subtestIdInt = parseInt(subtestId);
  const subtest = tests[subtestIdInt];

  // const subCategoryName=subtest.title;
  // console.log(subCategoryName)


  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState(Array(subtest.questions.length).fill(0));
  // const [scores, setScores] = useState(subtest.questions.map(() => 0));
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

let totalScore = 0;
for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
}


  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";

  const testType = "Study Skills Profile Assessment";
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

export default TestQuestionsPattern1;

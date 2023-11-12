import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import mainpurple from "../../images/mainpurple.png";

function TestQuestionsPattern18() {
  const { subtestId } = useParams();
  const id = 18;

  const commonoption = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ];

  const tests = {
    1: {
      title: "Resilience",
      questions: [
        {
          questionText: "1.	I tend to bounce back quickly from setbacks and disappointments.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	When faced with challenges, I believe that I can overcome them with time and effort.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3.	I often find the silver lining in difficult situations and focus on the positive aspects.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I am usually able to maintain my composure even in stressful circumstances.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I have a tendency to learn valuable lessons from past failures and use them to my advantage.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I believe that challenges are opportunities for growth and development",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I have a network of friends or support systems that I can rely on when times get tough.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I can adapt and adjust my plans when faced with unexpected changes.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I often visualize a positive outcome even when things appear bleak.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	I believe in my ability to handle whatever comes my way, no matter how difficult.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    2: {
      title: "Outlook",
      questions: [
        {
          questionText: "1.	I tend to see the positive side of situations, even in challenging times.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	When faced with setbacks, I focus on finding solutions rather than dwelling on problems.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3.	I believe that difficulties are temporary and that things will eventually improve.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I often express gratitude and appreciation for the good things in my life.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I find it easy to let go of negative emotions and move forward.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I approach challenges with a sense of curiosity and openness to learning.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I tend to view failures as opportunities for growth and self-improvement.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I am optimistic about the future and believe that good things are ahead.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I often encourage others to see the positive aspects of their experiences.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	I maintain a hopeful attitude even when facing uncertainty or challenges.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    3: {
      title: "Social Intuition",
      questions: [
        {
          questionText: "1.	I am often able to accurately read people's emotions even when they don't express them openly.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I tend to pick up on subtle social cues and nonverbal signals during conversations.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3.	I find it easy to understand the unspoken feelings and thoughts of others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I can often anticipate how someone is likely to react in a given situation.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I'm good at noticing changes in people's moods or attitudes, even if they don't mention them.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: `6.	I often have a "gut feeling" about the intentions or emotions of others, and it's usually accurate.`,
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I'm skilled at understanding the dynamics and relationships within a group, even without direct information.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I find it easy to put myself in someone else's shoes and see things from their perspective.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I am often able to sense when someone is not being truthful or is hiding something.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	I can accurately predict social outcomes in various situations based on my intuition.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    4: {
      title: "Self-Awareness",
      questions: [
        {
          questionText: "1.	I am able to recognize my emotions as they arise, even if they are subtle.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2.	I frequently take the time to reflect on my thoughts and feelings..",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3.	I am comfortable discussing my strengths and weaknesses with others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	I often seek feedback from others to gain insights into my behaviours and emotions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5.	I can identify patterns in my emotions and behaviours over time.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6.	I am aware of how my emotions influence my decisions and actions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7.	I am in tune with my body's physical responses to different emotions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8.	I am open to exploring new aspects of my personality and emotions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9.	I find it easy to articulate my feelings and emotions to others.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10.	I am mindful of my emotional state and can describe it accurately.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    5: {
      title: "Sensitivity to Context",
      questions: [
        {
          questionText: "1. I tend to adjust my communication style based on the social or cultural setting.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2. I'm attentive to the emotions and needs of others, adapting my behaviour accordingly.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3. I often consider the context and environment before expressing my opinions or emotions.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4. I find it important to tailor my actions to match the expectations of the situation.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5. I'm skilled at picking up on subtle social cues and adjusting my responses accordingly.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6. I often find myself adapting to different social dynamics in various settings.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7. I'm sensitive to the mood of a room or group and adapt my behaviour accordingly.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8. I adjust my tone and body language based on the cultural norms of the people I'm interacting with.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9. I'm good at understanding unspoken expectations and adapting to them.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10. I often change my behavior to fit the social context, even if it's not my natural inclination.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        }
      ],
    },
    6: {
      title: "Attention",
      questions: [
        {
          questionText: "1. I find it challenging to focus on a single task for an extended period of time.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "2. I often get distracted by external stimuli when trying to concentrate on something.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "3. I tend to get lost in my thoughts, sometimes losing track of what's happening around me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4. I am skilled at tuning out distractions and maintaining my focus on a specific task.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "5. I prefer to have a quiet environment when I need to concentrate on something important.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "6. I have a tendency to switch between tasks frequently, even when working on something important.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "7. I find it easy to immerse myself in a task, shutting out distractions effectively.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "8. I often catch myself daydreaming or letting my mind wander during tasks.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "9. I feel most productive when I can concentrate deeply on a single task at a time.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "10. I struggle to maintain my focus on tasks that I don't find interesting or engaging.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        }
      ],
    },
  };
  const subtestIdInt = parseInt(subtestId);
  const subtest = tests[subtestIdInt];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState(Array(subtest.questions.length).fill(0));
  const [showScore, setShowScore] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionWeightage, optionIndex) => {
    setSelectedOption(optionIndex);
    const newScores = [...scores];
    newScores[questionIndex] = optionWeightage[optionIndex];
    setScores(newScores);
  };
  

  const handleNextQuestion = () => {
    if (questionIndex < subtest.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null);
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
  const testType = "Emotional Styles";
  const score = totalScore;

  useEffect(() => {
    const fetchTestScores = async () => {
      try {
        const authtoken = localStorage.getItem("authtoken");
        console.log(authtoken);
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
        console.log(response);
        if (response.ok) {
          console.log(response);
          const score = await response.json();

          setScores(score);
          console.log(score);

          if (score) {
            setIsTestCompleted(true);
          }
        } else {
          console.error("Failed to fetch test scores");
        }
      } catch (error) {
        console.error("Error fetching test scores:", error);
      }
    };

    if (subCategory && testType) {
      fetchTestScores();
    }
  }, [subCategory, testType]);

  const sendTestDataToServer = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(`${API_BASE_URL}/user/testResultToAPI`, {
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
      });

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
    <div className="bg-white min-h-screen">
      {!isTestCompleted && (
        <>
          <div className="relative">
          <img
            src={mainpurple}
            alt="bbbnn"
            className="md:min-w-full md:w-full lg:h-80 md:h-30 sm:h-30"
          />

          <div className="flex justify-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white absolute top-1/3 lg:left-1/3 text-left md:text-justify font-['Inter'] uppercase">
              GET ALL YOUR <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-clip text text-black space-y-2 font-['Inter'] uppercase leading-10">
                PSYCHOMETRIC
              </span>{" "}
              TESTS
              <br />
              HERE
            </h1>
          </div>
        </div>
        </>
      )}
      {!isTestCompleted && (
        <>
          <div className="p-10">
            <h2 className="text-left font-semibold text-xl mb-5">
            Read each statement carefully and select the response that best reflects your behaviour and attitudes.
            </h2>
          </div>
        </>
      )}
      {/* Conditionally render the "Test completed" message */}
      <div className="w-full h-full flex items-center justify-center">
        {isTestCompleted && (
          <div
            className="bg-white shadow-md p-4 rounded-lg mt-20"
            style={{ width: 400, height: 300 }}
          >
            <p className="text-2xl font-semibold text-green-600 mb-5 text-center">
              Test completed!
            </p>
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
                {subtest.questions[questionIndex].options.map(
                  (option, optionIndex) => (
                    <div key={optionIndex} className="mb-2">
                      <label className="inline-flex justify-items-start">
                        <input
                          type="radio"
                          className="form-radio h-5 w-5"
                          name={`question-${questionIndex}`}
                          value={optionIndex}
                          checked={selectedOption === optionIndex}
                          onChange={() =>
                            handleOptionChange(
                              subtest.questions[questionIndex].optionWeightage,
                              optionIndex
                            )
                          }
                        />
                        <span
                          className="ml-3 bg-gray-300 p-3 block"
                          style={{ width: "300px" }}
                        >
                          {option}
                        </span>
                      </label>
                    </div>
                  )
                )}
              </div>
              <div className="mt-4">
                {selectedOption !== null ? (
                  questionIndex === subtest.questions.length - 1 ? (
                    <Link to={`/test/${id}`}>
                      <button
                        onClick={sendTestDataToServer}
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl"
                      >
                        Submit Test Data
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 px-12 py-2 rounded-full font-semibold text-xl"
                      onClick={handleNextQuestion}
                    >
                      Next Question {">"}
                    </button>
                  )
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 p-2 rounded-full font-semibold text-xl"
                  >
                    Next Question {">"}
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

export default TestQuestionsPattern18;

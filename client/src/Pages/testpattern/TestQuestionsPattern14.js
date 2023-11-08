import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import mainpurple from "../../images/mainpurple.png";

function TestQuestionsPattern14() {
  const { subtestId } = useParams();
  const id = 14;

  const commonoption = [
    "Never",
    "Rarely",
    "Sometime",
    "Most of the time",
    "All of the time",
  ];

  const tests = {
    1: {
      title: "Authoritarian",
      questions: [
        {
          questionText: "1.	I want my child to follow my instructions because I am the authority to decide what to do or what not to do.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I have little patience to tolerate any misbehaviour of my child or to listen to the excuses in any kind of mistakes.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I strongly believe that my child’s future is in my hand and so there is a strict time table for my child to follow.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	The punishment I give to my child depends upon my mood.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5.	Whenever my child shows disobedience, I scold and criticise him/her with bursting anger.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "6.	I believe that only through punishment a child can be corrected and I also do not like to give any financial freedom to my child.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7.	I have clear expectations regarding my child’s behaviour and I am not much bothered about the likings of my child regarding his/her future.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "8.	I usually like to give physical punishment than giving advices to my child because I am sure he/she will not listen to it.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    2:{
      title:"Authoritative",
      questions: [
        {
          questionText: "1.	I would like to be a friend, Philosopher and guide to my child.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	I used to understand the feelings of my child in any situation and always try to get the opinion of my child whenever I buy something for him/her.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	Important decisions of the family are done together and I give full freedom to my child to share everything with me.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	As I understand the strength and weakness of my child, I set some appropriate rules for him/her and give friendly corrections whenever necessary.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5.	I will not force my child in any of his/her future career and I also help him/her to set a realistic goal.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "6.	Whenever my child fail to follow the time table given to him/her, I remind the consequences with a touch of love and affection.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7.	My child talks with me out of being punished after he/she has done something wrong.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "8.	Even though I am busy I have enough time to visit my child’s school & to meet teachers to know his/her progress.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    3:{
      title:"Permissive",
      questions: [
        {
          questionText: "1.	I am very soft with my child so that I cannot correct him/her at proper time by punishment.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "2.	Whenever the child comes with low marks, I will not give any punishments rather I feel he/she will become better next time.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "3.	I give valuable reward to my child for obeying me or behaving well.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText: "4.	Though I have definite goal and planning about my child’s future I cannot follow it strictly because of my leniency.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "5. As I was brought up by strictly disciplined parents, I am very liberal with my child..",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "6.	I like to be a very affectionate parent towards my child and also I take the responsibility of my faulty parenting on my child.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "7.	I always threaten my child with punishment but do not actually doing it because of my leniency.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
        {
          questionText:
            "8.	Because of excessive love and sympathy, I have showing towards my child, he/she has no self-discipline.",
          options: commonoption,
          optionWeightage: [1, 2, 3, 4, 5],
        },
      ],
    },
    4:{
        title: "Uninvolved",
        questions: [
          {
            questionText: "1.	I do not have any demand or control on my child and I give total freedom.",
            options: commonoption,
            optionWeightage: [1, 2, 3, 4, 5],
          },
          {
            questionText:
              "2.	As I am very sad and depressed, I cannot show much care and deep emotional tie up with my child.",
            options: commonoption,
            optionWeightage: [1, 2, 3, 4, 5],
          },
          {
            questionText:
              "3.	As I am very busy with my household and office duties, I get less time to involve my child’s studies or to listen his/her needs and wishes.",
            options: commonoption,
            optionWeightage: [1, 2, 3, 4, 5],
          },
          {
            questionText: "4.	I have enough stress and strain myself and hence I cannot take care of my child’s welfare.",
            options: commonoption,
            optionWeightage: [1, 2, 3, 4, 5],
          },
          {
            questionText:
              "5.	I usually give more important to my own likes and wishes but not bother much about needs or misbehaviours of my child.",
            options: commonoption,
            optionWeightage: [1, 2, 3, 4, 5],
          },
          {
            questionText:
              "6.	As I am busy and get little time to care my child, he/she is quite free to move own way to take decisions.",
            options: commonoption,
            optionWeightage: [1, 2, 3, 4, 5],
          },
          {
            questionText:
              "7.	As I am bounded with severe life problems, I ignore my child’s misbehaviour and I have no idea about his/her life outside the home.",
            options: commonoption,
            optionWeightage: [1, 2, 3, 4, 5],
          },
          {
            questionText:
              "8. I never like to tell my child where I am going or why I am late.",
            options: commonoption,
            optionWeightage: [1, 2, 3, 4, 5],
          },
        ],
    }
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

  // const totalScore = scores.reduce((acc, score) => acc + score, 0);
  let totalScore = 0;
  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];
  }

  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";
  const testType = "Parenting Style";
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
            <h2 className="text-left mt-70 font-bold text-2xl mb-10">
              Assessment Rating Criteria:{" "}
            </h2>
            <p className="text-left font-semibold mb-5">
              Please evaluate each statement according to how often it applies
              to your situation. Use the following scale:
            </p>
            <p className="text-left font-semibold">
              <strong>Never: </strong>Assign a rating of 1 if the statement
              never applies to you.
            </p>
            <p className="text-left font-semibold">
              <strong>Rarely: </strong> Assign a rating of 2 if the
              statement rarely applies to you.
            </p>
            <p className="text-left font-semibold">
              <strong>Sometime: </strong> Assign a rating of 3 if the
              statement sometime applies to you.
            </p>
            <p className="text-left font-semibold">
              <strong>Most of the time: </strong> Assign a rating of 4 if the statement
              consistently applies to you.
            </p>
            <p className="text-left mb-5 font-semibold">
              <strong>All of the time: </strong> Assign a rating of 5 if the statement
              always applies to you.
            </p>
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

export default TestQuestionsPattern14;

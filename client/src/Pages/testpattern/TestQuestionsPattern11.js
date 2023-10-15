
import React, { useState ,useEffect} from "react";
// import { useParams,Link } from "react-router-dom";
import Ellipse1 from "../../images/Ellipse1.png"; 
import Ellipse2 from '../../images/Ellipse2.png';
import Ellipse3 from "../../images/Ellipse3.png";
import { API_BASE_URL } from "../../config";

function TestQuestionsPattern11() {
  // const { subtestId } = useParams();
  const id=11;

  const categories = [
    "Academic Competency",
    "Health & Fitness",
    "Social Friends",
    "Discipline",
    "Good Manners",
    "Spirituality",
    "Goal Orientation",
    "Confidence",
    "Responsible",
    "Hobbies & Extracurricular",
  ];

 

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [categoryScores, setCategoryScores] = useState(Array(categories.length).fill(0));
  const [showScore, setShowScore] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false); 

  const handleScoreChange = (score) => {
    const newCategoryScores = [...categoryScores];
    newCategoryScores[categoryIndex] = score;
    setCategoryScores(newCategoryScores);
  };

  const handleNextCategory = () => {
    if (categoryIndex < categories.length - 1) {
      setCategoryIndex(categoryIndex + 1);
    } else {
      // Display total scores
      setShowScore(true);
    }
  };

  // const totalScore = categoryScores.reduce((acc, score) => acc + score, 0);
  let totalScore = 0;
  for (let i = 0; i < categoryScores.length; i++) {
    totalScore += categoryScores[i];
  }

  const subCategory = "Students Wheel of Life";
  const testType = "Students Wheel of Life";
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
  
            setCategoryScores(score);
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
    <div className="container mx-auto p-4 bg-white min-h-screen">
       {   !isTestCompleted && (
        <>
  <img src={Ellipse1} alt="business" className="absolute top-0 left-6 mb-20" height="100px" />
  <img src={Ellipse2} alt="business" width="700px" height="400px" className="absolute top-0 left-80" style={{ marginBottom: 40 }} />
  <img src={Ellipse3} alt="bbbnn" width="1600px" height="400px" />
  </>
 ) }
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
        <div className="">
          <p>Total Score: {totalScore}</p>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg mb-2 text-left">
            Rate your {categories[categoryIndex]}:
          </p>
          <div className="mt-2 text-left">
            <input
              type="number"
              min="1"
              max="10"
              value={categoryScores[categoryIndex]}
              onChange={(e) => handleScoreChange(parseInt(e.target.value))}
              className="w-20 px-2 py-1 bg-white border border-gray-600 rounded"
            />
          </div>
          <div className="mt-4">
            {categoryIndex === categories.length - 1 ? (
              <button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-2 px-4 rounded"
               onClick={sendTestDataToServer} 
              >
                Submit Test Data
              </button>
            ) : (
              <button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextCategory}
              >
                Next
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

export default TestQuestionsPattern11;

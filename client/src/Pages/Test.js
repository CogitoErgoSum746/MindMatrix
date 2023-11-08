import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import mainpurple from "../images/mainpurple.png";
import { API_BASE_URL } from "../config";
import logout from "../images/logout.png"
import Contact from "../components/HomePage/Contact";

function Test() {
  const [tests] = useState([
    {
      id: 1,
      name: "Study Skills Profile Assessment",
    },
    {
      id: 2,
      name: "Multiple Intelligence",
    },
    {
      id: 3,
      name: "Left-Right Brain Dominance",
    },
    { id: 4, name: "Personality" },
    {
      id: 5,
      name: "Emotional Intelligence",
    },
    { id: 6, name: "Learning Style" },
    { id: 7, name: "Leadership skills" },
    { id: 8, name: "Leadership Style" },
    { id: 9, name: "Cyber Dependency" },
    {
      id: 10,
      name: "Competitive State Anxiety Inventory",
    },
    {
      id: 11,
      name: "Students Wheel of Life",
    },
    { id: 12, name: "Aptitude" },
    { id: 13, name: "Professional Skills Set Assessment" },
    { id: 14, name: "Parenting Style" },
    { id: 15, name: "Work Life Balance" },
    { id: 16, name: "Wheel of Life" },
    { id: 17, name: "Integrity Assessment" },
    { id: 18, name: "Emotional Styles" },
    { id: 19, name: "Entrepreneurship Suitability Assessment" },
    { id: 20, name: "Professional Suitability Assessment" },
  ]);

  const [remainingTests, setRemainingTests] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pdfSent, setPdfSent] = useState(false);
  const [careerOptions, setCareerOptions] = useState(null);
  const [studentType, setStudentType] = useState("");

  const authtoken = localStorage.getItem("authtoken");
  const navigate=useNavigate();

  useEffect(() => {
    async function fetchTotalTests() {
      try {
        if (studentType) {
          let TestsRoute = "";
          if (studentType === "High school") {
            TestsRoute = "/schooltotaltests";
          } else if (studentType === "College") {
            TestsRoute = "/collegetotaltests";
          } else if (studentType === "Professional") {
            TestsRoute = "/professionaltotaltests";
          }

          const response = await fetch(`${API_BASE_URL}/user${TestsRoute}`, {
            method: "GET",
            headers: {
              authtoken: authtoken,
            },
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          if (data.success) {
            setRemainingTests(data.differenceList);
          }
        }
      } catch (error) {
        console.error("Error fetching totalTests:", error);
      }
    }

    async function checkCareeroptions() {
      try {
        const authtoken = localStorage.getItem("authtoken");
        const response = await fetch(`${API_BASE_URL}/user/checkcarreerlist`, {
          method: "GET",
          headers: {
            authtoken: authtoken,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setCareerOptions(data.status);
        } else {
          console.error("error checking career option");
        }
      } catch (error) {
        console.error("Error checking career options:", error);
      }
    }

    checkCareeroptions();

    if (authtoken) {
      fetchUserData();
    }

    fetchTotalTests();
  }, [studentType, authtoken]);

  const fetchUserData = async () => {
    const authtoken = localStorage.getItem("authtoken");
    try {
      const response = await fetch(`${API_BASE_URL}/user/getuser`, {
        method: "GET",
        headers: {
          authtoken: authtoken,
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (data.status === "success" && data.results === 1) {
          const userData = data.data.user;
          setStudentType(userData.studentType);
          console.log(userData.studentType);
        } else {
          console.error("Error: User data retrieval failed.", data);
        }
      } else {
        console.error("Error: Request failed with status", response.status);
      }
    } catch (error) {
      console.error("Network error", error);
    }
  };

  const handleGeneratePDF = async () => {
    setLoading(true);

    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(`${API_BASE_URL}/user/makepdf`, {
        method: "GET",
        headers: {
          authtoken: authtoken,
        },
      });

      if (response.ok) {
        console.log("PDF generated and sent");
        setPdfSent(true); // Update state when PDF is sent
      } else {
        console.error("Error generating PDF");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };



  function handleLogout(){
    localStorage.clear();
    navigate('/');


  }

  const areTestsRemaining = Object.values(remainingTests || {}).every(
    (count) => count === 0
  );

  const additionalTests = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (studentType === "High school") {
    // console.log(studentType)
    additionalTests.push(1, 11, 12);
    // console.log(additionalTests)
  } else if (studentType === "College") {
    additionalTests.push(1, 11, 12, 13);
  } else if (studentType === "Professional") {
    additionalTests.push(14, 15, 16, 17, 18, 19, 20);
  }

  const filteredTests = tests.filter((test) =>
    additionalTests.includes(test.id)
  );

  return (
    <div className="">
      <div className="bg-white min-h-screen">
        <div className="relative">
          <img
            src={mainpurple}
            alt="bbbnn"
            className="md:min-w-full md:w-full lg:h-80 md:h-30 sm:h-30"
          />

          <button
            onClick={handleLogout} // Add your logout function here
            className="absolute top-5 right-5 p-2 bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold rounded-full cursor-pointe flex flex-row items-center mr-1"
          ><img src={logout} alt="logout" className="w-5 h-5"></img>
            Logout </button>

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

        <div className="flex flex-col bg-white mt-10 p-10">
          <div className="flex justify-start ml-5 mb-10">
            <Link to="/">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover-bg-yellow-500 text-left font-semibold font-['Inter'] uppercase">
                {"<"}Go Back
              </button>
            </Link>
          </div>

          {filteredTests.map((test) => (
            <div className="w-full p-4 mb-4 rounded-lg border border-gray-300 shadow-lg flex justify-between items-center">
              <h1 className="text-lg font-semibold font-['Inter']">
                {test.name}
              </h1>
              {remainingTests && remainingTests[test.name] > 0 ? (
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg ml-3">
                    {remainingTests[test.name]} remaining
                  </div>
                  <Link to={`/test/${test.id}`}>
                    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-black font-['Inter']">
                      Start Test
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  {test.id === 2 ? (
                    careerOptions ? (
                      <button className="bg-green-500 px-4 py-2 rounded-full text-black font-['Inter']">
                        Completed
                      </button>
                    ) : (
                      <Link to={`/test/${test.id}`}>
                        <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-black font-['Inter']">
                          Start Test
                        </button>
                      </Link>
                    )
                  ) : (
                    <button className="bg-green-500 px-4 py-2 rounded-full text-black font-['Inter']">
                      Completed
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-center items-center">
            <button
              onClick={handleGeneratePDF}
              className={`px-4 py-2 rounded-full text-black font-['Inter'] ${
                areTestsRemaining
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500"
                  : "bg-gray-300"
              }`}
              disabled={!areTestsRemaining}
              style={{ width: "250px" }}
            >
              {loading
                ? "Generating..."
                : pdfSent
                ? "Report Sent to Mail"
                : "Send Final Report to Mail"}
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Test;

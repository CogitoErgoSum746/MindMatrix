import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { API_BASE_URL } from "../../config";
import logout from "../../images/logout.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../../components/common/ScrollToTop";
import mainpurple from "../../images/mainpurple.png";

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
  const [showOptionalTest, setShowOptionalTest] = useState(false);
  const [parentingStyleValue, setparentingStyleValue] = useState(1);
  const [dlist, setdlist] = useState(null);

  const authtoken = localStorage.getItem("authtoken");
  const navigate = useNavigate();

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
            const updatedDlist = { ...data.differenceList };
            setdlist(updatedDlist);
            setparentingStyleValue(updatedDlist["Parenting Style"]);
            delete updatedDlist["Parenting Style"];
            setRemainingTests(updatedDlist);
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

    // Show toast during report generation
    toast.info(
      "The final report based on all the scores of your tests is being generated. Note that you can send this report again if you did not receive it. The optimized generation might take a minute, please wait...",
      { autoClose: false }
    );

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
      toast.dismiss(); // Close the info toast
      toast.success(
        "Congratulations on finishing the tests. You may now check your final report in your mail",
        {
          autoClose: 6000,
        }
      );
    }
  };

  const deletePdf = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(`${API_BASE_URL}/user/deletepdf`, {
        method: "GET",
        headers: {
          authtoken: authtoken,
        },
      });

      if (response.ok) {
        console.log("PDF deleted");
      } else {
        console.error("Error generating PDF");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  function handleLogout() {
    localStorage.clear();
    navigate("/psychometrictest/getstarted");
  }

  const areTestsDone = Object.values(remainingTests || {}).every(
    (count) => count === 0
  );

  const additionalTests = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (studentType === "High school") {
    additionalTests.push(1, 11, 12);
  } else if (studentType === "College") {
    additionalTests.push(1, 11, 12, 13);
  } else if (studentType === "Professional") {
    additionalTests.push(15, 16, 17, 18, 19, 20);
  }

  const filteredTests = tests.filter((test) =>
    additionalTests.includes(test.id)
  );

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <div className="relative overflow-hidden">
        <button
          onClick={handleLogout}
          className="absolute top-5 right-5 p-2 bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold rounded-full cursor-pointer flex flex-row items-center mr-1"
        >
          <img src={logout} alt="Logout" className="w-5 h-5" />
          Logout
        </button>
        <Link to="/test/userprofile">
          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover:scale-105 font-semibold uppercase mt-8">
            Profile
          </button>
        </Link>
      </div>

      <div className="container mx-auto mt-10 p-6 md:p-10">
        <div className="flex justify-start mb-6">
          <Link to="/psychometrictest/getstarted">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 text-left font-semibold uppercase">
              {"<"} Go Back
            </button>
          </Link>
        </div>

        {filteredTests.map((test) => (
          <div
            key={test.id}
            className={`w-full p-4 mb-4 rounded-lg border border-gray-300 shadow-lg flex flex-col md:flex-row justify-between items-center transition-transform duration-200 transform hover:scale-105 `}
          >
            <h1 className="text-lg md:text-xl lg:text-xl font-bold mb-2 md:mb-0 md:mr-4">
              {test.name}
            </h1>

            {remainingTests && remainingTests[test.name] > 0 ? (
              <div className="flex items-center md:ml-auto">
                <div className="p-2 bg-blue-100 rounded-lg md:mr-3 text-center md:text-left">
                  {remainingTests[test.name]} remaining
                </div>
                <Link to={`/test/${test.id}`}>
                  <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-black">
                    Start Test
                  </button>
                </Link>
              </div>
            ) : (
              <div className="text-center md:text-left">
                {test.id === 2 ? (
                  careerOptions ? (
                    <button className="bg-green-500 px-4 py-2 rounded-full text-black">
                      Completed
                    </button>
                  ) : (
                    <Link to={`/test/${test.id}`}>
                      <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-black">
                        Start
                        <br />
                        Test
                      </button>
                    </Link>
                  )
                ) : (
                  <button className="bg-green-500 px-4 py-2 rounded-full text-black">
                    Completed
                  </button>
                )}
              </div>
            )}
          </div>
        ))}

        <div className="flex flex-col justify-center items-center">
          {!areTestsDone && (
            <div className="flex items-center ml-10">
              <p className="">To enable the report generation: </p>
              <p className="text-lg font-bold ml-2">
                COMPLETE ALL TESTS AND PROFILE
              </p>
            </div>
          )}
          {areTestsDone && careerOptions && (
            <div className="flex items-center ml-10">
              <p className="text-lg font-bold ml-2">
                Congrats on successfully completing your tests, you may now
                generate your FINAL REPORT
              </p>
            </div>
          )}

          {studentType === "Professional" && (
            <div>
              <div className="border-t border-blue-500 border-b-2 w-full my-4"></div>
              <button
                onClick={() => setShowOptionalTest(!showOptionalTest)}
                className="px-4 py-2 rounded-full text-black bg-gradient-to-r from-orange-500 to-yellow-500 mb-4"
              >
                {showOptionalTest ? "Hide Optional Test" : "Show Optional Test"}
              </button>
            </div>
          )}

          {showOptionalTest && (
            <div className="w-full p-4 mb-4 rounded-lg border border-gray-300 shadow-lg flex flex-col md:flex-row justify-between items-center">

              <h1 className="text-lg md:text-xl lg:text-xl font-bold mb-2 md:mb-0 md:mr-4">
                Parenting Style
              </h1>
              <div className="flex items-center md:ml-auto">
                <div className="p-2 bg-blue-100 rounded-lg md:mr-3 text-center md:text-left">
                  {parentingStyleValue} remaining
                </div>
                <div className="text-center md:text-left">
                  {parentingStyleValue > 0 ? (
                    <Link to={`/test/14`}>
                      <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-black">
                        Start Test
                      </button>
                    </Link>
                  ) : (
                    <button className="bg-green-500 px-4 py-2 rounded-full text-black">
                      Completed
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="border-t border-blue-500 border-b-2 w-full my-4"></div>
          {areTestsDone && careerOptions &&
            <div>
              <button
                onClick={handleGeneratePDF}
                className={`px-4 py-2 rounded-full text-black
              bg-gradient-to-r from-orange-500 to-yellow-500
            `}
                // disabled={!areTestsDone && !careerOptions}
                style={{ width: "250px" }}
              >
                {loading
                  ? "Generating..."
                  : pdfSent
                    ? "Report Sent to Mail"
                    : "Send Final Report to Mail"}
              </button>

              <button
                onClick={deletePdf}
                className={`px-4 py-2 rounded-full text-black
            bg-red-400
          `}
                // disabled={!areTestsDone && !careerOptions}
                style={{ width: "250px" }}
              >
              Delete Report
              </button>
            </div>
          }

        </div>
      </div>

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default Test;
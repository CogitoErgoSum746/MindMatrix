import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Ellipse1 from "../images/Ellipse1.png";
// import Ellipse2 from "../images/Ellipse2.png";
// import Ellipse3 from "../images/Ellipse3.png";
import mainpurple from "../images/mainpurple.png";
import { API_BASE_URL } from "../config";
import Footer from "../components/Footer";
import Contact from "../components/HomePage/Contact";

function Test() {
  const [tests] = useState([
    {
      id: 1,
      name: "Study Skills Profile Assessment",
      description: "Description for Test 1",
    },
    {
      id: 2,
      name: "Multiple Intelligence",
      description: "Description for Test 2",
    },
    {
      id: 3,
      name: "Left-Right Brain Dominance",
      description: "Description for Test 3",
    },
    { id: 4, name: "Personality", description: "Description for Test 4" },
    {
      id: 5,
      name: "Emotional Intelligence",
      description: "Description for Test 5",
    },
    { id: 6, name: "Learning Style", description: "Description for Test 6" },
    { id: 7, name: "Leadership skills", description: "Description for Test 7" },
    { id: 8, name: "Leadership Style", description: "Description for Test 8" },
    { id: 9, name: "Cyber Dependency", description: "Description for Test 9" },
    {
      id: 10,
      name: "Competitive State Anxiety Inventory",
      description: "Description for Test 10",
    },
    {
      id: 11,
      name: "Students Wheel of Life",
      description: "Description for Test 11",
    },
    { id: 12, name: "Aptitude", description: "Description for Test 12" },
  ]);

  const [remainingTests, setRemainingTests] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pdfSent, setPdfSent] = useState(false);
  const [careerOptions, setCareerOptions] = useState(null); // Add state for PDF sent

  useEffect(() => {
    async function fetchTotalTests() {
      try {
        const authtoken = localStorage.getItem("authtoken");

        const response = await fetch(`${API_BASE_URL}/user/schooltotaltests`, {
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
      } catch (error) {
        console.error("Error fetching totalTests:", error);
      }
    }

    fetchTotalTests();

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
  }, []);

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

  const areTestsRemaining = Object.values(remainingTests || {}).every(
    (count) => count === 0
  );

  return (
    <div>
      <div className="container bg-white min-h-screen">
        {/* <img
          src={Ellipse1}
          alt="business"
          className="absolute top-0 left-6 mb-20"
          height="100px"
        />
        <img
          src={Ellipse2}
          alt="business"
          width="700px"
          height="400px"
          className="absolute top-0 left-80"
          style={{ marginBottom: 40 }}
        />
        <img src={Ellipse3} alt="bbbnn" width="1600px" height="400px" /> */}
      <div className="relative">
  <img src={mainpurple} alt="bbbnn" className="w-full h-80 md:h-100" />

  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left md:text-justify mt-4 mb-8 md:mb-20 ml-4  font-['Inter'] uppercase">
    GET ALL YOUR <br />
    <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-clip text text-black space-y-2 font-['Inter'] uppercase leading-10" style={{ lineHeight: "1" }}>
      PSYCHOMETRIC
    </span>{" "}
    TESTS
    <br />
    HERE
  </h1>
</div>


        <div className="flex flex-col bg-white mt-10 p-10">
          <div className="flex justify-start ml-5 mb-10">
            <Link to="/">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover-bg-yellow-500 transition duration-300 text-left font-semibold font-['Inter'] uppercase leading-10">
                {"<"}Go Back
              </button>
            </Link>
          </div>

          {tests.map((test) => (
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

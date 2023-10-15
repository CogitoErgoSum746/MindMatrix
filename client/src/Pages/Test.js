import React, { useState, useEffect } from "react";
// import business from '../images/business1.png'
import { Link } from "react-router-dom";
import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse2.png";
import Ellipse3 from "../images/Ellipse3.png";
import Navbar from "../components/Navbar";
import { API_BASE_URL } from "../config";

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

  useEffect(() => {
    // Create a function to fetch data from the backend
    async function fetchTotalTests() {
      try {
        const authtoken = localStorage.getItem("authtoken"); // Use 'authtoken' as the key to retrieve the token from local storage
        console.log(authtoken);

        const response = await fetch(`${API_BASE_URL}/user/totalTests`, {
          method: "GET",
          headers: {
            authtoken: authtoken, // Include the token in the Authorization header
          },
        });

        console.log(response);

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

    // Call the function to fetch remaining test counts when the component mounts
    fetchTotalTests();
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
        // PDF generated and sent successfully
        // You can add additional logic here, e.g., show a success message to the user
        console.log("PDF generated and sent");
      } else {
        // Handle error, e.g., show an error message
        console.error("Error generating PDF");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  // Check if there are any remaining tests
  const areTestsRemaining = Object.values(remainingTests || {}).some(
    (count) => count > 0
  );

  return (
    <div>
      <div className="container bg-white min-h-screen">
        <img
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
        <img src={Ellipse3} alt="bbbnn" width="1600px" height="400px" />

        <h1 className="text-4xl font-semibold text-white absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-justify mb-20">
          GET ALL YOUR <br />
          <span
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-clip text text-black space-y-2 "
            style={{ lineHeight: "1" }}
          >
            PSYCHOMETRIC
          </span>{" "}
          TESTS
          <br />
          HERE
        </h1>

        <div className="flex flex-col bg-white mt-10 p-10 ">
          {tests.map((test) => (
            <div className="w-full p-4 mb-4 rounded-lg border border-gray-300 shadow-lg flex justify-between items-center">
              <h1 className="text-lg font-semibold">{test.name}</h1>
              {remainingTests && remainingTests[test.name] && (
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg ml-3">
                    {remainingTests[test.name]} remaining
                  </div>
                </div>
              )}
              <Link to={`/test/${test.id}`}>
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-black">
                  Start Test
                </button>
              </Link>
            </div>
          ))}
          <div className="flex justify-center items-center">
            <button
            onClick={handleGeneratePDF}
              className={`px-4 py-2 rounded-full text-black ${
                areTestsRemaining
                  ? "bg-gray-300"
                  : "bg-gradient-to-r from-orange-500 to-yellow-500"
              }`}
              disabled={areTestsRemaining}
              style={{ width: "250px" }}
            >
              {loading ? "Generating..." : "Send PDF to Mail"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;

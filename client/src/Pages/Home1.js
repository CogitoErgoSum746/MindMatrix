import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { API_BASE_URL } from "../config";
import clg from "../images/Home1/clgstudent.png";
import school from "../images/Home1/Highschool.png";
import prof from "../images/Home1/professional.png";

function Home1() {
  const navigate = useNavigate();
  const authtoken = localStorage.getItem("authtoken");
  const [studentType, setStudentType] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    if (authtoken) {
      setIsLoggedin(true);
      fetchUserData();
    }
  }, [authtoken]);

  const fetchUserData = async () => {
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

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-10">
        <div className="container mx-auto p-5">
          <h1 className="text-black text-center text-xl mb-3 font-bold font-['Inter']">
            PSYCHOMETRIC TESTS
          </h1>
          <p className="text-black text-center text-md mb-1 italic">
            Every person possess a distinctive gift waiting to shine.
          </p>
          <p className="text-black text-center text-md mb-5 italic">
            Discovering one's genuine passion is essential for every individual.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded shadow-md">
              <div className="flex justify-center">
                <img src={school}></img>
              </div>
              
              <h1 className="text-center text-xl font-bold mb-2 font-['Inter'] mt-1">
                HIGH SCHOOLERS
              </h1>
              <h1 className="text-center text-lg font-bold font-['Inter']">
              Unlock Your Potential  
              </h1>
              <p className="text-lg text-gray-800 mb-10 text-justify">
                Welcome to our psychometric test’s platform tailored for high
                school students. We understand that this is a crucial time in
                your life, where you're making important decisions about your
                future. Our psychometric tests are here to assist you in
                discovering your strengths and interests, providing guidance for
                your educational journey. Whether you're considering college
                majors, career paths, or simply want to better understand
                yourself, our tests are your trusted companions. Start exploring
                and pave the way to a successful future.
              </p>
              {isLoggedin && studentType === "High school" ? (
                <Link to="/test">
                  <button className="w-full p-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500">
                    Get Started
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <p className="w-full p-2 rounded-md bg-gray-400">
                    Please log in to get started.
                  </p>
                </Link>
              )}
            </div>

            <div className="p-4 bg-white rounded shadow-md">
              <div className="mb-12 flex justify-center">
                <img src={clg}></img>
              </div>
              <h1 className="text-center text-xl font-bold mb-2  font-['Inter'] ">
                COLLEGE STUDENTS
              </h1>
              <h1 className="text-center text-lg font-bold font-['Inter']">
              Empower Your Choice
              </h1>
              <p className="text-lg text-gray-800 mb-4 text-justify md:text-md">
                As a college student, you're at the crossroads of academic and
                career decisions. Our psychometric tests are designed to empower
                you on this exciting journey. Discover your unique abilities,
                interests, and potential career matches. Whether you're choosing
                a major, planning internships, or preparing for graduation, our
                tests provide valuable insights to make informed choices. Take
                charge of your future and let our assessments be your guide.
                Beyond the academic decisions, our psychometric tests also help
                you to take a right decision.
              </p>
              {isLoggedin && studentType === "College" ? (
                <Link to="/test">
                  <button className="w-full p-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500">
                    Get Started
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <p className="w-full p-2 rounded-md bg-gray-400">
                    Please log in to get started.
                  </p>
                </Link>
              )}
            </div>

            <div className="p-4 bg-white rounded shadow-md">
              <div className="flex justify-center">
                <img src={prof}></img>
              </div>
              <h1 className="text-center text-xl font-bold mb-2 font-['Inter'] ">
                PROFESSIONALS
              </h1>
              <h1 className="text-center text-lg font-bold font-['Inter']">
              Optimise Your Career
              </h1>
              <p className="text-lg text-gray-800 mb-10 text-justify  md:text-md ">
                In the professional world, continuous growth and advancement are
                key. Our psychometric tests offer experienced professionals the
                tools to enhance their careers. Identify your leadership
                potential, fine-tune your communication skills, and explore new
                avenues for personal development. Whether you're aiming for a
                promotion, a career change, or simply seeking to improve your
                job performance, our tests provide data-driven insights to help
                you thrive in your chosen field. Elevate your career.
              </p>
              {isLoggedin && studentType === "Professional" ? (
                <Link to="/test">
                  <button className="w-full p-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500">
                    Get Started
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <p className="w-full p-2 rounded-md bg-gray-400">
                    Please log in to get started.
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { API_BASE_URL } from "../../config";
import logo from "../../images/logo.png";
import clg from "../../images/Home1/clgstudent.png";
import school from "../../images/Home1/Highschool.png";
import prof from "../../images/Home1/professional.png";
import ScrollToTop from "../../components/common/ScrollToTop";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

function Home1() {
  const navigate = useNavigate();
  const authtoken = localStorage.getItem("authtoken");
  const [studentType, setStudentType] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (authtoken) {
      const toastMessage = localStorage.getItem("toastMessage");
      if (toastMessage) {
        toast.success(toastMessage, {
          autoClose: 5000,
        });

        // Clear the success message from local storage
        localStorage.removeItem('toastMessage');
      }
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

  const initiatePayment = async () => {
    try {
      const checkUser = await fetch(`${API_BASE_URL}/payment/checkUser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          contact,
          age
        }),
      });

      const checkUserResponse = await checkUser.json();
      if (checkUserResponse.success) {
        const response = await fetch(`${API_BASE_URL}/payment/checkout`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: 1, // Fixed amount
          }),
        });

        const data1 = await response.json();

        if (data1.error) {
          console.error('Error creating order:', data1.error);
          return;
        }

        const options = {
          key: data1.api_key, // API key received from server
          amount: data1.order.amount,
          currency: "INR",
          name: "Successteps",
          description: "Payment for your purchase",
          image: logo, // Replace with your logo URL
          order_id: data1.order.id,
          callback_url: `${API_BASE_URL}/payment/paymentverification`,
          prefill: {
            name: name,
            email: email,
            contact: contact,
          },
          notes: {
            "address": "Razorpay Corporate Office"
          },
          "handler": async (response) => {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

            // Send payment confirmation and user data to your server
            const serverResponse = await fetch(`${API_BASE_URL}/payment/paymentverification`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                email,
                name,
                contact,
                age
              }),
            });

            const data2 = await serverResponse.json();
            console.log(data2);

            if (data2.success) {
              console.log('Payment successful!');
              window.location.href = '/login';
              // Handle successful payment (e.g., display confirmation message, update UI)
            } else {
              console.error('Payment failed:', data2.error);
              window.location.href = '/';
              // Handle payment failure (e.g., display error message)
            }
          },
          theme: {
            "color": "#121212"
          }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
          console.log(response);
          alert("Payment Failed");
        });
        rzp1.open();
      } else {
        toast.error("You have already done the payment as per our records, check your email for further instructions!!", {
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Psychometric Tests</title>

        <meta name="description" content="" />

        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Helmet>
      <ScrollToTop />
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
                <div className="mt-10">
                  <button onClick={handleOpen} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                  </button>
                  {isOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
                      <div className="bg-white p-8">
                        <label htmlFor="email" className="block mb-2">Email:</label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="block w-full mb-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                        <label htmlFor="name" className="block mb-2">Name:</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="block w-full mb-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                        <label htmlFor="contact" className="block mb-2">Contact:</label>
                        <input
                          type="tel"
                          id="contact"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          required
                          className="block w-full mb-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                        <label htmlFor="age" className="block mb-2">Age:</label>
                        <input
                          type="number"
                          id="age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required
                          className="block w-full mb-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                        <button id="rzp-button1" onClick={initiatePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
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
                    Buy now
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
                    Buy now
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default Home1;

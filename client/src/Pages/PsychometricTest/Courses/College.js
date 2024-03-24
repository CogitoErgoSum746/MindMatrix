import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../images/logo.png";
import collegepay1 from "../../../images/Home1/college_payment1.png";
import collegepay2 from "../../../images/Home1/college_payment2.png";
import { Eye, EyeOff } from "react-feather";
import "react-toastify/dist/ReactToastify.css";
import registerImg from "../../../images/register.webp";
import Navbar from "../../../components/common/Navbar";
import { API_BASE_URL } from "../../../config";
import { Helmet } from "react-helmet";


const Professional = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    contact: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    setFadeIn(true);
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for the 'username' field to trim only during form submission
    const trimmedValue = name === "username" ? value : value.trim();

    setFormData({
      ...formData,
      [name]: trimmedValue,
    });

    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim leading and trailing spaces from the 'name' field
    const trimmedName = formData.username.trim();

    // Update the form data with the trimmed name
    setFormData({
      ...formData,
      username: trimmedName,
    });

    setValidationErrors({});

    try {
      const { username, email, contact, age } = formData

      const checkUser = await fetch(`${API_BASE_URL}/payment/checkUser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: username,
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
            amount: 8500,
          }),
        });

        const data1 = await response.json();

        if (data1.error) {
          console.error('Error creating order:', data1.error);
          return;
        }

        let studentType = 'College';

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
            name: username,
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
                name: username,
                contact,
                age,
                studentType,
              }),
            });

            const data2 = await serverResponse.json();
            console.log(data2);

            if (data2.success) {
              toast.dismiss();

              toast.success("Payment is successful. Check your mail for further instructions on completing the registration.", {
                autoClose: 6000,
              });
              console.log('Payment successful!');
            } else {
              toast.dismiss();

              toast.error("Sorry for the unsuccessful attempt. You may try again and contact the facilitator for additional doubts.", {
                autoClose: 6000,
              });
              console.error('Payment failed:', data2.error);
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
        <title>Register</title>

        <meta name="description" content="" />

        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Helmet>
      <Navbar />
      <div className={`flex flex-col-reverse md:flex-row opacity-0 ${fadeIn ? 'opacity-100 transition-opacity duration-1000' : ''} ${fadeIn ? 'transform translate-y-0' : 'transform translate-y-[-50px] transition-transform duration-1000'}`}>
        <div className="hidden md:block md:flex-1 mx-10 mt-40">
          <img src={collegepay1} alt="register" className="w-full h-auto" />
        </div>
        <div className="md:hidden w-full">
          <img src={collegepay2} alt="register" className="w-full h-auto" />
        </div>
        <div className="flex-1 w-full p-6 bg-white min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6">Fill Details</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-1 text-left">
                Name *
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-200 transition duration-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1 text-left">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-200 transition duration-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-1 text-left">
                Contact *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-200 transition duration-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="age" className="block text-gray-700 font-semibold mb-1 text-left">
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-200 transition duration-300"
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full p-3 text-md text-black rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-600 hover:to-orange-600 focus:outline-none transition duration-300"
              >
                Next
              </button>
            </div>
          </form>

          <p className="text-3xl font-semibold mt-2">Total Cost Rs. 8,500/- only</p>

        </div>
        <div className="md:hidden w-full mt-10">
          <img src={collegepay1} alt="register" className="w-full h-auto" />
        </div>
        <div className="hidden md:block md:flex-1 mx-10 mt-40">
          <img src={collegepay2} alt="register" className="w-full h-auto" />
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Professional;

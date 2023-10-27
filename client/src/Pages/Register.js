import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerImg from "../images/register.jpg";
import Navbar from "../components/Navbar";
import { API_BASE_URL } from "../config";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    studentType: "",
    age: "",
    password: "",
    organization_code: "", // Make sure this matches the backend field name
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [registrationError, setRegistrationError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  

    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };

  const showRegistrationError = (error) => {
    toast.error(error, { position: toast.POSITION.TOP_CENTER });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidationErrors({});
    setRegistrationError("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("Registration successful:", data);

        const token = data.token;
        localStorage.setItem("token", token);

        toast.success("Registration successful. Please wait, we will redirect you to the login page.", {
          autoClose: 3000, 
        });
        // setTimeout(() => {
        //   navigate("/login");
        // }, 0);

        setTimeout(() => {
          navigate("/login");
        }, 3000); 
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.error("Registration failed:", data);

  
          if (data.errors) {
            const errors = data.errors;

            const newValidationErrors = {};

            errors.forEach((error) => {
              const { path, msg } = error;
              newValidationErrors[path] = msg;
              showRegistrationError(`${path}: ${msg}`);
            });

            setValidationErrors(newValidationErrors);
          }

          // Set the registration error message and display it using react-toastify
          if (data.error) {
            const newValidationErrors = {};

            setRegistrationError(data.error);
            showRegistrationError(data.error);
          }
        } else {
          console.error("Registration failed with non-JSON response");
        }
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };


  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="hidden md:block md:flex-1 mt-20">
          <img src={registerImg} alt="register" className="w-full h-auto" />
        </div>
        <div className="flex-1 w-full p-6 bg-white min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-10">Welcome</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="flex items-start text-gray-700 font-semibold mb-1"
              >
                Name *
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-14 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="flex items-start text-gray-700 font-semibold mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-14 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="studentType"
                className="flex items-start text-gray-700 font-semibold mb-1"
              >
                Type *
              </label>
              <select
                id="studentType"
                name="studentType"
                value={formData.studentType}
                onChange={handleChange}
                required
                className="w-full px-14 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              >
                <option value="">Select your type</option>
                <option value="High school">High school</option>
                <option value="College">College</option>
                <option value="Professional">Professional</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="age"
                className="flex items-start text-gray-700 font-semibold mb-1"
              >
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-14 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="flex items-start text-gray-700 font-semibold mb-1"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-14 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="organization_code"
                className="flex items-start text-gray-700 font-semibold mb-1"
              >
                Organization Code
              </label>
              <input
                type="text"
                id="organization_code"
                name="organization_code"
                value={formData.organization_code}
                onChange={handleChange}
                className="w-full px-14 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full p-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500"
              >
                Register
              </button>
              <Link to="/login" className="text-md text-gray-600">
                Already a member? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Register;

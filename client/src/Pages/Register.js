import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Eye, EyeOff } from "react-feather";
import "react-toastify/dist/ReactToastify.css";
import registerImg from "../images/register.webp";
import Navbar from "../components/Navbar";
import { API_BASE_URL } from "../config";
import { Helmet } from "react-helmet";



const Register = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    studentType: "",
    age: "",
    password: "",
    organization_code: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [registrationError, setRegistrationError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const [termsChecked, setTermsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked);
    setCheckboxError("");
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    setFormData({
      ...formData,
      [name]: trimmedValue,
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

    if (!termsChecked) {
      setCheckboxError("Please accept the Terms and Conditions.");
      return;
    }

    setValidationErrors({});
    setRegistrationError("");

    toast.info("Registration is in process. Please wait...", {
      autoClose: false,
    });

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

        const token = data.token;
        localStorage.setItem("token", token);

        toast.dismiss();

        toast.success("Registration is successful. You may now check your mail for further instructions", {
          autoClose: 6000,
        });

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.dismiss();
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
      // errorLogger.error(`Error in registerUser: ${error.message}`);
    }
  };

  return (
    <>
     <Helmet>
        <title>Register</title>

        <meta name="description" content=""/>

        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content=""/>

        <meta name="twitter:card" content=""/>
        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image" content=""/>
      </Helmet>
      <Navbar />
      <div className={`flex flex-row opacity-0 ${fadeIn ? 'opacity-100 transition-opacity duration-1000' : ''} ${fadeIn ? 'transform translate-y-0' : 'transform translate-y-[-50px] transition-transform duration-1000'}`}>
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

            <div className="mb-4 relative">
        <label
          htmlFor="password"
          className="flex items-start text-gray-700 font-semibold mb-1"
        >
          Password *
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-14 py-2 border rounded-md pr-12 focus:outline-none focus:ring focus:ring-orange-200"
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute top-2 right-2 -mr-10 h-8 w-8 flex items-center justify-center text-gray-600"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>


            <div className="mb-4">
              <label
                htmlFor="organization_code"
                className="flex items-start text-gray-700 font-semibold mb-1"
              >
                Organization Code *
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
              <label
                htmlFor="terms"
                className="flex items-center text-gray-700 font-semibold mb-1"
              >
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={termsChecked}
                  onChange={handleTermsChange}
                  className="mr-2"
                />
                I accept the{' '}
                <a
                  href="/termsandconditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 cursor-pointer"
                >
                  Terms and Conditions
                </a>
              </label>
              {checkboxError && (
                <p className="text-red-500 mt-2">{checkboxError}</p>
              )}
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

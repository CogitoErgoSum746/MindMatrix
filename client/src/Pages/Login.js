import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import registerImg from "../images/register.webp";
import Navbar from '../components/Navbar';
import { useAuth } from '../AuthContext';
import { API_BASE_URL } from '../config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation when the component mounts
    setFadeIn(true);
  }, []);

  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showValidationError = (message) => {
    toast.error(message, { position: toast.POSITION.TOP_CENTER });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("successful login");

        const toastMessage = `Welcome back ${data.username}, glad to see you again`;

        if (data.userType === "user") {
          const authtoken = data.authtoken;
          localStorage.setItem('authtoken', authtoken);
          localStorage.setItem('toastMessage', toastMessage);
          login();
          window.location.href = '/getstarted';
        }
        if (data.userType === "admin") {
          const authtoken = data.authtoken;
          localStorage.setItem('authtoken', authtoken);
          localStorage.setItem('toastMessage', toastMessage);
          window.location.href = '/admin';
        }
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (data.error) {
            showValidationError(data.error);
          }
        } else {
          console.error('Login failed:', response.statusText);
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className={`flex flex-row opacity-0 ${fadeIn ? 'opacity-100 transition-opacity duration-1000' : ''} ${fadeIn ? 'transform translate-y-0' : 'transform translate-y-[-50px] transition-transform duration-1000'}`}>
        <div className='hidden md:block md:flex-1 mt-20'>
          <img src={registerImg} alt="register" className="w-full h-auto"></img>
        </div>
        <div className="flex-1 w-full p-6 bg-white min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">Welcome back</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="flex items-start text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-14 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="flex items-start text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-14 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-200"
                required
              />
              <Link to='/sendmail'>
                <p className='text-blue-400 text-right'>Forgot Password ?</p>
              </Link>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full p-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500"
              >
                Log In
              </button>
              <Link to='/register' className='text-md text-gray-600'>New member? Register</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default Login;

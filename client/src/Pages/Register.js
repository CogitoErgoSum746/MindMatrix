import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../images/register.png';
import Navbar from '../components/Navbar';
import { API_BASE_URL } from '../config';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    organization_code: '', // Update the field name to match the backend
  });

  // State variables for validation error messages
  const [validationErrors, setValidationErrors] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    organization_code: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });


    setValidationErrors({
      ...validationErrors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset validation error messages
    setValidationErrors({
      username: '',
      email: '',
      age: '',
      password: '',
      organization_code: '',
    });

    try {
      const response = await fetch(`${API_BASE_URL}/auth/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);

        const token = data.token;

        localStorage.setItem('token', token);

        window.location.href = '/login';
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.error('Registration failed:', data);

          // Handle validation errors here
          if (data.errors) {
            const errors = data.errors;
            errors.forEach((error) => {
              const { path, msg } = error;
              setValidationErrors((prevState) => ({
                ...prevState,
                [path]: msg,
              }));
            });
          }
        } else {
          console.error('Registration failed with non-JSON response');
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-black">
        <div className="hidden md:block md:flex-1">
          <img src={registerImg} alt="register" className="w-full h-auto" />
        </div>
        <div className="flex-1 w-full p-6 bg-white min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-10">Welcome</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="flex items-start text-gray-700 font-semibold mb-1">
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
              {validationErrors.username && (
                <small className="text-red-600">{validationErrors.username}</small>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="flex items-start text-gray-700 font-semibold mb-1">
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
              {validationErrors.email && (
                <small className="text-red-600">{validationErrors.email}</small>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="flex items-start text-gray-700 font-semibold mb-1">
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
              {validationErrors.age && (
                <small className="text-red-600">{validationErrors.age}</small>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="flex items-start text-gray-700 font-semibold mb-1">
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
              {validationErrors.password && (
                <small className="text-red-600">{validationErrors.password}</small>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="org_code" className="flex items-start text-gray-700 font-semibold mb-1">
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
              {validationErrors.organization_code && (
                <small className="text-red-600">{validationErrors.organization_code}</small>
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
    </>
  );
};

export default Register;

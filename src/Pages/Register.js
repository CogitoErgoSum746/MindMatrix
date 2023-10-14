import React, { useState } from 'react';
import {Link}  from 'react-router-dom'
import registerImg from '../images/register.png'
import Navbar from '../components/Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    password: '',
    organization_code: '', // Update the field name to match the backend
  });

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.age <= 0) {
      alert('Age must be greater than 0');
      return;
    }

     try {
    const response = await fetch('http://localhost:8001/auth/createuser', {
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
        console.error('Registration failed:', data.error);
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
    <div className='flex flex-row bg-black'>
      <div className='flex-1'>
        <img src={registerImg} alt="register" className="w-full h-auto"></img>
      </div>
      <div className="flex-1 w-full p-6 bg-white min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-10">Welcome</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="flex items-start text-gray-700 font-semibold mb-1">Name *</label>
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
            <label htmlFor="email" className="flex items-start text-gray-700 font-semibold mb-1">Email *</label>
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
            <label htmlFor="age" className="flex items-start text-gray-700 font-semibold mb-1">Age *</label>
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
            <label htmlFor="password" className="flex items-start text-gray-700 font-semibold mb-1">Password *</label>
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
            <label htmlFor="org_code" className="flex items-start text-gray-700 font-semibold mb-1">Organization Code</label>
            <input
              type="text"
              id="organization_code" 
              name="organization_code" 
              value={formData.organization_code} 
              required
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
            <Link to='/login' className='text-md text-gray-600'>Already a member? Login</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;

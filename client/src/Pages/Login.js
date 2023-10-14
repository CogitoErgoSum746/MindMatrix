import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../images/register.png';
import Navbar from '../components/Navbar';
import { useAuth } from '../AuthContext';

function Login({ setLoggedIn }) {
  // const navigate = useNavigate();
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


  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { username, password } = formData;


    try {
      const response = await fetch('http://localhost:8001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        console.log("successful login");
        
        if(data.userType==="user")
        {
          const authtoken = data.authtoken;
          localStorage.setItem('authtoken', authtoken);
          login();
          // navigate('/');
          window.location.href = '/';
          
        }
        if(data.userType==="admin")
        {
          // navigate('/admin');
          window.location.href = '/admin';
          const authtoken = data.authtoken; // Replace with the actual token
          localStorage.setItem('authtoken', authtoken);
        }
        
      } else {
        console.error('Login failed:', response.statusText);
    
      }
    } catch (error) {
      console.error('Error during login:', error);

    }


  };


  

  return (
    <>
    <Navbar />
    <div className='flex flex-row bg-black'>
      <div className='hidden md:block md:flex-1'>
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
    </>
  );
}

export default Login;

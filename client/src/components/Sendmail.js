import React, { useState } from 'react';
import { API_BASE_URL } from '../config';

function Sendmail() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(''); // Add a state variable to store the error message

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/auth/forgotpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        const data = await response.json();
        if (data.success) {
          alert('Email sent successfully. Check your inbox for the reset link.');
        } else {
          setError(data.error); 
        }
      } else {
        setError('An error occurred while sending the email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('An error occurred while sending the email. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-500 h-400 shadow-lg p-10 bg-white">
        <h1 className="text-lg text-center font-medium font-['Inter']">Send Email</h1>
        <form onSubmit={handleEmailSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-100 mt-5 mb-5 font-['Inter']"
              placeholder='Enter your email'
              required
            />
          </div>
          {error && <p className="text-red-600">{error}</p>} {/* Display the error message */}
          <button
            type="submit"
            className="w-full p-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-center font-['Inter']"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sendmail;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../config';
//comment

function ResetPass() {
  const navigate = useNavigate();
  const { token } = useParams();
  console.log(token)
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (newPassword.length < 5) {
      setError('New password must be at least 5 characters long.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/resetpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }), 
      });

      if (response.status === 200) {
        const data = await response.json();
        if (data.success) {
          alert('Password reset successful. You can now log in with your new password.');
          navigate('/login'); // Redirect to the login page
        } else {
          setError(data.error);
        }
      } else {
        setError('An error occurred while resetting the password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setError('An error occurred while resetting the password. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-500 h-400 shadow-lg p-10 bg-white">
        <h1 className="text-lg text-center font-medium font-['Inter']">Reset Password</h1>
        <form onSubmit={handlePasswordReset}>
          <div className="mb-4">
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-100 mt-5 mb-5 font-['Inter']"
              placeholder="Enter your new password"
              required
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
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

export default ResetPass;

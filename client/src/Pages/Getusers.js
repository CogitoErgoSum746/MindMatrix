import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../config';

function Getusers() {
  const { org_name, org_studentType, org_code } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authtoken = localStorage.getItem('authtoken');

    fetch(`${API_BASE_URL}/admin/getusersorg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': authtoken,
      },
      body: JSON.stringify({ org_name, org_studentType, org_code }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error('Error:', data.error);
        } else {
          setUsers(data.usersPerOrg);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [org_name, org_studentType, org_code]);


  const deleteUser = (username, email) => {
    const authtoken = localStorage.getItem('authtoken');

    fetch(`${API_BASE_URL}/admin/deleteuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': authtoken,
      },
      body: JSON.stringify({ username, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("user deleted successfully")
          const updatedUsers = users.filter(
            (user) => user.username !== username && user.email !== email
          );
          setUsers(updatedUsers);
        } else {
          console.error('Error deleting the user:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  const displayPDF = (username, email) => {
    const authtoken = localStorage.getItem('authtoken');

    let filePath = ``;
    fetch(`${API_BASE_URL}/admin/displaypdf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': authtoken,
      },
      body: JSON.stringify({ username: username, email: email }),
    })
      .then((response) => response.blob()) // Ensure the response is treated as a blob
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank'); // Open the PDF in a new tab
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Users for Organization: {org_name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user._id} className="p-4 bg-white shadow-md rounded-lg">
            <div>
              <p className="text-lg font-semibold">Username: {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Student Type:</strong> {user.studentType}</p>
            </div>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              onClick={() => deleteUser(user.username, user.email)}
            >
              Delete
            </button>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              onClick={() => displayPDF(user.username, user.email)}
            >
              Display PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Getusers;
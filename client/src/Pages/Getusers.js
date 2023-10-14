import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Getusers() {
  const { org_name, org_email, org_code } = useParams();
// console.log(org_name)
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authtoken = localStorage.getItem('authtoken');
    
    fetch('http://localhost:8001/admin/getusersorg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': authtoken,
      },
      body: JSON.stringify({ org_name, org_email, org_code }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error('Error:', data.error);
        } else {
          setUsers(data.usersPerOrg);
          console.log(data.usersPerOrg); // Update the state with fetched data
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [org_name, org_email, org_code]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Users for Organization: {org_name}</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Getusers;

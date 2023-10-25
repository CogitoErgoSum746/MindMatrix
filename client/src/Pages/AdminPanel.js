import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OrganizationCard from "../components/OrganizationCard";
import { API_BASE_URL } from "../config";

function AdminPanel() {
  const [organizations, setOrganizations] = useState([]);
  const [orgi_name, setName] = useState("");
  const [orgi_email, setEmail] = useState("");
  const [orgi_studentType, setType] = useState("");
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");


  const navigate = useNavigate();

  const authtoken = localStorage.getItem("authtoken");

  const Logout = () => {
    localStorage.clear();
    navigate("/login");
    // window.location.reload();
  };

  // Function to send an email with the organization details

  const handleSendCodeToEmail = async (org_name, org_email,org_studentType) => {
   
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(`${API_BASE_URL}/admin/sendcodetoemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authtoken: `${authtoken}`,
        },
        body: JSON.stringify({ org_name, org_email,org_studentType }),
        // Make sure org_email is the recipient's email address
      });
      console.log(org_studentType)
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Sending email failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during email sending:", error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/createorg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authtoken: `${authtoken}`,
        },
        body: JSON.stringify({ orgi_name, orgi_email, orgi_studentType }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Successfully Created");
        navigate("/admin");
      } else {
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during Creation:", error);
    }
  };

  const handleDeleteOrganization = async (org_name, org_email,  org_studentType,org_code,) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the organization "${org_name}"? This will delete all associated users.`
    );

    if (confirmDelete) {
      try {
        // const authtoken = localStorage.getItem('authtoken');
        await fetch(`${API_BASE_URL}/admin/deleteorg`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authtoken: `${authtoken}`,
          },
          body: JSON.stringify({ org_name, org_email, org_code,org_studentType}),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Successfully Deleted Organization");
              setOrganizations((prevOrganizations) =>
                prevOrganizations.filter((org) => org.org_code !== org_code)
              );
            } else {
              console.error(
                "Organization deletion failed:",
                response.statusText
              );
            }
          })
          .catch((error) => {
            console.error("Error during organization deletion:", error);
          });
      } catch (error) {
        console.error("Error during organization deletion:", error);
      }
    }
  };

  const getAllOrganization = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(`${API_BASE_URL}/admin/getallorgs`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authtoken: `${authtoken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setOrganizations(data.orgs);
      } else {
        console.error("Fetching organizations failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during fetching organizations:", error);
    }
  };

  const downloadPdf = async () => {
    // Check if the username and email exist in the database
    await fetch(`${API_BASE_URL}/admin/downloadpdf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: authtoken,
      },
      body: JSON.stringify({ username, email }),
    })
      .then(async (response) => {
        if (response.ok) {
          // Start the download process
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'feedback.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          alert('Downloaded Successfully');
        } else {
          alert('User is not valid.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while downloading the file.');
      });
  };


  useEffect(() => {
    getAllOrganization();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl mb-4">Admin Panel</h1>
      <div className="mb-4">
        <h2 className="text-xl">Register Organization</h2>
        <div className="flex">
          <input
            type="text"
            placeholder="username"
            value={orgi_name}
            onChange={(e) => setName(e.target.value)}
            className="w-1/3 p-2 border rounded mr-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={orgi_email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/3 p-2 border rounded mr-2"
          />
          <select
            value={orgi_studentType}
            onChange={(e) => setType(e.target.value)}
            className="w-1/3 p-2 border rounded mr-2"
          >
            <option value="">Select a student type</option>
            <option value="High school">High school</option>
            <option value="College">College</option>
            <option value="Professional">Professional</option>
          </select>
          {/* <input
            type="text"
            placeholder="Code"
            value={orgi_code}
            onChange={(e) => setCode(e.target.value)}
            className="w-1/3 p-2 border rounded mr-2"
          /> */}
          <button
            onClick={handleRegister}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
          {/* <div>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-1/3 p-2 border rounded mr-2"
            />
            <input
              type="email"
              placeholder="Enter User Email"
              value={email}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-1/3 p-2 border rounded mr-2"
            />

            <button
              onClick={downloadPdf}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Download Pdf
            </button>
          </div> */}
        </div>
      </div>
      <div>
        <h2 className="text-xl">Registered Organizations</h2>
        <button
          onClick={getAllOrganization}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Get All Organization
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {organizations.map((org, index) => (
            <OrganizationCard
              key={index}
              org={org}
              handleSendCodeToEmail={handleSendCodeToEmail}
              handleDeleteOrganization={handleDeleteOrganization}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Link to="/login" className="text-blue-500">
          <button onClick={Logout} className="py-1 px-2 bg-blue-400 text-white">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPanel;

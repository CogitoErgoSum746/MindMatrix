import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import { toast, ToastContainer } from "react-toastify";
import { FaBuilding, FaUsers } from 'react-icons/fa';
import "react-toastify/dist/ReactToastify.css";

function AdminPanel() {
  const [organizations, setOrganizations] = useState([]);
  const [OrgUsers, setOrgUsers] = useState([]);
  const [DUsers, setDUsers] = useState([]);
  const authtoken = localStorage.getItem("authtoken");
  const navigate = useNavigate();

  useEffect(() => {
    if (authtoken) {
      const toastMessage = localStorage.getItem("toastMessage");
      if (toastMessage) {
        toast.success(toastMessage, {
          autoClose: 5000,
        });

        // Clear the success message from local storage
        localStorage.removeItem("toastMessage");
      }
      getAllData();
    } else {
      // Clear the success message from local storage
      localStorage.removeItem("toastMessage");
      navigate("/login");
    }
  }, [authtoken]);

  const getAllData = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authtoken: `${authtoken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOrganizations(data.totalOrg);
        setOrgUsers(data.totalOrgUsers);
        setDUsers(data.totalDirectUsers);
      } else {
        console.error("Fetching data failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-gray-100 to-gray-200">
      <p className="text-3xl font-bold mb-4 text-blue-700">Welcome, Admin!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <FaBuilding className="text-4xl text-blue-500" />
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">Total Organizations</p>
            <p className="text-lg">{organizations}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <FaUsers className="text-4xl text-green-500" />
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">Total Organization Users</p>
            <p className="text-lg">{OrgUsers}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="mr-4">
            <FaUsers className="text-4xl text-red-500" />
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">Total Non-Organization Users</p>
            <p className="text-lg">{DUsers}</p>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>

  );
}

export default AdminPanel;
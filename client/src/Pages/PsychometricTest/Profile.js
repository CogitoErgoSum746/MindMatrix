import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logout from "../../images/logout.png";
import { API_BASE_URL } from "../../config";
import Footer from "../../components/HomePage/Footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Test() {
    const [userData, setUserData] = useState("");
    const [profileForm, setProfileForm] = useState({
        gender: "",
        address: "",
        contactNumber: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const authtoken = localStorage.getItem("authtoken");
    const navigate = useNavigate();

    useEffect(() => {
        if (authtoken) {
            fetchUserData();
        }
    }, [authtoken]);

    const fetchUserData = async () => {
        const authtoken = localStorage.getItem("authtoken");
        try {
            const response = await fetch(`${API_BASE_URL}/user/getuser`, {
                method: "GET",
                headers: {
                    authtoken: authtoken,
                },
            });

            if (response.ok) {
                const data = await response.json();

                if (data.status === "success" && data.results === 1) {
                    const userData = data.data.user;
                    setUserData(userData);
                } else {
                    console.error("Error: User data retrieval failed.", data);
                }
            } else {
                console.error("Error: Request failed with status", response.status);
            }
        } catch (error) {
            console.error("Network error", error);
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/psychometrictest/getstarted');
    };

    const handleProfileFormChange = (e) => {
        setProfileForm({
            ...profileForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleProfileFormSubmit = async (e) => {
        e.preventDefault();
        // Add logic to submit the form data
        console.log("Form submitted:", profileForm);

        // Simulating a successful form submission
        // Replace the following with actual API call
        setTimeout(() => {
            setFormSubmitted(true);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="relative bg-gray-400 p-4 flex justify-between items-center">
                <Link to="/test">
                    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 text-left font-semibold uppercase">
                        {"<"} Go Back
                    </button>
                </Link>
                <h1 className="text-4xl font-bold">User Profile</h1>
                <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 text-left font-semibold uppercase flex flex-row items-center mr-1"
                >
                    <img src={logout} alt="Logout" className="w-5 h-5 mr-2" />
                    Logout
                </button>
            </div>

            <div className="container mx-auto mt-10 p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
                            <h2 className="text-3xl font-bold mb-4">Profile Details</h2>
                            <div>
                                <p><strong>Name:</strong> {userData.username}</p>
                                <p><strong>Email:</strong> {userData.email}</p>
                                <p><strong>Age:</strong> {userData.age}</p>
                                <p><strong>Student Type:</strong> {userData.studentType}</p>
                            </div>
                        </div>

                        {/* Add more profile details as needed */}
                    </div>

                    {!formSubmitted && (
                        <div>
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold mb-4">Complete Your Profile</h2>
                                <form onSubmit={handleProfileFormSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="gender" className="block text-sm font-semibold text-gray-600">Gender</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={profileForm.gender}
                                        onChange={handleProfileFormChange}
                                    >
                                        <option value="">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-sm font-semibold text-gray-600">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={profileForm.address}
                                        onChange={handleProfileFormChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-600">Contact Number</label>
                                    <input
                                        type="tel"
                                        id="contactNumber"
                                        name="contactNumber"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={profileForm.contactNumber}
                                        onChange={handleProfileFormChange}
                                    />
                                </div>
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-orange-500 to-yellow-500 text-gray-600 p-2 rounded-md"
                                    >
                                        Save Profile
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
            <ToastContainer autoClose={3000} />
        </div>
    );
}

export default Test;

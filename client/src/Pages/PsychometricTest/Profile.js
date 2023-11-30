import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logout from "../../images/logout.png";
import { API_BASE_URL } from "../../config";
import Footer from "../../components/HomePage/Footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

function Test() {
    const [userData, setUserData] = useState("");
    const [profileForm, setProfileForm] = useState({
        gender: "",
        address: "",
        contactNumber: null,
    });

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

    const ProfileDetail = ({ label, value }) => (
        <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="mb-4 cursor-hover"
        >
            <div className="flex flex-row gap-3">
            <p className="text-lg font-semibold text-gray-600">{label.toUpperCase()} :</p>
            <p className="text-black text-md font-light">{value || "N/A"}</p>
            </div>
        </motion.div>
    );

    // const handleLogout = () => {
    //     localStorage.clear();
    //     navigate('/psychometrictest/getstarted');
    // };

    const handleProfileFormChange = (e) => {
        setProfileForm({
            ...profileForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleProfileFormSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (profileForm.address.trim().length < 5) {
            toast.error("Please enter a valid address.", { position: toast.POSITION.TOP_CENTER });
            return;
        }

        if (!/^\d{10}$/.test(profileForm.contactNumber)) {
            toast.error("Please enter a valid 10-digit contact number.", { position: toast.POSITION.TOP_CENTER });
            return;
        }

        fetch(`${API_BASE_URL}/user/userprofile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authtoken: authtoken,
            },

            body: JSON.stringify({
                gender: profileForm.gender,
                address: profileForm.address,
                contact: profileForm.contactNumber,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("You have successfully completed your profile.");
                    window.location.reload();
                } else {
                    alert("Failure in completing your profile");
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error("Error completing the profile:", error);
            });
    };

    return (
        <div className="min-h-screen bg-[#f3e8dd]">
            <div className="p-4 flex justify-center items-center">
                <h1 className="text-4xl font-bold text-gray-700">User Profile</h1>
            </div>

            <div className="container mx-auto mt-10 p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-200 p-8 rounded-lg shadow-lg mb-6">
                        <h2 className="text-3xl font-bold mb-4 text-gray-700">Profile Details</h2>
                        <div className="border-t border-blue-500 border-b-2 my-4"></div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <ProfileDetail label="Name" value={userData.username} />
                            <ProfileDetail label="Email" value={userData.email} />
                            <ProfileDetail label="Age" value={userData.age} />
                            <ProfileDetail label="Test Type" value={userData.studentType} />
                            <ProfileDetail label="Gender" value={userData.gender} />
                            <ProfileDetail label="Address" value={userData.address} />
                            <ProfileDetail label="Contact No." value={userData.contact} />
                        </div>
                    </div>


                    {!userData.gender && (
                        <div>
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold mb-4">Complete Your Profile</h2>
                                <form onSubmit={handleProfileFormSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="gender" className="block text-md font-semibold text-gray-600 text-left mb-1">Gender</label>
                                        <select
                                            id="gender"
                                            name="gender"
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            value={profileForm.gender}
                                            onChange={handleProfileFormChange}
                                        >
                                            <option value="">Select gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="address" className="block text-md font-semibold text-gray-600 text-left mb-1">Address</label>
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
                                        <label htmlFor="contactNumber" className="block text-md font-semibold text-gray-600 text-left mb-1">Contact Number</label>
                                        <input
                                            type="number"
                                            id="contactNumber"
                                            name="contactNumber"
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            value={profileForm.contactNumber || ""}
                                            onChange={handleProfileFormChange}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold p-2 rounded-full"
                                    >
                                        Save Profile
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
                <div className="text-left mt-5">
                <Link to="/test">
                    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 text-left font-semibold uppercase">
                        {"<"} Go Back
                    </button>
                </Link>
                </div>
            </div>
           
            <Footer />
            <ToastContainer autoClose={3000} />
        </div>
    );
}

export default Test;
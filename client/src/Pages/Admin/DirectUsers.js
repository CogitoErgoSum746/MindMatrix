import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config";
import "react-toastify/dist/ReactToastify.css";

function AdminDirectUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState({ name: "", email: "", studentType: "", });
    const [copySuccess, setCopySuccess] = useState('');

    useEffect(() => {
        const authtoken = localStorage.getItem('authtoken');

        fetch(`${API_BASE_URL}/admin/getalldirectusers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': authtoken,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.error('Error:', data.error);
                } else {
                    setUsers(data.alldirectusers);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, []);


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

    const handleSearchInputChange = (event, field) => {
        setSearchQuery((prevSearch) => ({ ...prevSearch, [field]: event.target.value }));
    };


    const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().startsWith(searchQuery.name.toLowerCase()) &&
        user.email.toLowerCase().startsWith(searchQuery.email.toLowerCase()) &&
        user.studentType.toLowerCase().startsWith(searchQuery.studentType.toLowerCase())
    );

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopySuccess('Copied!');
                setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
            })
            .catch(() => setCopySuccess('Failed to copy. Please copy manually.'));
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 ml-auto">
            <h2 className="text-3xl font-bold mb-5 text-center py-5 bg-green-100 rounded-md sm:py-10">Direct Users</h2>

            <div className="flex flex-col items-center mb-5">
                <div className="relative mb-2 w-full flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500 mx-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                    <p className="text-xl font-bold mx-4">Search using Filters</p>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery.name}
                        onChange={(e) => handleSearchInputChange(e, "name")}
                        className="p-2 mb-2 sm:mb-0 sm:ml-2 border rounded w-full sm:w-auto"
                    />
                    <input
                        type="text"
                        placeholder="Search by email"
                        value={searchQuery.email}
                        onChange={(e) => handleSearchInputChange(e, "email")}
                        className="p-2 mb-2 sm:mb-0 sm:ml-2 border rounded w-full sm:w-auto"
                    />
                    <input
                        type="text"
                        placeholder="Search by test type"
                        value={searchQuery.studentType}
                        onChange={(e) => handleSearchInputChange(e, "studentType")}
                        className="p-2 mb-2 sm:mb-0 sm:ml-2 border rounded w-full sm:w-auto"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers.map((user) => (
                    <div
                        key={user._id}
                        className="bg-indigo-200 hover:bg-indigo-100 text-gray-800 rounded-lg shadow-md p-4 m-2 transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => copyToClipboard(user.email)}
                    >
                        <div>
                            <p className="text-lg font-bold mb-1">Username: {user.username}</p>
                            <p className="text-sm"><strong>Email:</strong> {user.email}</p>
                            <p className="text-sm"><strong>Student Type:</strong> {user.studentType}</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <button
                                className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700 hover:text-white mr-1"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteUser(user.username, user.email);
                                }}
                            >
                                Delete
                            </button>
                            <button
                                className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-700 hover:text-white"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    displayPDF(user.username, user.email);
                                }}
                            >
                                Display PDF
                            </button>
                        </div>
                    </div>
                ))}
                {copySuccess && (
                    <div className="fixed top-5 right-5 bg-yellow-500 text-white p-2 rounded">
                        {copySuccess}
                    </div>
                )}
            </div>
        </div>

    );
}

export default AdminDirectUsers;
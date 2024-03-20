import React from "react";

function PaymentForm({ isOpen, handleClose, email, name, contact, age, handleInputChange, handleNextButtonClick, amount }) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <button onClick={handleClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              required
              className="block w-full mb-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleInputChange}
              required
              className="block w-full mb-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <label htmlFor="contact" className="block mb-2">Contact:</label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={handleInputChange}
              required
              className="block w-full mb-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <label htmlFor="age" className="block mb-2">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={handleInputChange}
              required
              className="block w-full mb-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            { name && email && contact && age && 
            <button
            onClick={handleNextButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
            }
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentForm;

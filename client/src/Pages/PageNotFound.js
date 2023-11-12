import React from 'react';
import { Link } from 'react-router-dom';
import pgnot from "../images/pagenotfound.png"

const PageNotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10 flex items-center justify-center  flex-col">
      <img src={pgnot} className="w-80 h-80 mb-10"></img>
      <Link to="/">
      <button className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full font-semibold text-white">Back to home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
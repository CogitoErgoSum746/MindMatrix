import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, description ,url}) => {
  return (
    <div className="flex items-center justify-center">
    <div className="max-w-sm mx-2 rounded overflow-hidden shadow-lg">
      <img src={imageUrl} alt="Card Image" className="w-full h-40 object-cover object-scale-down" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={url}>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full">
            Know More
            </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Card;

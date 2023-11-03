import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, description ,url}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imageUrl} alt="Card Image" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={url}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Know More
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

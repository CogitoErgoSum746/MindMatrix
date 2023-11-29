import React from 'react';
import { Link } from 'react-router-dom';
import cert from '../../../src/images/landingPage/certification.webp';

const Certification = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-5 justify-between">
      <div className="flex flex-col gap-3 self-center">
        <img src={cert} className="md:hidden" alt="Hidden on medium screens" width="350" height="250" />
        <h2 className="text-black text-xl md:text-2xl lg:text-4xl font-semibold font-inter md-5">
          CERTIFICATION PROGRAM
        </h2>
        <p className="text-neutral-700 lg:text-xl font-semibold font-inter">
          Begin Your Success Journey Getting Certified
        </p>
        <div className="flex justify-center">
          <ul className="list-disc text-left lg:text-lg font-inter">
            <li>NLP Practitioner</li>
            <li>NLP Master Practitioner</li>
            <li>Emotional Intelligence Practitioner</li>
            <li>Counselling Skills and Therapies</li>
          </ul>
        </div>
        <Link to="/certificate">
          <button className="px-4 py-2 mt-4 ml-8 font-semibold text-black bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 border-gray-500 rounded-md shadow-lg transition-transform transform hover:translate-x-2">
            Know More
          </button>
        </Link>
        {/* Uncomment the following lines if you want to add a link to view certifications */}
        {/* <Link to="">
          <p className="text-neutral-700 text-lg font-semibold font-source-sans-pro mt-5">
            <u>View Certification</u>
          </p>
        </Link> */}
      </div>
      <div className="self-center">
        <img src={cert} className="hidden md:block" alt="Hidden on small screens" width="100%" height="auto" />
      </div>
    </div>
  );
};

export default Certification;

import React from 'react';
import { Link } from "react-router-dom";
import img6 from "../../../src/images/landingPage/image-6.webp";
import img7 from "../../../src/images/landingPage/image-7.webp";
import oct from "../../../src/images/Octahedron.png";

const TextSection2 = () => {
  return (
    <div className="flex flex-col py-10 gap-9">
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="self-center"> 
        <img src={img6} className="md:hidden"></img>
          <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter'] mb-2">
            STUDENT - TEACHER - PARENT
          </div>
          <div className=" text-black text-xl md:text-3xl font-bold lg:text-3xl font-['Inter'] mb-10">
            CONNECT
          </div>
          <div className="text-black font-extrabold text-sm md:text-base lg:text-xl font-['Inter']  ">
            <div className='flex gap-2'>
              <img src={oct}></img>
              <p>
                Accelerate Your Learning
              </p>
            </div>
            <div className='flex gap-2'>
              <img src={oct}></img>
              <p>
                Unleash Your Potential
              </p>
            </div>
            <div className='flex gap-2'>
              <img src={oct}></img>
              <p>
                Peak Your Performance
              </p>
            </div>
            <div className='flex gap-2'>
              <img src={oct}></img>
              <p>
                Sustain Your Diligence
              </p>
            </div>
          </div>
          <Link to="/training">
          <button className="px-4 py-2 mt-4 ml-8 font-semibold text-black bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 rounded-md shadow-lg transition-transform transform hover:translate-x-2">
              Know More
            </button>
          </Link>
        </div>
        <div className='self-center'>
          <img src={img6} className="hidden md:block"></img>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between ">
        <div className='self-center'>
          <img src={img7}></img>
        </div>
        <div className="self-center">
          <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter'] mb-8">
            CORPORATE EXECUTIVE LEADERSHIP
          </div>
          <div className="text-gray-400 text-lg md:text-xl lg:text-2xl font-['Inter']">
            <p>
              NLP For Business Mastery & Leadership Mastery
            </p>
            <p>
              Unleash Your Potential & Build A Stronger Team!
            </p>
            <p>
              Do More Than Train.
            </p>
          </div>
          <div className=" text-black text-xl md:text-2xl font-bold lg:text-3xl font-['Inter']">
            Engage, Inspire And Motivate.
          </div>
          <Link to="/training">
          <button className="px-4 py-2 mt-4 ml-8 font-semibold text-black bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 rounded-md shadow-lg transition-transform transform hover:translate-x-2">
              Know More
            </button>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default TextSection2
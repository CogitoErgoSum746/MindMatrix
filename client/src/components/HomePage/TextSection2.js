import React from 'react';
import { Link } from "react-router-dom";
import img6 from "../../../src/images/image 6.png";
import img7 from "../../../src/images/image 7.png";
import oct from "../../../src/images/Octahedron.png";

const TextSection2 = () => {
  return (
    <div className="flex flex-col py-10 gap-9">
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="self-center">
          <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter'] mb-5">
            Student - Teacher - Parent Connect
          </div>
          <div className="text-black font-extrabold text-sm md:text-base lg:text-lg font-['Inter']  ">
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
          <Link to="/upcoming">
            <button className="px-3 py-2 bg-transparent border mt-4 border-black font-medium hover:bg-black hover:text-white">
              Know More
            </button>
          </Link>
        </div>
        <div className='self-center'>
          <img src={img6}></img>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between ">
        <div className='self-center'>
          <img src={img7}></img>
        </div>
        <div className="self-center">
          <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter'] mb-5">
            Corporate Executive Leadership
          </div>
          <div className="text-gray-400 text-lg md:text-xl lg:text-2xl font-['Inter']">
            <p>
              NLP For Business Mastery & Leadership Mastery
            </p>
            <p>
              Unleash Your Potential & Build A Strogner Team!
            </p>
            <p>
              Do More Than Train.
            </p>
          </div>
          <div className=" text-black text-xl md:text-2xl font-bold lg:text-3xl font-['Inter']">
            Engage, Inspire And Motivate.
          </div>
          <Link to="/corporate">
            <button className="px-3 py-2 bg-transparent border mt-4 border-black font-medium hover:bg-black hover:text-white">
              Know More
            </button>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default TextSection2
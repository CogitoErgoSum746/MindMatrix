import React from 'react'
import img6 from "../../../src/images/image 6.png";
import img7 from "../../../src/images/image 7.png";

const TextSection2 = () => {
  return (
    <div className="flex flex-col py-10 gap-9">
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="self-center text-left">
          <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter'] mb-5">
          Student - Teacher - Parent Connect
          </div>
          <div className="text-black font-extrabold text-sm md:text-base lg:text-lg font-['Inter']">
            <p>
            Accelerate Your Learning
            </p>
            <p>
            Unleash Your Potential
            </p>
            <p>
            Peak Your Performance
            </p>
            <p>
            Sustain Your Diligence
            </p>
          </div>
          <button className="px-3 py-2 bg-transparent border mt-4 border-black font-medium">
                Know More
        </button>
        </div>
        <div className='self-center'>
          <img src={img6}></img>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between ">
        <div className='self-center'>
          <img src={img7}></img>
        </div>
        <div className="self-center text-left">
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
          <button className="px-3 py-2 bg-transparent border mt-4 border-black font-medium">
                Know More
        </button>
        </div>
      </div>


    </div>
  )
}

export default TextSection2
import React from 'react'
import { Link } from 'react-router-dom'
import cert from "../../../src/images/certification.png";

const Certification = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-5 justify-between">
      <div className='flex flex-col gap-3 self-center'>
        <h1 className="text-black text-xl md:text-2xl lg:text-4xl font-semibold font-['Inter'] md-5">
          CERTIFICATION PROGRAM
        </h1>
        <p className="text-neutral-700 lg:text-xl  font-semibold font-['Inter']">
          Begin Your Success Journey Getting  Certified
        </p>
        <div className='flex justify-center'>
          <ul className="list-disc text-left lg:text-lg font-['Inter']">
            <li>NLP Practitioner </li>
            <li>NLP Master Practitioner </li>
            <li>Emotional Intelligence Practitioner</li>
            <li>Counselling Skills and Therapies</li>
          </ul>
        </div>
        <Link to="/upcoming">
          <button className="px-7 py-3 bg-black text-white font-normal font-['Inter'] justify-center items-center inline-flex hover:bg-white hover:text-black border-2 border-black">
            Know More
          </button>
        </Link>
        {/* <Link to="">
              <p className="text-neutral-700 text-lg font-semibold font-['Source Sans Pro'] mt-5">
                <u>View Certification</u>
              </p>
            </Link> */}
      </div>
      <div className='self-center'>
      <img src={cert}></img>
      </div>
    </div>
  )
}

export default Certification
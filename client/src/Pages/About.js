import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from "react-router-dom"

function About() {
  return (
    <>
    <Navbar />
    <div>
    <div
          className="py-20 bg-neutral-500 w-full"
          id="discover"
          style={{ height: "700px" }}
        >
          <h1 className="text-white text-3xl text-center font-bold mt-40">
            Unlock Your Limitless Potential
          </h1>
          <h1 className="text-white text-3xl text-center font-bold">
            Counselling Therapy
          </h1>
          <p className="text-white text-center mt-1">
            Personal Resourcefulness and Professional Excellence
          </p>
          <p className="text-white text-center mt-8">
            NLP + Neuroscience + Emotional Intelligence + Cognitive Psychology +
            Meta Cognition{" "}
          </p>
          <p className="text-white font-semibold mb-5">
            = Next –Level Mind Mastery
          </p>
          <div className="flex flex-row justify-center">
            <Link to="/getstarted">
              <button className="w-32 h-11 px-6 py-3 bg-black text-center text-white font-normal font-['Inter']justify-center items-center inline-flex mr-3">
                Get Started
              </button>
            </Link>
            <button className="w-32 h-11 px-5 py-3 bg-transparent border  border-white text-center text-white font-normal font-['Inter'] justify-center items-center inline-flex">
              Learn More
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default About
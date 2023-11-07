import React from "react";
import { Link } from "react-router-dom";
import img3 from "../../../src/images/image 3.png";
import img4 from "../../../src/images/image 4.png";
import img5 from "../../../src/images/image 5.png";
import oct from "../../../src/images/Octahedron.png";

const TextSection1 = () => {
  return (
    <div className="flex flex-col py-10 gap-9">

      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="self-center">
          <img src={img4}></img>
        </div>
        <div className="self-center">
          <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter']">
            MIND WELLNESS
          </div>
          <div className=" text-black text-xl md:text-2xl font-semibold lg:text-3xl font-['Inter']">
            Counselling Therapy
          </div>
          <div className="text-black text-xl mt-4 font-semibold font-['Inter'] ">
            Talk Resolve Heal
          </div>
          <div className=" text-neutral-700 font-['Source Sans Pro']">
            100% Safe and Secure Platform
          </div>
          <div className="flex justify-around my-4 font-bold text-base lg:text-xl">
            <div className='flex gap-1 lg:gap-2'>
              <img src={oct}></img>
              <p>Remedial</p>
            </div>
            <div className='flex gap-1 lg:gap-2'>
              <img src={oct}></img>
              <p>Promotional</p>
            </div>
            <div className='flex gap-1 lg:gap-2'>
              <img src={oct}></img>
              <p>Preventive</p>
            </div>
          </div>
          <div className=" text-black text-lg md:text-xl font-semibold  lg:text-2xl font-['Inter'] mb-2">
            Get Rid of
          </div>
          <ul class="list-disc text-left">
            <div class="grid grid-cols-2 lg:grid-cols-4">
              <li>Stress</li>
              <li>Anxiety</li>
              <li>Panic Attacks</li>
              <li>Anger</li>
              <li>Fear</li>
              <li>Depression</li>
              <li>Low mood</li>
              <li>Phobias</li>
              <li>Shame</li>
              <li>Sadness</li>
              <li>Guilt</li>
              <li>Addiction</li>
              <li>OCD</li>
              <li>PTSD</li>
              <li>Relationship Issues</li>
              <li>ADHD & Teenage Issues</li>
            </div>
          </ul>
          <Link to="/mindwellness">
            <button className="px-3 py-2 bg-transparent border mt-4 border-black font-medium hover:bg-black hover:text-white">
              Know More
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between " id="services">
        <div className="self-center">
          <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter'] py-10">
            PSYCHOMETRIC TESTS & CAREER GUIDANCE
          </div>
          <p className=" text-black text-base md:text-xl lg:text-2xl font-['Inter']">
            Neuro-cognitive-emotional Intelligence Behaviour Competency Mapping
          </p>
          <p className=" text-black text-base md:text-xl lg:text-2xl font-['Inter'] mt-2">
            Find Your Stream of Learning- Carer Pathway by the most scientific
            way!
          </p>
          <div className=" text-black text-xl md:text-3xl font-semibold lg:text-4xl font-['Inter'] mt-6">
            Your Dynamic Path to Total Success
          </div>
          <div className="mt-4">
            <Link to="/getstarted">
              <button className="px-3 py-2 bg-transparent border mt-4 border-black font-medium hover:bg-black hover:text-white">
                Get Started
              </button>
            </Link>
            <Link to="/psychometrictest">
              <button className="px-3 py-2 bg-transparent border mt-4 ml-8 border-black font-medium hover:bg-black hover:text-white">
                Know More
              </button>
            </Link>
          </div>
        </div>
        <div className="self-center">
          <img src={img5}></img>
        </div>
      </div>
    </div>
  );
};

export default TextSection1;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import img3 from "../../../src/images/landingPage/image-3.webp";
import img4 from "../../../src/images/landingPage/image-4.webp";
import img5 from "../../../src/images/landingPage/image-5.webp";
import oct from "../../../src/images/Octahedron.png";

const TextSection1 = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation when the component mounts
    setFadeIn(true);

    // Function to preload the image
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    // Call the function to preload the image
    preloadImage(img4);
  }, []);

  return (
    <div className={`opacity-0 ${fadeIn ? 'opacity-100 transition-opacity duration-1000' : ''} ${fadeIn ? 'transform translate-y-0' : 'transform translate-y-[-50px] transition-transform duration-1000'}`}>
      {/* Update the head dynamically with Helmet */}
      <Helmet>
        <link rel="preload" as="image" href={img4} />
      </Helmet>
      <div className="flex flex-col py-3 gap-9">

        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div className="self-center">
            <img src={img4} className="md:hidden" alt="Hidden on medium screens" />
            <img src={img4} className="hidden md:block" alt="Hidden on small screens" />
          </div>
          <div className="self-center">
            <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter']">
              MIND WELLNESS
            </div>
            <div className=" text-black text-xl md:text-2xl font-semibold lg:text-3xl font-['Inter']">
              Counselling Therapy
            </div>
            <div className="text-black text-xl mt-4 font-semibold font-['Inter'] ">
              Talk | Resolve | Heal
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
              <button className="px-4 py-2 mt-4 ml-8 font-semibold text-black bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 rounded-md shadow-lg transition-transform transform hover:translate-x-2">
                Know More
              </button>
            </Link>
            {/* <a href="/mindwellness" className="px-4 py-2 mt-4 ml-8 font-semibold text-black bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 rounded-md shadow-lg transition-transform transform hover:translate-x-2">
              Know More
            </a> */}

          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-between " id="services">
          <div className="self-center">
            <img src={img5} className="md:hidden"></img>
            <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter'] py-10">
              PSYCHOMETRIC TESTS & CAREER GUIDANCE
            </div>
            <p className=" text-black text-base md:text-xl lg:text-2xl font-['Inter']">
              Neuro-cognitive-emotional Intelligence Behaviour Competency Mapping
            </p>
            <p className=" text-black text-base md:text-xl lg:text-2xl font-['Inter'] mt-2">
              Find Your Stream of Learning- Career Pathway by the Most Scientific
              Way!
            </p>
            <div className=" text-black text-xl md:text-3xl font-semibold lg:text-4xl font-['Inter'] mt-6">
              Your Dynamic Path to Total Success
            </div>
            <div className="mt-4">
              <Link to="/getstarted">
                <button className="px-4 py-2 mt-4 ml-8 font-semibold text-black bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 rounded-md shadow-lg transition-transform transform hover:translate-x-2">
                  Get Started
                </button>
              </Link>
              <Link to="/psychometrictest">
                <button className="px-4 py-2 mt-4 ml-8 font-semibold text-black bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 rounded-md shadow-lg transition-transform transform hover:translate-x-2">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className="self-center">
            <img src={img5} className="hidden md:block"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection1;
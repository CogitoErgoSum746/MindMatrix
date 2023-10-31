import React from "react";
import img3 from "../../../src/images/image 3.png";
import img4 from "../../../src/images/image 4.png";
import img5 from "../../../src/images/image 5.png";

const TextSection1 = () => {
  return (
    <div className="flex flex-col py-10 gap-9">
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="self-center text-left">
          <div className="text-neutral-700 text-base md:text:lg lg:text-xl font-['Source Sans Pro']">
            Unveiling the Fusion of
          </div>
          <div className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter']">
            Neurocognitive Emotional Behavior (NCEB)
          </div>
          <div className="text-black text-sm md:text-base lg:text-lg font-['Inter']">
            <p>
              Neuro-cognitive-emotional Intelligence Behaviour Competency
              Mapping.
            </p>
            <p>
              Find Your Stream of Learning- Carer Pathway by the most scientific
              way!
            </p>
          </div>
          <div className="flex justify-around mt-4 font-bold">
            <div>
              <p>Remedial</p>
            </div>
            <div>
              <p>Promotional</p>
            </div>
            <div>
              <p>Preventive</p>
            </div>
          </div>
        </div>
        <div className='self-center'>
          <img src={img3}></img>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className='self-center'>
          <img src={img4}></img>
        </div>
        <div className="self-center text-left">
          <div className=" text-black text-2xl md:text-3xl font-bold lg:text-4xl font-['Inter'] mb-2">
            Get Rid of
          </div>
          <ul class="list-disc">
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
          <div className="text-black text-xl mt-4 font-semibold font-['Inter'] ">
            Talk Resolve Heal
          </div>
          <div className=" text-neutral-700 font-['Source Sans Pro']">
            100% Safe and Secure Platform
          </div>
          <button className="px-3 py-2 bg-transparent border mt-4 border-black font-medium">
            Get In Touch
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between ">
        <div className="self-center text-left">
          <div className=" text-black text-xl md:text-3xl font-semibold lg:text-4xl font-['Inter']">
            Psychometric Tests And Career Guidance
          </div>
           
          <div className="mt-4">
            <p className=" text-black text-xl md:text-3xl font-bold lg:text-4xl font-['Inter']">Your Dynamic Path to Total Success</p>
            <button className="px-3 py-2 bg-transparent border mt-4 border-black font-medium">
                Know More
            </button>
          </div>
        </div>
        <div className='self-center'>
          <img src={img5}></img>
        </div>
      </div>
    </div>
  );
};

export default TextSection1;

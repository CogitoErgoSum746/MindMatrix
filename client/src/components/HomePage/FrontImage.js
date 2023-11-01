import React from 'react';
import homebg from '../../../src/images/newbg.jpg';

const FrontImage = () => {
  return (
    <div>
      <div className="relative text-center">
        <img src={homebg} className="w-full" alt="Responsive Image" />
        <div className="absolute top-10 md:top-24 lg:top-36 transform -translate-y-1/2 text-white text-center w-full">
          <h1 className="text-xl md:text-5xl lg:text-7xl font-bold">
            Unlock Your Limitless Potential
          </h1>
          <h1 className="text-[8px] md:text-sm lg:text-2xl font-bold mt-0 md:mt-2 lg:mt-4">
            Personal Resourcefulness and Professional Excellence!
          </h1>
        </div>
        <div className='absolute top-1/2 text-white flex justify-around w-full'>
            <div className='w-1/4 text-right'>
              <h3 className='text-[6px] md:text-sm lg:text-2xl'>
                Unveiling the Fusion of
              </h3>
              <h1 className="text-xs md:text-xl lg:text-4xl font-semibold">
                Neurocognitive Emotional Behavior (NCEB)
              </h1>
            </div>
            <div className='w-1/4 text-left'>
              <h3 className='text-[6px] md:text-sm lg:text-2xl'>
              NLP + Neuroscience + Emotional Intelligence +  Cognitive Psychology = 
              </h3>
              <h1 className="text-xs md:text-xl lg:text-4xl font-semibold">
                Next –Level Mind Mastery
              </h1>
            </div>   
        </div>
      </div>
    </div>
  );
}

export default FrontImage;

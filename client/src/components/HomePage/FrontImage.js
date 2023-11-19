import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import homebg from '../../../src/images/newbg(lesser).webp';

const FrontImage = () => {
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
      preloadImage(homebg);
  }, []);

  return (
      <div>
        {/* Update the head dynamically with Helmet */}
      <Helmet>
        <link rel="preload" as="image" href={`${process.env.PUBLIC_URL}/images/landingPage/newbg(lesser).webp`} />
      </Helmet>
          <div className={`relative text-center opacity-0 ${fadeIn ? 'opacity-100 transition-opacity duration-1000' : ''} ${fadeIn ? 'transform translate-y-0' : 'transform translate-y-[-50px] transition-transform duration-1000'}`}>
              <img src={homebg} className="w-full" alt="Responsive Image" />
              <div className="absolute top-10 md:top-24 lg:top-36 transform -translate-y-1/2 text-white text-center w-full">
                  <h1 className="text-xl md:text-5xl lg:text-7xl font-bold">
                  Success Steps NLP Academy
                  </h1>
                  <h4 className="text-[10px] md:text-sm lg:text-2xl font-bold mt-0 md:mt-2 lg:mt-4">
                      Personal Resourcefulness and Professional Excellence!
                  </h4>
              </div>
              <div className='absolute top-1/2 text-white flex justify-around w-full'>
                  <div className='w-1/4 text-right'>
                      <h4 className='text-[6px] md:text-sm lg:text-2xl'>
                          Unveiling the Fusion of
                      </h4>
                      <h2 className="text-xs md:text-xl lg:text-4xl font-semibold">
                          Neurocognitive Emotional Behavior (NCEB)
                      </h2>
                  </div>
                  <div className='w-1/4 text-left'>
                      <h3 className='text-[6px] md:text-sm lg:text-2xl'>
                          NLP + Neuroscience + Emotional Intelligence + Cognitive Psychology =
                      </h3>
                      <h2 className="text-xs md:text-xl lg:text-4xl font-semibold">
                          Next –Level Mind Mastery
                      </h2>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default FrontImage;
import React from 'react';
import homebg from '../../../src/images/newbg.jpg';

const FrontImage = () => {
  return (
    <div>
      <div className="relative text-center">
        <img src={homebg} className="w-full" alt="Responsive Image" />
        <div className="absolute top-10 md:top-20 transform -translate-y-1/2 text-white text-center w-full">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
            Unlock Your Limitless Potential
          </h1>
          <h1 className="text-xs md:text-sm lg:text-lg font-bold mt-0 md:mt-2 lg:mt-4">
            Personal Resourcefulness and Professional Excellence!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FrontImage;

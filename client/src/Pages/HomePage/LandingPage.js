import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import FrontImage from "../../components/HomePage/FrontImage";
import TextSection1 from "../../components/HomePage/TextSection1";
import ImageGalary from "../../components/HomePage/ImageGalary";
import TextSection2 from "../../components/HomePage/TextSection2";
import SatisfiedClients from "../../components/HomePage/SatisfiedClients";
import Certification from "../../components/HomePage/Certification";
import GetInTouch from "../../components/HomePage/GetInTouch";
import { Helmet } from "react-helmet";

const NewHomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation when the component mounts
    setFadeIn(true);
  }, []);


  return (
    <>
      <Helmet>
        <title>UNLOCK YOUR LIMITLESS POTENTIAL</title>
        <meta name="description"
          content="We help you to discover the key to unleash your brain's super power 
          to achieve desired outcomes with our innovative approach to cognitive 
          excellence and emotional well-being." />

        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Helmet>
      <div>
        <Navbar />
        <FrontImage />
        <div className={`container mx-auto flex flex-col gap-16 px-2 opacity-0 ${fadeIn ? 'opacity-100 transition-opacity duration-1000' : ''} ${fadeIn ? 'transform translate-y-0' : 'transform translate-y-[-50px] transition-transform duration-1000'}`}>
          <TextSection1 />
          <TextSection2 />
          <Certification />
          <div className="border-t border-blue-500 border-b-2 my-1"></div>
          <SatisfiedClients />
          <ImageGalary />
          <div className="border-t border-blue-500 border-b-2 my-1"></div>
          <GetInTouch />
        </div>
      </div>
    </>
  );
};

export default NewHomePage;

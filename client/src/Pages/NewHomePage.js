import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import FrontImage from "../components/HomePage/FrontImage";
import TextSection1 from "../components/HomePage/TextSection1";
import ImageGalary from "../components/HomePage/ImageGalary";
import TextSection2 from "../components/HomePage/TextSection2";
import SatisfiedClients from "../components/HomePage/SatisfiedClients";
import Certification from "../components/HomePage/Certification";
import Contact from "../components/HomePage/Contact";
import GetInTouch from "../components/HomePage/GetInTouch";
import FloatingIcon from "../components/FloatingIcon";
import ScrollToTop from "../components/ScrollToTop";

const NewHomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation when the component mounts
    setFadeIn(true);
  }, []);


  return (
    <div>
        <div className={`opacity-0 ${fadeIn ? 'opacity-100 transition-opacity duration-400' : ''} ${fadeIn ? 'transform translate-y-0' : 'transform translate-y-[-50px] transition-transform duration-400'}`}>
          <Navbar />
        </div>
        <ScrollToTop />
        <FrontImage />
        <div className="container mx-auto flex flex-col gap-16 px-2">
          <TextSection1 />
          <TextSection2 />
          <Certification />
          <SatisfiedClients />
          <ImageGalary />
          <GetInTouch />
          <FloatingIcon />
        </div>
        <Contact />
    </div>
      );
};

      export default NewHomePage;

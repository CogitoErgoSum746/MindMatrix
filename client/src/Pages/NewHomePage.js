import React from "react";
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
  return (
    <div>
      <Navbar />
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
      <Contact/>
    </div>
  );
};

export default NewHomePage;

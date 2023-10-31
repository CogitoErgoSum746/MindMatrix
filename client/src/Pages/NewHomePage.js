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

const NewHomePage = () => {
  return (
    <div>
      <Navbar />
      <FrontImage />
      <div className="container mx-auto flex flex-col gap-16">
        <TextSection1 />
        <ImageGalary />
        <TextSection2 />
        <SatisfiedClients />
        <Certification />
        <GetInTouch />
        <FloatingIcon />
      </div>
        <Contact/>
    </div>
  );
};

export default NewHomePage;

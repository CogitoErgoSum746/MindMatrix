import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/HomePage/Contact";
import ScrollToTop from "../components/ScrollToTop";
import GetInTouch from "../components/HomePage/GetInTouch";

const Facilitative = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <GetInTouch />
      <Contact />
    </>
  );
};

export default Facilitative;
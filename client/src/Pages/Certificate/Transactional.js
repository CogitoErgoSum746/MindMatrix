import React from "react";
import Navbar from "../../components/Navbar";
import pic1 from "../../images/Certificate/Transactional/pic1.jpg";
import pic2 from "../../images/Certificate/Transactional/pic2.jpg";
import ScrollToTop from "../../components/ScrollToTop.js";
import { Helmet } from "react-helmet";

function Transactional() {
  return (
    <>
    <Helmet>
        <title>Transaction Analysis</title>

        <meta name="description" content=""/>

        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content=""/>

        <meta name="twitter:card" content=""/>
        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image" content=""/>
      </Helmet>
<ScrollToTop />
      <Navbar />
      <div className="container p-2 md:px-0 md:py-5 mx-auto flex flex-col gap-3">
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          TRANSACTIONAL ANALYSIS CERFIFICATION
        </p>
        <img src={pic1} className="max-h-96 self-center"></img>
        <p className="text-left text-base lg:text-xl">
          The transactional analysis certification program is a comprehensive
          and specialized training initiative designed to equip individuals with
          the skills and knowledge required to become certified transactional
          analysts. This program delves into the intricacies of transactional
          analysis, a powerful psychological framework that examines
          interpersonal relationships and communication patterns. Participants
          gain a deep understanding of how individuals interact, communicate,
          and navigate life's challenges. Through this program, they acquire the
          expertise needed to apply transactional analysis principles in
          therapeutic, educational, and organizational settings. Successful
          completion of the program leads to a certification that signifies
          competence in utilizing transactional analysis to promote healthier
          relationships and personal growth.
        </p>
        <img src={pic2} className="max-h-96 self-center"></img>
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          What do you Learn?
        </p>
        <ul className="list-decimal list-inside text-left text-base md:text-lg lg:text-xl ml-2 ">
          <li>Transactional Analysis</li>
          <li>Modern Transactional Analysis Theory</li>
          <li>The Psychology Of Relationships</li>
          <li>What Is A Transaction</li>
          <li>Structural Analysis</li>
          <li>
            PCA- Parent Ego State, The Adult Ego State, And The Child Ego State
          </li>
          <li>Life Positions</li>
        </ul>
      </div>
    </>
  );
}

export default Transactional;

import React from "react";
import Navbar from "../../components/Navbar";
import Contact from "../../components/HomePage/Contact";
import pic1 from "../../images/Certificate/Gestalt/pic1.jpg";
import pic2 from "../../images/Certificate/Gestalt/pic2.jpg";
import ScrollToTop from "../../components/ScrollToTop.js";
import { Helmet } from "react-helmet";

function Gestalt() {
  return (
    <>
    <Helmet>
        <title>Gestalt Psychotherapy</title>

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
          GESTALT PSYCHOTHERAPY
        </p>
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          Certification Program
        </p>
        <img src={pic1} className="max-h-96 self-center"></img>
        <p className="text-left text-base lg:text-xl">
          The gestalt psychotherapy certification program is a comprehensive and
          specialized training initiative that equips mental health
          professionals with the skills and knowledge needed to practice gestalt
          psychotherapy effectively. This program delves into the principles of
          gestalt therapy, emphasizing holistic and experiential approaches to
          understanding and healing the human psyche. Participants learn to
          facilitate self-awareness, explore the present moment, and address
          unresolved emotions and past experiences. Through supervised practice
          and theoretical instruction, individuals in this program develop
          proficiency in fostering emotional growth and helping clients find
          meaning and authenticity in their lives. Upon certification,
          therapists can provide profound therapeutic support rooted in gestalt
          principles, benefiting both themselves and their clients.
        </p>
        <img src={pic2} className="max-h-96 self-center"></img>
        <p className="text-xl md:text-2xl lg:text-4xl font-bold">
          What do you Learn?
        </p>
        <div className="p-4 text-left">
          <div className="">
            <h2 className="font-bold text-lg">
              Introduction To Gestalt Therapy
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>What Is Psychotherapy</li>
              <li>The Origins Of Gestalt Approach</li>
              <li>Psychoanalysis & Gestalt Approach</li>
              <li>Forms Of Psychotherapy</li>
              <li>Therapeutic Relationship In Gestalt Therapy</li>
            </ul>
            <p className="font-semibold text-lg">
              Philosophy And Principles In Gestalt Therapy
            </p>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>The ‘Self’ In Gestalt Therapy</li>
              <li>Gestalt ‘Present’ Awareness</li>
              <li>The Concept Of ‘Respect’</li>
              <li>The Concept Of 'Social Responsibility'</li>
              <li>The Concept Of 'Relationship' In Gestalt</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">The Essence & Principles</h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Phenomenological Method</li>
              <li>Dialogical Relationship</li>
              <li>Field Theoretical Strategies</li>
              <li>Experimental Freedom</li>
              <li>The Theory Of Change</li>
              <li>The Concept Of 'Mindfulness'</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">Gestalt Therapy Techniques</h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Exercise And Experiments</li>
              <li>The Empty Chair Technique</li>
              <li>Discussing ‘Dreams’ (Dream Work)</li>
              <li>Exaggeration & Repetition</li>
              <li>Guided Imagery And Fantasy</li>
              <li>Suppressive Techniques</li>
              <li>Working With ‘Unfinished Business’</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">Forms & Methods Of Therapy </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Working With Couples</li>
              <li>Working With Groups </li>
        
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">Pros & Cons Of Gestalt Therapy</h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>The Strengths Of Gestalt Approach</li>
              <li>Critiques & Limitations</li>
        
            </ul>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Gestalt;

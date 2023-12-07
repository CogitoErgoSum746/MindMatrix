import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import ScrollToTop from "../../components/common/ScrollToTop";
import { Helmet } from "react-helmet";

const Termsconds = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
      // Trigger the fade-in animation when the component mounts
      setFadeIn(true);
  }, []);

  return (
    <>
    <Helmet>
        <title>Terms & Conditions</title>

        <meta name="description" content=""/>

        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content=""/>

        <meta name="twitter:card" content=""/>
        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image" content=""/>
      </Helmet>
      <Navbar />
      <ScrollToTop />
      <h1 className="text-5xl font-bold mb-2">Terms and Conditions</h1>
      <div className="container mx-auto mt-5 p-8 bg-white rounded-md shadow-md text-xl lg:text:2xl">

        <ol className="list-decimal pl-8 text-left">
          <li className="mb-4">
            <strong>Test Purpose:</strong> The psychometric test is designed to assess various cognitive abilities, personality traits, and other relevant factors. The results of this test may be used for academic, career, or personal development purposes.
          </li>

          <li className="mb-4">
            <strong>Test Confidentiality:</strong> All information and responses provided during the test will be kept confidential and used solely for assessment purposes. Personal information will not be shared with any third parties.
          </li>

          <li className="mb-4">
            <strong>Test Access:</strong> You are responsible for ensuring that you have the necessary equipment and internet access to complete the test. The company does not guarantee uninterrupted access to the test platform and is not responsible for technical issues on your end.
          </li>

          <li className="mb-4">
            <strong>Test Honesty:</strong> You must complete the test independently and honestly to get accurate results.
          </li>

          <li className="mb-4">
            <strong>Test Duration:</strong> The test has a specified time limit. You must complete it within the allotted time.
          </li>

          <li className="mb-4">
            <strong>Test Results:</strong> Test results will be provided to you upon completion. These results are for your personal use and reference. The company does not guarantee specific outcomes or decisions based on your test results.
          </li>

          <li className="mb-4">
            <strong>Test Ownership:</strong> The psychometric test and all related materials are the property of the company and are protected by copyright and intellectual property laws.
          </li>

          <li className="mb-4">
            <strong>Acceptance:</strong> By proceeding with the test, you acknowledge that you have read, understood, and agree to these terms and conditions. Your acceptance of these terms is a prerequisite for taking the psychometric test.
          </li>

          <li className="mb-4">
            <strong>Contact Information:</strong> For any questions or concerns regarding the tests, please contact at ‘successtepsnlpa@gmail.com’.
          </li>

          <li className="mb-4">
            <strong>Test Report Disclaimer:</strong> The information presents within the analysis is the sole property of its rightful owner. For minors, information rights are held by their legal guardians. The content of the analysis serves purely as a point of reference, grounded in scientific research within the realm of psychology, and founded upon statistical studies utilizing psychometric tests and counseling sessions.
          </li>
        </ol>

        <ul className="text-left">
          <li className="mt-4">
            The choice to adopt any instruction, advice, suggestion, or recommendation rests entirely upon your discretion, and you assume full responsibility for the ensuing outcomes. Neither our organization nor any of its representatives shall be held accountable for any consequences under any circumstances.
          </li>

          <li className="mt-4">
            Prior to making any significant decisions, it is strongly recommended that you consult with a professional counselor. The outcomes presented are indicative in nature, and the company or its authorized agents shall not bear any liability for setbacks in specific courses of study or activities as advised in the report, nor for any pivotal decisions found on the report.
          </li>

          <li className="mt-4">
            As such, the report should not be utilized as the sole instrument for important decision-making. The accuracy of test results may be influenced by the honesty and self-awareness of the individuals taking the test.
          </li>
        </ul>

        <h3 className="mt-4 font-semibold lg:text:3xl">
          Thank You!
        </h3>
      </div>

    </>
  );
};

export default Termsconds;
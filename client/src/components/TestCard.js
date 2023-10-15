// TestCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const TestCard = ({ testAlias,id }) => {

  const testAliasesToNames = {
    TMP: "Time Management and Procrastination",
    CM: "Concentration and Memory",
    CANT: "Study Aids and Note-Taking",
    TSTA: "Test Strategies and Test Anxiety",
    OPI:"Organizing and Processing Information",
    MA:"Motivation and Attitude",
    RSM:"Reading and Selecting the Main Idea",
    Writing:"Writing"

  };

  const testName= testAliasesToNames[testAlias] || testAlias;
  return (
    <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
        <Link to={`/test/${id}/${testAlias}`}>{testName}</Link>
        </div>
      </div>
    </div>
  );
};

export default TestCard;

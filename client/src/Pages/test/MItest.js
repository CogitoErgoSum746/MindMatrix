import React from 'react';
import { Link } from 'react-router-dom';

function Mltest({ id }) {
  const subtests = [
    { id: 1, name: 'Linguistic' },
    { id: 2, name: 'Logical' },
    { id: 3, name: 'Spatial' },
    { id: 4, name: 'Interpersonal' },
    { id: 5, name: 'Musical' },
    { id: 6, name: 'Naturalistic' },
    { id: 7, name: 'Intrapersonal' },
    { id: 8, name: 'Kinaesthetic' },
  ];

  return (
    <div className="bg-white min-h-screen p-10">
      <h1 className="text-2xl font-bold text-black mb-8 font-['Inter']">Multiple Intelligence</h1>
      <h1 className="text-black font-['Inter']">See Various career options</h1>
        <Link to="/test/2/careeropt">
          <button className=
          "bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-lg mb-4 font-['Inter']">Next</button>
        </Link>
        <div className='flex justify-start ml-5 mb-10'>
      <Link to="/test">
      <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-300 text-left font-semibold font-['Inter']">{"<"}Go Back</button>
      </Link>
      </div>
      <div className="grid gap-4">
        {subtests.map((subtest) => (
          <Link key={subtest.id} to={`/test/${id}/${subtest.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between hover:bg-gray-100 transition duration-300">
              <h3 className="text-lg font-semibold text-gray-800 font-['Inter']">{subtest.name}</h3>
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-white hover:text-white hover:bg-yellow-500 transition duration-300 font-['Inter']">
                Start Test
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Mltest;

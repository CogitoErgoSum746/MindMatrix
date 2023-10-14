import React from 'react';
import { Link} from 'react-router-dom';

function Spsatest({ id }) {
  const subtests = [
    { id: 1, name: 'Time Management and Procrastination' },
    { id: 2, name: 'Concentration and Memory' },
    { id: 3, name: 'Study Aids and Note-Taking' },
    { id: 4, name: 'Test Strategies and Test Anxiety' },
    { id: 5, name: 'Organizing and Processing Information' },
    { id: 6, name: 'Motivation and Attitude' },
    { id: 7, name: 'Reading and Selecting the Main Idea' },
    { id: 8, name: 'Writing' },
  ];


 

  return (
    <div className="bg-white min-h-screen p-10">
      <h1 className="text-2xl font-bold text-black mb-8">Study Skills Profile Assessment</h1>
      <div className="grid gap-4">
        {subtests.map((subtest) => (
          <Link key={subtest.id} to={`/test/${id}/${subtest.id}`}>
            <div className={'bg-white p-6 rounded-lg shadow-md flex items-center justify-between hover:bg-gray-100 transition duration-300'}>
              <h3 className="text-lg font-semibold text-gray-800">{subtest.name}</h3>
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-white hover:text-white hover:bg-yellow-500 transition duration-300">
                  Start Test
                </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Spsatest;

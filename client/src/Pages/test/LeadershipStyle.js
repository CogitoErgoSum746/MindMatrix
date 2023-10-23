import React from 'react'
import { Link } from 'react-router-dom';

function LeadershipStyle({id}) {
    const subtests = [
        { id: 1, name: 'Authoritative' },
        { id: 2, name: 'Democratic' },
        { id: 3, name: 'Facilitative' },
        {id:4, name: 'Situational'},
      ];
  return (
    <div className="bg-white min-h-screen p-10">
    <h1 className="text-2xl font-bold text-black mb-8">Leadership Style</h1>
    <div className='flex justify-start ml-5 mb-10'>
      <Link to="/test">
      <button className='bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-300 text-left font-semibold'>{"<"}Go Back</button>
      </Link>
      </div>
    <div className="grid gap-4">
      {subtests.map((subtest) => (
        <Link key={subtest.id} to={`/test/${id}/${subtest.id}`}>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between hover:bg-gray-100 transition duration-300">
            <h3 className="text-lg font-semibold text-gray-800">{subtest.name}</h3>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-white hover:text-white hover:bg-yellow-500 transition duration-300">
              Start Test
            </button>
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default LeadershipStyle
import React from 'react'
import { Link } from 'react-router-dom';
// import Ellipse1 from "../../images/Ellipse1.png"; 
// import Ellipse2 from '../../images/Ellipse2.png';
// import Ellipse3 from "../../images/Ellipse3.png";

function CDtest({id}) {
    const subtests = [
        { id: 1, name: 'Cyber Dependency' },
      ];
  return (
    <div className="bg-white min-h-screen p-10">
      <h1 className="text-2xl font-bold text-black mb-8">Cyber Dependency Test</h1>
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

export default CDtest
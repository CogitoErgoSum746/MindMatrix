import React,{useState} from 'react'
// import business from '../images/business1.png'
import { Link } from 'react-router-dom';
import Ellipse1 from "../images/Ellipse1.png"; 
import Ellipse2 from '../images/Ellipse2.png';
import Ellipse3 from "../images/Ellipse3.png";
import Navbar from '../components/Navbar';

function Test() {


    const [tests] = useState([
        { id: 1, name: 'Study Skill Profile Assessment', description: 'Description for Test 1' },
        { id: 2, name: 'Multiple Intelligence', description: 'Description for Test 2' },
        { id: 3, name: 'Left-Right Brain Dominance', description: 'Description for Test 3' },
        { id: 4, name: 'Personality Test', description: 'Description for Test 4' },
        { id: 5, name: 'Emotional Intelligence', description: 'Description for Test 5' },
        { id: 6, name: 'Learning Style Test', description: 'Description for Test 6' },
        { id: 7, name: 'Leadership Skills and Styles Test', description: 'Description for Test 7' },
        { id: 8, name: 'Leadership Style', description: 'Description for Test 8' },
        { id: 9, name: 'Cyber Dependency Test', description: 'Description for Test 9' },
        { id: 10, name: 'Competitive State Anxiety Inventory', description: 'Description for Test 10' },
        { id: 11, name: 'Students Wheel of Life', description: 'Description for Test 11' },
        { id: 12, name: 'Aptitude Test', description: 'Description for Test 12' },
      ]);


  return (
    <div>
      {/* <Navbar /> */}
     <div className="container bg-white min-h-screen ">
    <img src={Ellipse1} alt="business" className="absolute top-0 left-6 mb-20" height="100px"></img>
      <img src={Ellipse2} alt="business" width="700px" height="400px" className="absolute top-0 left-80" style={{marginBottom: 40}}></img>
      <img src={Ellipse3} alt="bbbnn" width="1600px" height="400px"></img>
      <h1 className="text-4xl font-semibold text-white absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-justify mb-20">
  GET ALL YOUR{' '} <br />
  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-clip text text-black space-y-2 " style={{ lineHeight: '1' }}>PSYCHOMETRIC</span> TESTS
  <br />
  HERE
</h1>

<div className='flex flex-col bg-white mt-10 p-10'>
     

{tests.map((test) => (
  <div
    key={test.id}
    className="w-full p-4 mb-4 rounded-lg border border-gray-300 shadow-lg flex items-center justify-between">
    <h1 className="text-lg font-semibold">{test.name}</h1>
    <Link to={`/test/${test.id}`}>
      <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full text-black">
        Start Test
      </button>
    </Link>
  </div>
))}

    </div>
    </div>
    
    </div>
  )
}

export default Test;
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import { useAuth } from '../AuthContext';
function Home1() {
  
  // const { loggedIn } = useAuth();
const navigate=useNavigate();
// console.log(loggedIn)

// const handleGetStarted = () =>{
//   if(loggedIn)
//   {
//     navigate('/test');
//   }
//   else{
//     alert('Please Login First')
//   }
// }
  return (
    <>
    <Navbar />
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto p-5">
        <h1 className='text-black text-center text-lg mb-2 font-bold'>PSYCHOMETRIC TESTS</h1>
        <p className='text-black text-center text-md mb-1 italic'>Every person possess a distinctive gift waiting to shine.</p>
        <p className='text-black text-center text-md mb-3 italic'>Discovering one's genuine passion is essential for every individual.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-white rounded shadow-md">
            <h1 className='text-center text-lg font-bold mb-2'>High School Students</h1>
            <p className="text-lg text-gray-800 mb-4 text-justify">
            India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023;[22][23] and from the time of its independence in 1947, the world's most populous democracy.[24][25][26] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.

            </p>
            <Link to='/test'>
            <button className="w-full p-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500">
              Get Started
            </button>
            </Link>
             {/* {loggedIn ? (
            <button
              className="w-full p-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          ) : (
            // Render a login link or message for users who are not logged in
            <p>
              Please <Link to="/login">log in</Link> to get started.
            </p>
          )} */}
          </div>


          <div className="p-4 bg-white rounded shadow-md">
          <h1 className='text-center text-lg font-bold mb-2'>College Students</h1>
            <p className="text-lg text-gray-800 mb-4 text-justify">
            India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023;[22][23] and from the time of its independence in 1947, the world's most populous democracy.[24][25][26] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.
            </p>
            <button className="w-full p-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500">
            Get Started
            </button>
          </div>


          <div className="p-4 bg-white rounded shadow-md">
          <h1 className='text-center text-lg font-bold mb-2'>Professionals</h1>
            <p className="text-lg text-gray-800 mb-4 text-justify">
            India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023;[22][23] and from the time of its independence in 1947, the world's most populous democracy.[24][25][26] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.
            </p>
            <button className="w-full p-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500">
            Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home1
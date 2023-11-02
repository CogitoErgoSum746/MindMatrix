import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';

function Aptitest({id}) {
    const subtests = [
        { id: 1, name: 'Linguistic' },
        { id: 2, name: 'Numerical' },
        { id: 3, name: 'Mechanical' },
        { id: 4, name: 'Abstract' },
        { id: 5, name: 'Spatial' },
        { id: 6, name: 'Logical' },
      ];
      const testType="Aptitude"
      const [testStatus, setTestStatus] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authtoken = localStorage.getItem("authtoken");
        const response = await fetch(`${API_BASE_URL}/user/donesubtests`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authtoken: authtoken,
            
          },
          body: JSON.stringify({ testType }),
        });

        if (response.status === 200) {
          const data = await response.json();
          setTestStatus(data);
          console.log(data)
          setLoading(false);
          console.log("finalArray:", testStatus.finalArray);
          
          
        } else {
          console.error('Failed to fetch test status');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching test status:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="bg-white min-h-screen p-10">
    <h1 className="text-2xl font-bold text-black mb-8 font-['Inter']">Aptitude</h1>
    <div className='flex justify-start ml-5 mb-10'>
      <Link to="/test">
        <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 text-left font-semibold font-['Inter']">{"<"}Go Back</button>
      </Link>
    </div>
    <div className="grid gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        subtests.map((subtest, index) => (
          <Link key={subtest.id} to={`/test/${id}/${subtest.id}`}>
            <div className={'bg-white p-6 rounded-lg shadow-md flex items-center justify-between hover:bg-gray-100 transition duration-300'}>
              <h3 className="text-lg font-semibold text-gray-800 font-['Inter']">{subtest.name}</h3>
              <button className={`px-4 py-2 rounded-full text-white hover:text-white hover-bg-yellow-500 transition duration-300 font-['Inter'] ${testStatus.finalArray && testStatus.finalArray[index] === 1 ? 'bg-green-500':'bg-gradient-to-r from-orange-500 to-yellow-500 '}`}>
                {testStatus.finalArray && testStatus.finalArray[index] === 1 ? 'Complete' : 'Start Test'}
              </button>
            </div>
          </Link>
        ))
      )}
    </div>
  </div>
  )
}

export default Aptitest
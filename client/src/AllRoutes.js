import React,{useState} from 'react'

// import TestList from './Pages/TestList';
import Login from './Pages/Login';
import { Routes,Route} from 'react-router-dom';
import Register from './Pages/Register';
import AdminPanel from './Pages/AdminPanel';
import HomePage from './Pages/HomePage';
import Home1 from './Pages/Home1';
import Test from './Pages/Test';
import TestPageSelector from './TestPageSelector';
import TestQuestions from './TestQuestions';
import Getusers from './Pages/Getusers';
import Careeropt from './Pages/Careeropt';
import Sendmail from './components/Sendmail';
import ResetPass from './ResetPass';
import About from './Pages/About';
import MindW from './Pages/Mindwellness';
import NewHomePage from './Pages/NewHomePage';
import CorporateLeadership from './Pages/CorporateLeadership';
import BusinessCoaching from './Pages/BusinessCoaching';
import ComingSoon from './Pages/ComingSoon';
import Corporate from './Pages/HomeButtons/Corporate';

function AllRoutes() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Routes >
        {/* <Route path='/' element = {<TestList/>} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/admin' element={<AdminPanel loggedIn={loggedIn}/>} />
        <Route path='/' element = {<NewHomePage/>} />
        <Route path='/corporate' element = {<Corporate/>} />
        <Route path='/corporate/corporateleadership' element={<CorporateLeadership />} />
        <Route path='/corporate/businesscoaching' element={<BusinessCoaching />} />
        {/* <Route path='/' element = {<HomePage/>} /> */}
        <Route path='/getstarted' element = {<Home1 />} />
        <Route path='/mindwellness' element = {<MindW />} />
        <Route path='/upcoming' element = {<ComingSoon />} />
        <Route path='/admin/getusers/:org_name/:org_email/:org_studentType/:org_code' element={<Getusers/>} />
        {/* <Route path="/test/:testAlias" element={<TestPage />} /> */}
        <Route path="/test" element={<Test />} />
        <Route path="/test/:id" element={<TestPageSelector />} />
        <Route path="/test/:id/:subtestId" element={<TestQuestions/>} />
        <Route path="/test/2/careeropt" element={<Careeropt />} />
        <Route path='/sendmail' element={<Sendmail/>} />
        <Route path="/reset-password/:token" element={<ResetPass />} />
        <Route path="/about" element={<About />} />
       
    </Routes>
  )
}






export default AllRoutes
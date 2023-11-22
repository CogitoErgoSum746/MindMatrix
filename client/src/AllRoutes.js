import React from "react";

// import TestList from './Pages/TestList';
import Login from "./Pages/Login";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Register from "./Pages/Register";
import AdminPanel from "./Pages/AdminPanel";
import Home1 from "./Pages/Home1";
import Test from "./Pages/Test";
import TestPageSelector from "./TestPageSelector";
import TestQuestions from "./TestQuestions";
import Getusers from "./Pages/Getusers";
import Careeropt from "./Pages/Careeropt";
import Sendmail from "./components/Sendmail";
import ResetPass from "./components/ResetPass";
import About from "./components/HomePage/About";
import MindW from "./components/HomePage/Mindwellness";
import NewHomePage from "./Pages/NewHomePage";
import CorporateLeadership from "./Pages/Training/CorporateLeadership";
import BusinessCoaching from "./Pages/Training/BusinessCoaching";
import ComingSoon from "./Pages/ComingSoon";
import Training from "./Pages/HomeButtons/Training";
import Student from "./Pages/Training/Student";
import Teacher from "./Pages/Training/Teacher";
import Parent from "./Pages/Training/Parent";
import Certificate from "./Pages/HomeButtons/Certificate";
import CertificateContent from "./Pages/HomeButtons/CertificateContent";
import Facilitative from "./Pages/Facilitative";
import PsychometricTestInfo from "./Pages/PsychometricTestInfo";
import FloatingIcon from "./components/FloatingIcon";
import ContactUs from "./Pages/Contactus";
import Termsconds from "./Pages/Terms&Conditions";
import PageNotFound from "./Pages/PageNotFound";
import Checkin from "./Pages/checkin";
import Testin from "./Pages/Testin";


function AllRoutes() {
  const authtoken = localStorage.getItem("authtoken");

  const location = useLocation();

  const excludedRoutes = [
    '/admin',
    '/test/:id/:subtestId',
    '/test/:id',
    '/test/2/careeropt',
    '/test',
    '/admin/getusers/:org_name/:org_studentType/:org_code'
  ];

  const shouldShowFloatingIcon = !excludedRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div>
      {shouldShowFloatingIcon && <FloatingIcon />}
      <Routes>
        {/* <Route path='/' element = {<TestList/>} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<NewHomePage />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/checkin/testin" element={<Testin />} />
        <Route path="/training" element={<Training />} />
        <Route
          path="/training/corporateleadership"
          element={<CorporateLeadership />}
        />
        <Route
          path="/training/businesscoaching"
          element={<BusinessCoaching />}
        />
        <Route
          path="/training/students"
          element={<Student />}
        />
        <Route
          path="/training/teachers"
          element={<Teacher />}
        />
        <Route
          path="/training/parents"
          element={<Parent />}
        />
        <Route path="/mindwellness" element={<MindW />} />
        <Route path="/facilitative" element={<Facilitative />} />
        <Route path="/termsandconditions" element={<Termsconds />} />
        <Route path="/upcoming" element={<ComingSoon />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/certificate/:id" element={<CertificateContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/psychometrictest" element={<PsychometricTestInfo />} />


        <Route path="/admin" element={authtoken ? <AdminPanel /> : <Navigate to='/login' />} />
        <Route path="/getstarted" element={<Home1 />} />
        <Route
          path="/admin/getusers/:org_name/:org_studentType/:org_code"
          element={authtoken ? <Getusers /> : <Navigate to='/login' />}
        />

        <Route path="/test" element={authtoken ? <Test /> : <Navigate to='/login' />} />
        <Route path="/test/:id" element={authtoken ? <TestPageSelector /> : <Navigate to='/login' />} />
        <Route path="/test/:id/:subtestId" element={authtoken ? <TestQuestions /> : <Navigate to='/login' />} />
        <Route path="/test/2/careeropt" element={authtoken ? <Careeropt /> : <Navigate to='/login' />} />

        <Route path="/sendmail" element={<Sendmail />} />
        <Route path="/reset-password/:token" element={<ResetPass />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
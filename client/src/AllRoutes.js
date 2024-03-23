import React from "react";

// import TestList from './Pages/TestList';
import Login from "./Pages/Authentication/Login";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Register from "./Pages/Authentication/Register";
import RegisterDU from "./Pages/Authentication/RegisterDirectUsers";
import AdminSidebar from "./components/Cards/Admin/AdminSidebar";
import AdminPanel from "./Pages/Admin/AdminPanel";
import AdminOrganizations from "./Pages/Admin/Organizations";
import AdminDirectUsers from "./Pages/Admin/DirectUsers";
import Home1 from "./Pages/PsychometricTest/Home1";
import HighSchool from "./Pages/PsychometricTest/Courses/HighSchool";
import College from "./Pages/PsychometricTest/Courses/College";
import Professional from "./Pages/PsychometricTest/Courses/Professional";
import GetAllTestsHere from "./components/Test/GetAllTestsHere";
import Test from "./Pages/PsychometricTest/TestDashboard";
import Profile from "./Pages/PsychometricTest/Profile";
import TestPageSelector from "./Pages/PsychometricTest/utils/TestPageSelector";
import TestQuestions from "./Pages/PsychometricTest/utils/TestQuestions";
import Getusers from "./Pages/Admin/Getusers";
import Careeropt from "./Pages/PsychometricTest/Careeropt";
import Sendmail from "./components/Sendmail";
import ResetPass from "./components/ResetPass";
import About from "./Pages/About/About";
import MindWellness from "./Pages/Mindwellness/Mindwellness";
import LandingPage from "./Pages/HomePage/LandingPage";
import CorporateLeadership from "./Pages/Training/CorporateLeadership";
import BusinessCoaching from "./Pages/Training/BusinessCoaching";
import ComingSoon from "./Pages/extra/ComingSoon";
import Training from "./Pages/HomeButtons/Training";
import Student from "./Pages/Training/Student";
import Teacher from "./Pages/Training/Teacher";
import Parent from "./Pages/Training/Parent";
import Certificate from "./Pages/HomeButtons/Certificate";
import CertificateContent from "./Pages/HomeButtons/CertificateContent";
import Facilitator from "./Pages/FacilitatorProfile/Facilitator";
import PsychometricTestInfo from "./Pages/PsychometricTest/PsychometricTestInfo";
import FloatingIcon from "./components/common/FloatingIcon";
import FloatingDashboardButton from "./components/common/Dashboard";
import ContactUs from "./components/common/Contactus";
import Termsconds from "./Pages/About/Terms&Conditions";
import SinglePost from "./Pages/Blog/SinglePost";
import AllPosts from "./Pages/Blog/AllPosts";
import Footer from "./components/common/Footer";
import PageNotFound from "./Pages/extra/PageNotFound";
import ScrollToTop from "./components/common/ScrollToTop";
import PrivacyPolicy from "./Pages/CompanyPolicies/privacypolicy";
import TermsNconds from "./Pages/CompanyPolicies/termsNconditions";
// import Carsopt from "./Pages/PsychometricTest/CareerList/main";


function AllRoutes() {
  const authtoken = localStorage.getItem("authtoken");

  const location = useLocation();

  const adminSidebar = [
    '/admin',
    '/admin/organizations',
    '/admin/directusers',
    '/admin/getusers/:org_name/:org_studentType/:org_code'
  ];

  const notForFloat = [
    '/admin',
    '/test',
    '/admin/getusers/:org_name/:org_studentType/:org_code'
  ];

  const notForDashboard = [
    '/test',
    '/admin'
  ]

  const forPurpleback = [
    '/test'
  ]

  const notForPurpleback = [
    '/test/userprofile',
    '/test/2/careeropt'
  ]

  const noFooter = [
    '/admin',
    '/test/2/careeropt'
  ]

  const shouldShowAdminSidebar = adminSidebar.some(route => location.pathname.startsWith(route));

  const shouldShowFloatingIcon = !notForFloat.some(route => location.pathname.startsWith(route));
  
  const shouldShowFloatingDashboard = !notForDashboard.some(route => location.pathname.startsWith(route));

  const PurpleBack = forPurpleback.some(route => location.pathname.startsWith(route));

  const notPurpleBack = !notForPurpleback.some(route => location.pathname.startsWith(route));

  const dontshowfooter = !noFooter.some(route => location.pathname.startsWith(route));

  return (
    <div>
      <ScrollToTop />
      {PurpleBack && notPurpleBack && <GetAllTestsHere />}
      {shouldShowFloatingIcon && <FloatingIcon />}
      {shouldShowAdminSidebar && <AdminSidebar />}
      {authtoken && shouldShowFloatingDashboard && <FloatingDashboardButton />}
      
      <Routes>
        {/* <Route path='/' element = {<TestList/>} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/register/:randomNumber" element={<RegisterDU />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
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
        <Route path="/mindwellness" element={<MindWellness />} />
        <Route path="/facilitator" element={<Facilitator />} />
        <Route path="/upcoming" element={<ComingSoon />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/certificate/:name" element={<CertificateContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/termsandconditions" element={<Termsconds />} />
        <Route path="/TermsandConditions" element={<TermsNconds />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/psychometrictest" element={<PsychometricTestInfo />} />
        <Route path="/psychometrictest/getstarted" element={<Home1 />} />
        <Route path="/psychometrictest/getstarted/highschool" element={<HighSchool />} />
        <Route path="/psychometrictest/getstarted/college" element={<College />} />
        <Route path="/psychometrictest/getstarted/professional" element={<Professional />} />

        <Route path="/successteps-blog/:slug" element={<SinglePost />} />
        <Route path="/successteps-blog" element={<AllPosts />} />

        {/* <Route path="/carsopt" element={<Carsopt />} /> */}

        <Route path="/admin" element={authtoken ? <AdminPanel /> : <Navigate to='/login' />} />
        <Route path="/admin/organizations" element={authtoken ? <AdminOrganizations /> : <Navigate to='/login' />} />
        <Route path="/admin/directusers" element={authtoken ? <AdminDirectUsers /> : <Navigate to='/login' />} />
        <Route
          path="/admin/getusers/:org_name/:org_studentType/:org_code"
          element={authtoken ? <Getusers /> : <Navigate to='/login' />}
        />

        <Route path="/test" element={authtoken ? <Test /> : <Navigate to='/login' />} />
        <Route path="/test/userprofile" element={authtoken ? <Profile /> : <Navigate to='/login' />} />
        <Route path="/test/:id" element={authtoken ? <TestPageSelector /> : <Navigate to='/login' />} />
        <Route path="/test/:id/:subtestId" element={authtoken ? <TestQuestions /> : <Navigate to='/login' />} />
        <Route path="/test/2/careeropt" element={authtoken ? <Careeropt /> : <Navigate to='/login' />} />

        <Route path="/sendmail" element={<Sendmail />} />
        <Route path="/reset-password/:token" element={<ResetPass />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {dontshowfooter && <Footer />}
      
    </div>
  );
}

export default AllRoutes;
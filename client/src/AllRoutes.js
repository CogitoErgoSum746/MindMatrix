import React, { useState, useEffect } from "react";

// import TestList from './Pages/TestList';
import Login from "./Pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Pages/Register";
import AdminPanel from "./Pages/AdminPanel";
import Home1 from "./Pages/Home1";
import Test from "./Pages/Test";
import TestPageSelector from "./TestPageSelector";
import TestQuestions from "./TestQuestions";
import Getusers from "./Pages/Getusers";
import Careeropt from "./Pages/Careeropt";
import Sendmail from "./components/Sendmail";
import ResetPass from "./ResetPass";
import About from "./Pages/About";
import MindW from "./Pages/Mindwellness";
import NewHomePage from "./Pages/NewHomePage";
import CorporateLeadership from "./Pages/Training/CorporateLeadership";
import BusinessCoaching from "./Pages/Training/BusinessCoaching";
import ComingSoon from "./Pages/ComingSoon";
import Training from "./Pages/HomeButtons/Training";
import Student from "./Pages/Training/Student";
import Teacher from "./Pages/Training/Teacher";
import Parent from "./Pages/Training/Parent";

function AllRoutes() {
  const authtoken = localStorage.getItem("authtoken");


  return (
    <Routes>
      {/* <Route path='/' element = {<TestList/>} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<NewHomePage/>} />
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
      <Route path="/upcoming" element={<ComingSoon />} />
      <Route path="/about" element={<About />} />

      <Route path="/admin" element={authtoken ? <AdminPanel />: <Navigate to='/login'/>} />
      <Route path="/getstarted" element={<Home1 />} />
      <Route
        path="/admin/getusers/:org_name/:org_email/:org_studentType/:org_code"
        element={<Getusers />}
      />

      <Route path="/test" element={authtoken ? <Test /> : <Navigate to='/login'/>} />
      <Route path="/test/:id" element={<TestPageSelector />} />
      <Route path="/test/:id/:subtestId" element={<TestQuestions />} />
      <Route path="/test/2/careeropt" element={<Careeropt />} />

      <Route path="/sendmail" element={<Sendmail />} />
      <Route path="/reset-password/:token" element={<ResetPass />} />
    </Routes>
  );
}

export default AllRoutes;

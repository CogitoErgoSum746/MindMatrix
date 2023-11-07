import React, { useState, useEffect } from "react";
import logoImage from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const authtoken = localStorage.getItem("authtoken");

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(""); // Track the selected service

  const navigate = useNavigate(); // Access the history object for navigation

  useEffect(() => {
    if (authtoken) {
      setIsLoggedin(true);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
    setIsLoggedin(false);
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setIsMobileMenuOpen(false);
  };

  const handleServiceChange = (event) => {
    const selectedOption = event.target.value;
    setIsMobileMenuOpen(false);

    switch (selectedOption) {
      case "Mind Wellness":
        navigate("/mindwellness");
        break;
      case "Training Program":
        navigate("/training");
        break;
      case "Certificate Program":
        navigate("/certificate");
        break;
      case "Psychometric Test":
        navigate("/getstarted");
        break;
      case "Facilitator Profile":
        navigate("/facilitative");
        break;
      default:
        
    }
  };

  return (
    <nav className="bg-white p-2 top-0 left-0 right-0 z-50 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" onClick={scrollToTop}>
          <img src={logoImage} alt="Logo" width="150px" height="50px" />
        </a>
        <div className="space-x-4 hidden md:flex">
        <Link to="/" className="nav-link px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
            Home
          </Link>
          <Link to="/about" className="nav-link px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
            About Us
          </Link>
          {/* Use a <select> element for services */}
          <div className="relative">
            <select
              value={selectedService}
              onChange={handleServiceChange}
              className="nav-link block px-2 py-1 hover:bg-gradient-to-r from-orange-500 to-yellow-500 cursor-pointer"
            >
              <option value="">NLP Services Offered</option>
              <option value="Mind Wellness">Mind Wellness</option>
              <option value="Training Program">Training Programs</option>
              <option value="Certificate Program">Certificate Programs</option>
              <option value="Psychometric Test">Psychometric Tests</option>
            </select>
          </div>
          <Link to="/facilitative" smooth={true} duration={500} className="nav-link px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
          Facilitator Profile
          </Link>
          {/* <ScrollLink to="getintouch" smooth={true} duration={500} className="nav-link block px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
          Contact Us
          </ScrollLink> */}
          <a href="/#getintouch" class="nav-link block px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">Contact Us</a>

          <Link to={isLoggedin ? "/" : "/login"}>
            <button
              className="font-bold bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full py-1 px-2"
              onClick={isLoggedin ? Logout : null}
            >
              {isLoggedin ? "Logout" : "Login"}
            </button>
          </Link>
          {!isLoggedin && (
            <a
              href="/register"
              className="font-bold bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full py-1 px-1"
            >
              Sign up
            </a>
          )}
        </div>
        <div className="md:hidden">
          <button className="text-2xl items-end" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden p-2 bg-white space-y-2">
          <Link to="/" onClick={scrollToTop} className="nav-link block px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white py-1">
            Home
          </Link>
            
  
          <Link to="/about" onClick={scrollToTop} className="nav-link block px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white py-1">
            About Us
          </Link>
          <div className="flex justify-center items-center">
            <select
              value={selectedService}
              onChange={handleServiceChange}
              className="nav-link block px-2 py-1 hover:bg-gradient-to-r from-orange-500 to-yellow-500 cursor-pointer"
            >
              <option value="">NLP Services Offered</option>
              <option value="Mind Wellness">Mind Wellness</option>
              <option value="Training Program">Training Program</option>
              <option value="Certificate program">Certificate program</option>
              <option value="Psychometric Test">Psychometric Test</option>
            </select>
          </div>
          <Link to="/facilitative" smooth={true} duration={500} onClick={scrollToTop} className="nav-link block px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white py-1">
          Facilitator Profile
          </Link>
          <ScrollLink to="getintouch" smooth={true} duration={500} className="nav-link block px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
          Contact Us
          </ScrollLink>
          <Link to={isLoggedin ? "/" : "/login"} onClick={scrollToTop}>
            <button
              className="font-bold bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full py-1 px-2"
              onClick={isLoggedin ? Logout : null}
            >
              {isLoggedin ? "Logout" : "Login"}
            </button>
          </Link>
          {!isLoggedin && (
            <a
              href="/register"
              onClick={scrollToTop}
              className="font-bold bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full py-1 px-2"
            >
              Sign up
            </a>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
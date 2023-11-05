import React, { useState, useEffect } from "react";
import logoImage from "../images/logo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Events, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const authtoken = localStorage.getItem("authtoken");

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (authtoken) {
      setIsLoggedin(true);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
    setIsLoggedin(false);
    closeMobileMenu();
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMobileMenu();
  };

  return (
    <nav className="bg-white p-2 top-0 left-0 right-0 z-50 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" onClick={scrollToTop}>
          <img src={logoImage} alt="Logo" width="150px" height="50px" />
        </a>
        <div className="space-x-4 hidden md:flex">
        <ScrollLink to="services" smooth={true} duration={500} className="hover:cursor-pointer nav-link px-2 py-1 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300">
            Discover More
          </ScrollLink>
          <Link to="/about" className="nav-link px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
            About Us
          </Link>
          <ScrollLink to="services" smooth={true} duration={500} className="hover:cursor-pointer nav-link px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
            Services
          </ScrollLink>
          <Link to="/getstarted" smooth={true} duration={500} className=" nav-link px-2 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
            Psychometric Test
          </Link>
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
    <ScrollLink to="services" smooth={true} duration={500} onClick={closeMobileMenu} className="nav-link block px-2 py-1 hover:bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300">
      Discover More
    </ScrollLink>
    <Link to="/about" onClick={closeMobileMenu} className="nav-link block px-2 hover-bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
      About Us
    </Link>
    <ScrollLink to="services" smooth={true} duration={500} onClick={closeMobileMenu} className="nav-link block px-2 hover-bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
      Services
    </ScrollLink>
    <ScrollLink to="psychometrictest" smooth={true} duration={500} onClick={closeMobileMenu} className="nav-link block px-2 hover-bg-gradient-to-r from-orange-500 to-yellow-500 hover:text-white transition duration-300 py-1">
      Psychometric Test
    </ScrollLink>
    <Link to={isLoggedin ? "/" : "/login"} onClick={closeMobileMenu}>
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
        onClick={closeMobileMenu}
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

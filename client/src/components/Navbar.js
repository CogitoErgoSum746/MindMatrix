import React, { useState, useEffect } from "react";
import logoImage from "../images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const authtoken = localStorage.getItem("authtoken");

  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    if (authtoken) {
      setIsLoggedin(true);
    }
  }, []);

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
    setIsLoggedin(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white p-4 absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={logoImage} alt="Logo" width="150px" height="50px" />
        </a>
        <div className="space-x-4">
          {/* <a href="/" className="text-white hover:underline">Home</a> */}
          {/* {isLoggedin && 
                 (<a href="/login" className="font-bold  bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full py-1 px-2" >LOGOUT</a>)
                 }
          <a href="/login" className="font-bold  bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full py-1 px-2">LOGIN</a> */}
          <a href="#" id="discover" onClick={() => scrollToSection("discover")} className="px-2">
            Discover More
          </a>
          <a href="#" id="aboutus" onClick={() => scrollToSection("aboutus")}  className="px-2">
            About Us
          </a>
          <a href="#" id="services" onClick={() => scrollToSection("services")} className="px-2">
            Services
          </a>
          <a href="#" id="psycho" onClick={() => scrollToSection("psycho")} className="px-2">
            Psychometric Test
          </a>
          <Link to={isLoggedin ? "/" : "/login"}>
            <button
              className="font-bold  bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full py-1 px-2"
              onClick={isLoggedin ? Logout : null}
            >
              {isLoggedin ? "Logout" : "Login"}
            </button>
          </Link>

          {!isLoggedin && (
            <a
              href="/register"
              className="font-bold  bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full py-1 px-2"
            >
              Sign up
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

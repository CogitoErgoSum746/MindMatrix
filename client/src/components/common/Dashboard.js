import React from "react";
import { Link } from "react-router-dom"; 
import DashboardButton from "../../images/dashboardButton.svg";

const FloatingDashboardButton = () => {
  // Define your dashboard link
  const dashboardLink = "/test";
  
  return (
    <Link
      to={dashboardLink}
      className="fixed top-16 right-4 md:top-16 md:right-4 z-50"
    >
      <div className="flex items-center bg-gray-200 rounded-lg p-2 cursor-pointer">
        <img src={DashboardButton} alt="Dashboard icon" className="w-12 h-12 md:w-14 md:h-14 mr-2" />
        <p className="text-lg font-semibold">Go to Dashboard</p>
      </div>
    </Link>
  );
};

export default FloatingDashboardButton;

import React from "react";
import wpicon from "../images/wpicon.png";

const FloatingIcon = () => {
  const PhoneNumber = "9833086018";
  const whatsappURL = `https://wa.me/${PhoneNumber}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50" // hover:animate-ping
    >
      <img src={wpicon} alt="Whatsapp icon" className="w-14 h-14" />
    </a>
  );
};

export default FloatingIcon;
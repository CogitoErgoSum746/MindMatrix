import React from "react";
import wpicon from "../../images/wpicon.png";

const FloatingIcon = () => {
  const PhoneNumber = "9833086018";
  const whatsappURL = `https://wa.me/${PhoneNumber}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-4 md:bottom-20 md:right-8 z-50 transform hover:scale-110 transition-transform duration-300 animate-bounce"
    >
      <img src={wpicon} alt="Whatsapp icon" className="w-12 h-12 md:w-14 md:h-14" />
    </a>
  );
};

export default FloatingIcon;

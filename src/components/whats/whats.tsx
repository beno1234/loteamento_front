import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-10">
      <a
        href="https://api.whatsapp.com/send?phone=5534996440078"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoWhatsapp size={30} />
      </a>
    </div>
  );
};

export default WhatsAppButton;

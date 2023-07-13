import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#40845b] py-6 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-bold">Entre em contato</p>
            <p className="text-sm">AV. Mal. Deodoro, 375 - Sobradinho</p>
            <p className="text-sm">Telefone: (34) 99644-0078</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

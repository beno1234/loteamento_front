import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-image py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-bold">Entre em contato</p>
            <p className="text-sm">AV. Mal. Deodoro, 375 - Sobradinho</p>
            <p className="text-sm">Telefone: (34) 99644-0078</p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-300 mr-4"
            >
              Sobre nós
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-300 mr-4"
            >
              Termos de Serviço
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

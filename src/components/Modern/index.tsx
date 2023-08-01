import React from "react";

const ModernSection: React.FC = () => {
  return (
    <section className="bg-[#110b0d] py-12 px-4 md:px-40" data-aos="fade-right">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6 text-center md:text-left">
              Chega de pagar aluguel!
            </h2>
            <p className="text-lg md:w-2/3 text-white mb-8 text-center md:text-left">
              É a sua chance de comprar um lote financiado e com entrada
              facilitada!
            </p>
            <div className="flex justify-center md:justify-start mb-8">
              <a
                href="https://earth.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg underline"
              >
                Ver no Google Earth
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
            <img src="/MONTAGEM-002.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSection;

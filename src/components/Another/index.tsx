import React from "react";

const AnotherSection: React.FC = () => {
  return (
    <section
      className="bg-gray-100 py-12"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Nosso Loteamento
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Nosso loteamento é uma ótima opção para você! Localizado em uma
              região privilegiada, próximo a uma variedade de comodidades que
              incluem:
            </p>
            <ul className="text-lg text-gray-700">
              <li>Faculdade</li>
              <li>Creches</li>
              <li>Posto de Saúde</li>
              <li>Posto de Gasolina</li>
              <li>Comércios</li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/mapa.webp"
              alt="Loteamento"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnotherSection;

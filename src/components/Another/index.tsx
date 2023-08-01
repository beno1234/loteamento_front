import React from "react";

const AnotherSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Nosso Loteamento
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Nosso loteamento é uma ótima opção para você! Localizado em uma
              região privilegiada, próximo a uma variedade de comodidades que
              incluem:
            </p>
            <ul className="text-lg text-gray-700">
              <li>Escola</li>
              <li>Creches</li>
              <li>Posto de Saúde</li>
              <li>Posto de Gasolina</li>
              <li>Comércios</li>
            </ul>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/MONTAGEM-001.webp"
              alt="Loteamento"
              className="rounded-lg shadow-lg mx-auto md:mx-0"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnotherSection;

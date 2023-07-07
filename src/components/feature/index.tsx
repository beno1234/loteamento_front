import React from "react";

const Feature: React.FC = () => {
  return (
    <section className="bg-image text-white py-52">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-white font-bold  mb-6">
            Lote para venda ou aluguel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="flip-left" data-aos-duration="3000">
              <img src="/1.webp" alt="Lote" className="rounded-lg shadow-lg" />
            </div>
            <div
              className="flex flex-col justify-center"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="text-lg text-white  mb-4">
                Apresentamos um lote exclusivo disponível para venda ou aluguel.
                Localizado em uma área privilegiada, este lote oferece uma
                oportunidade única para construir a casa dos seus sonhos ou
                iniciar um novo empreendimento.
              </p>
              <ul className="list-disc text-white list-inside  mb-4">
                <li>Área total: 500m²</li>
                <li>Localização: Bairro XYZ</li>
                <li>Infraestrutura completa</li>
                <li>Segurança 24 horas</li>
              </ul>
              <div className="flex justify-center md:justify-start">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg mr-4">
                  Saiba mais
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
                  Agendar visita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

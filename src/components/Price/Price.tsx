import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";

const PricingSection: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-40 bg-[#102619]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-white font-bold mb-6">Parcelas</h2>
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-[6vw] md:text-[62px] font-montserrat font-bold text-white pulsating-animation">
              <span className="text-xl text-white">A partir: </span>
              R$ 350,00
              <span className="text-xl text-white"> mensais </span>
            </h2>
          </div>
          <button className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-3xl shadow-lg">
            <BiLogoWhatsapp size={23} style={{ marginRight: "10px" }} />
            QUERO GARANTIR MINHA VAGA
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

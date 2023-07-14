import { FaTint, FaBolt, FaRoad } from "react-icons/fa";

const InfrastructureSection = () => {
  return (
    <section className="py-32 px-4 md:px-40 bg-[#102619]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Infraestrutura completa
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center md:gap-10">
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <FaTint className="text-6xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white">
                Água, esgoto e drenagem
              </h3>
            </div>
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <FaBolt className="text-6xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white">
                Energia elétrica e iluminação
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <FaRoad className="text-6xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white">
                Asfalto, guias e sarjetas
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;

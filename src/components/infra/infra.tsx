import { FaTint, FaBolt, FaRoad, FaTree } from "react-icons/fa";
import { MdOutlinePedalBike } from "react-icons/md";

const InfrastructureSection = () => {
  return (
    <section className="py-8 md:py-16 lg:py-32 px-4 md:px-8 lg:px-40 bg-[#102619]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-12 lg:mb-20">
            Infraestrutura completa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="flex flex-col items-center">
              <FaTint className="text-6xl md:text-7xl text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Iluminação em Led
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <FaBolt className="text-6xl md:text-7xl text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Energia elétrica e iluminação
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <FaRoad className="text-6xl md:text-7xl text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Asfalto, guias e sarjetas
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <MdOutlinePedalBike className="text-6xl md:text-7xl text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Sinalização Viária (horizontal e vertical)
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <FaRoad className="text-6xl md:text-7xl text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Área de convivência (ciclovia, pista de caminhada, playground)
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <FaTree className="text-6xl md:text-7xl text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Praça urbanizada com paisagismo
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;

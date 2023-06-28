import "./styles.css";

const Feature = () => {
  return (
    <section className="relative pt-20 pb-14 md:pt-28 md:pb-28 bg-zinc-100">
      <div>
        <img src="/01.png" className="absolute top-0 right-0" />
      </div>
      <div className="mx-auto container">
        <div className="md:mb-24 mb-24 text-center">
          <h3 className="text-xl font-semibold lg:text-4xl leading-tight">
            Infraestrtura Completa
          </h3>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-green-200 rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <img src="/torneira.png" className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center text-green-800">
                Rede de água tratada
              </h4>
              <p className="text-gray-700">
                Duis aute irure dolor in derit in voluptate velit esse cillum
                dolore eu fugiat nulla
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-green-200 rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <img src="/torneira.png" className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center text-green-800">
                Captação de águas pluviais
              </h4>
              <p className="text-gray-700">
                Duis aute irure dolor in derit in voluptate velit esse cillum
                dolore eu fugiat nulla
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-green-200 rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <img
                  src="/estrada-com-linha-tracejada.png"
                  className="w-24 h-24"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center text-green-800">
                Ruas 100% asfaltadas
              </h4>
              <p className="text-gray-700">
                Duis aute irure dolor in derit in voluptate velit esse cillum
                dolore eu fugiat nulla
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-green-200 rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <img src="/esgoto.png" className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center text-green-800">
                Rede de energia elétrica em led
              </h4>
              <p className="text-gray-700">
                Duis aute irure dolor in derit in voluptate velit esse cillum
                dolore eu fugiat nulla
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/5 p-4">
            <div className="bg-green-200 rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <img src="/poste-de-iluminacao.png" className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center text-green-800">
                Rede de coleta de esgoto
              </h4>
              <p className="text-gray-700">
                Duis aute irure dolor in derit in voluptate velit esse cillum
                dolore eu fugiat nulla
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

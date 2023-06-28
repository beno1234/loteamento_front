const AnotherSection = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-100">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 ">
            Nosso loteamento fica próximo à:
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex justify-around">
          <ul className="list-disc text-lg list-inside">
            <li>Faculdade</li>
            <li>Creches</li>
            <li>Posto de Saúde</li>
            <li>Posto de Gasolina</li>
            <li>Comércios</li>
          </ul>
        </div>
        <div className="w-full mt-6">
          <img src="/mapa.webp" alt="Imagem Grande" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default AnotherSection;

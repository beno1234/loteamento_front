const ModernSection = () => {
  return (
    <section className="py-8 md:py-16  relative">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(/verde.jpeg)`,
          filter: "brightness(50%)",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 md:pr-6 lg:pr-12">
            <div className="text-center md:text-left mx-auto md:mx-0">
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Chega de pagar aluguel!
              </h2>
              <p className="text-base md:text-lg mb-6 text-white">
                Adquira já seu lote com entrada facilitada.
              </p>
              <a
                href="https://earth.google.com/web/search/Frutal,+State+of+Minas+Gerais/@-20.03896942,-48.93015884,542.89142497a,1515.60389655d,35y,179.91878987h,44.94027002t,0r/data=CigiJgokCRqWEY7sihFAEZp1xBYJwj_AGcQojAQgeSJAIbCcQ_1zxlrAOgMKATA?authuser=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-semibold inline-block transition-all duration-200 mx-auto"
              >
                Ver no Google Earth
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 md:flex md:justify-center">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3132.702249198765!2d-44.96735444147276!3d-19.864150113306774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUxJzUwLjAiUyA0NMKwNTcnNTYuMiJX!5e0!3m2!1spt-BR!2sbr!4v1680097954128!5m2!1spt-BR!2sbr"
                className="w-full h-full md:w-4/5 md:h-96 rounded-md shadow-lg"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSection;

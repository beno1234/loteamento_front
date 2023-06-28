import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewSection = () => {
  const carouselImages = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"];

  const PrevArrow = (props: any) => (
    <button
      className="slick-arrow slick-prev"
      onClick={props.onClick}
      aria-label="Previous"
    ></button>
  );

  const NextArrow = (props: any) => (
    <button
      className="slick-arrow slick-next"
      onClick={props.onClick}
      aria-label="Next"
    ></button>
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative py-8 md:py-16">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(/bg-counter.jpg)`,
          filter: "brightness(50%)",
        }}
      ></div>
      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 md:pr-6 lg:pr-12">
              <div className="max-w-lg mx-auto md:ml-0 text-white">
                <h2 className="text-2xl md:text-4xl lg:text-5xl mb-4 font-storytella">
                  Cardeal Empreendimentos
                </h2>
                <p className="text-base md:text-lg mb-4">
                  A Cardeal Empreendimentos tem mais de 15 anos de experiência
                  no mercado imobiliário, especializada em loteamentos e
                  condomínios fechados.
                </p>
                <p className="text-base md:text-lg mb-4">
                  Com loteamentos em diversas cidades e altas taxas de vendas,
                  somos uma referência no mercado imobiliário, e estamos sempre
                  aprimorando nossos serviços e projetos para proporcionar o
                  melhor para os nossos clientes, parceiros e para a sociedade
                  como um todo.
                </p>
                <button className="bg-green-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-600 transition-all duration-200">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <Slider {...settings}>
                {carouselImages.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Imagem ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;

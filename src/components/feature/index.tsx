import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLogoWhatsapp } from "react-icons/bi";

const Feature: React.FC = () => {
  const carouselImages = ["1.webp", "2.webp", "3.webp"];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <section className="container bg-image-2 text-white py-52 px-40">
      <div className=" mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-white font-bold  mb-6">
            Lote para venda ou aluguel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="flip-left" data-aos-duration="3000">
              <Slider
                {...settings}
                dots={false}
                arrows={false}
                infinite={true}
                autoplay={true}
                autoplaySpeed={3000}
              >
                {carouselImages.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Imagem ${index + 1}`}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </Slider>
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
                <a href="https://api.whatsapp.com/send?phone=5534996440078">
                  <button className="bg-green-500 flex justify-center items-center hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
                    <BiLogoWhatsapp size={23} style={{ marginRight: "10px" }} />
                    Entre em contato
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

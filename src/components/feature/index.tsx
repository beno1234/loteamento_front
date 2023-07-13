import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLogoWhatsapp } from "react-icons/bi";

const Feature: React.FC = () => {
  const carouselImages = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  return (
    <section className="bg-[#102619] text-white py-52 px-4 md:px-8 lg:px-40">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-white font-bold mb-6">
            Cardeal Empreendimentos
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
                      className="rounded-lg shadow-lg w-full"
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
              <p className="text-lg text-white mb-4">
                A Cardeal Empreendimentos tem mais de 15 anos de experiência no
                mercado imobiliário, especializada em loteamentos e condomínios
                fechados. Nosso objetivo é oferecer projetos que atendam ao
                "Índice Cardeal", um equilíbrio ideal entre soluções inovadoras,
                qualidade excepcional e preços justos para nossos clientes,
                parceiros e comunidade.
              </p>
              <p className="text-lg text-white mb-4">
                Com loteamentos em diversas cidades e altas taxas de vendas,
                somos uma referência no mercado imobiliário, e estamos sempre
                aprimorando nossos serviços e projetos para proporcionar o
                melhor para os nossos clientes, parceiros e para a sociedade
                como um todo.
              </p>
              <ul className="list-disc text-white list-inside mb-4">
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

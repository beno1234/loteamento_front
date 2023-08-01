import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feature: React.FC = () => {
  const carouselImages = [
    "MONTAGEM-001.webp",
    "MONTAGEM-002.webp",
    "MONTAGEM-003.webp",
    "MONTAGEM-005.webp",
    "MONTAGEM-006.webp",
    "teste.webp",
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
  };

  return (
    <section className="bg-[#102619] text-white py-8 md:py-16 lg:py-32 px-4 md:px-8 lg:px-40 md:min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-white font-bold mb-6">
            Cardeal Empreendimentos
          </h2>
          <div className="flex justify-center">
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              className="w-full md:w-full lg:w-full"
            >
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

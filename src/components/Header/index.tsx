import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import AwsSlider from "react-awesome-slider";
import { useEffect, useState } from "react";
const Header = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 5000); // Altere o valor para definir o intervalo desejado (em milissegundos)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-screen">
      <AwsSlider
        bullets={false}
        organicArrows={true}
        animation="fallAnimation"
        selected={activeSlide}
      >
        <div
          style={{
            backgroundImage: "url(/pexels-photo-12264621.jpeg)",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="h-[100%] absolute w-full bg-no-repeat bg-cover"
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 md:col-span-6">
                  <h2 className="leading-none font-medium text-4xl md:text-5xl lg:text-9xl  start-screen--style-2 start-screen__content-container __title normal-case text-white font-storytella text-center">
                    O loteamento que veio para mudar o conceito de viver bem em
                    Nova Serrana
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(/pexels-anibal-pabon-13834317.jpg)",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="h-[100%] absolute w-full bg-no-repeat bg-cover"
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 md:col-span-6">
                  <h2 className="leading-none font-medium text-xl md:text-xl lg:text-6xl  start-screen--style-2 start-screen__content-container __title normal-case text-white font-storytella text-center">
                    Descubra um lugar único para chamar de lar: o loteamento
                    perfeito para viver seus melhores momentos em Nova Serrana.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AwsSlider>
    </div>
  );
};

export default Header;

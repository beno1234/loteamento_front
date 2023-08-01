import AOS from "aos";
import "aos/dist/aos.css";

import AnotherSection from "./components/Another";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModernSection from "./components/Modern";
import NewSection from "./components/Timeline";
import Feature from "./components/feature";
import BackToTopButton from "./components/back/back";
import PricingSection from "./components/Price/Price";
import InfrastructureSection from "./components/infra/infra";

function App() {
  AOS.init();

  return (
    <>
      <Header />
      <PricingSection />
      <InfrastructureSection />
      <Feature />
      <NewSection />
      <AnotherSection data-aos="flip-left" />
      <ModernSection data-aos="fade-right" />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;

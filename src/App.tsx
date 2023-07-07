import AOS from "aos";
import "aos/dist/aos.css";

import AnotherSection from "./components/Another";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModernSection from "./components/Modern";
import NewSection from "./components/Timeline";
import Feature from "./components/feature";

function App() {
  AOS.init();

  return (
    <>
      <Header />
      <Feature />
      <NewSection />
      <AnotherSection data-aos="flip-left" />
      <ModernSection data-aos="fade-right" />
      <Footer />
    </>
  );
}

export default App;

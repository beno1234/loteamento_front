import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`back-to-top-button ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp size={30} />
    </div>
  );
};

export default BackToTopButton;

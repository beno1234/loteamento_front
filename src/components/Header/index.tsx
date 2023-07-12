const Header = () => {
  return (
    <div className="bg-image relative h-screen">
      <div
        style={{
          backgroundImage: "url(/pexels-photo-12264621.jpeg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="h-[100%] absolute w-full bg-no-repeat bg-cover corner-shapes-wrap"
      >
        <div className="corner-shapes"></div>
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
    </div>
  );
};

export default Header;

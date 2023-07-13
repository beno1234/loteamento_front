const Header = () => {
  return (
    <div className="bg-[#102619] relative min-h-screen">
      <div
        style={{
          backgroundImage: "url(/pexels-photo-12264621.jpeg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="h-screen md:h-full absolute w-full bg-no-repeat bg-cover corner-shapes-wrap"
      >
        <div className="corner-shapes"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex justify-center items-center">
          <div className="container mx-auto text-center">
            <div className="mt-0 pt-0">
              <img
                src="/logoAmazonas2.png"
                className="mx-auto w-[50%] md:w-auto"
                alt="Logo Amazonas"
              />
              <h2 className="text-white text-4xl font-bold mt-4">
                O lugar perfeito para construir os seus sonhos. <br />
                Lançamento em breve!
              </h2>
              <img
                src="/lote.jpeg"
                className="mx-auto mt-8"
                alt="Imagem de lote"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

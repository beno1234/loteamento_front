const Header = () => {
  return (
    <div className="bg-[#102619] relative min-h-screen">
      <div
        style={{
          backgroundImage: "url(/pexels-photo-12264621.jpeg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="h-[100vh] absolute w-full bg-no-repeat bg-cover corner-shapes-wrap"
      >
        <div className="corner-shapes"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto">
            <div className="flex mt-0 pt-0">
              <img src="/logoAmazonas2.png" className="mx-auto  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

const NewSection: React.FC = () => {
  const progressData = [
    { title: "Abertura das ruas", percentage: 100 },
    { title: "Terraplanagem", percentage: 100 },
    { title: "Drenagem Pluvial", percentage: 100 },
    { title: "Rede de Água", percentage: 0 },
    { title: "Rede de Esgoto", percentage: 0 },
    { title: "Pavimentação", percentage: 0 },
    { title: "Rede Elétrica", percentage: 0 },
    { title: "Arborização", percentage: 0 },
    { title: "Sinalização", percentage: 0 },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Status da Obra
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {progressData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-6 mb-4 text-center">
                {item.title}
              </h3>
              <div className="w-full bg-gray-300 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-4 text-center">{`${item.percentage}%`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSection;

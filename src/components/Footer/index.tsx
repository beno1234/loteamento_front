import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-6 mx-auto md:w-3/4">
          <h3 className="text-2xl font-bold mb-4">Cardeal Empreendimentos</h3>
          <p className="text-lg text-left mb-4">
            A Cardeal Empreendimentos tem mais de 15 anos de experiência no
            mercado imobiliário, especializada em loteamentos e condomínios
            fechados. Nosso objetivo é oferecer projetos que atendam ao "Índice
            Cardeal", um equilíbrio ideal entre soluções inovadoras, qualidade
            excepcional e preços justos para nossos clientes, parceiros e
            comunidade.
          </p>
          <p className="text-lg text-left mb-4">
            Com loteamentos em diversas cidades e altas taxas de vendas, somos
            uma referência no mercado imobiliário, e estamos sempre aprimorando
            nossos serviços e projetos para proporcionar o melhor para os nossos
            clientes, parceiros e para a sociedade como um todo.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mx-auto text-center">
          <div className="mb-4 md:w-1/2 flex flex-col items-center justify-center">
            <div className="flex flex-col data-contact">
              <div className="flex items-center mb-2">
                <AiOutlineEnvironment className="text-2xl mr-2" />
                <p className="text-xl">Av. Mal. Deodoro, 375 - Sobradinho</p>
              </div>
              <div className="flex items-center">
                <AiOutlinePhone className="text-2xl mr-2" />
                <p className="text-xl">+55 34 9 9644-0078</p>
              </div>
            </div>
          </div>

          <div className="mb-4 md:w-1/2 flex flex-col items-center justify-center">
            <div className="flex flex-col data-contact">
              <div className="flex items-center mb-2">
                <AiOutlineMail className="text-2xl mr-2" />
                <p className="text-base md:text-xl">
                  financeiro@empreendimentoscardeal.com.br
                </p>
              </div>
              <div className="flex items-center">
                <AiOutlineClockCircle className="text-2xl mr-2" />
                <p className="text-xl">07:00 a 11:30 | 13:00 as 17:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="block text-center md:flex md:justify-around mt-16">
          <p className="text-sm">
            © 2023 CARDEAL EMPREENDIMENTOS - TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="text-sm pt-5 md:pt-0">Criado por: Bmouse Productions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

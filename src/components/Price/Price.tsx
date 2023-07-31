import React from "react";
import axios from "axios";
import { Email } from "../../api/api";

const Price: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serverURL = "https://loteamento.onrender.com/cadastro";

    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    )?.value;
    const nome = (
      e.currentTarget.elements.namedItem("nome") as HTMLInputElement
    )?.value;
    const telefone = (
      e.currentTarget.elements.namedItem("telefone") as HTMLInputElement
    )?.value;
    const mensagem = (
      e.currentTarget.elements.namedItem("mensagem") as HTMLTextAreaElement
    )?.value;

    try {
      // Substitua 'SUA_API_KEY_DO_MAILCHIMP' pela sua chave de API do Mailchimp
      const apiKey = "f0fa524ccf43188097c3a4a3e261fcb3";

      // Substitua 'SUA_LISTA_DO_MAILCHIMP' pelo ID da lista no Mailchimp
      const listId = "us11";

      // Configuração do cabeçalho com a chave de API do Mailchimp
      const headers = {
        Authorization: `apikey ${apiKey}`,
        "Content-Type": "application/json",
      };

      // Dados do novo contato
      const data = {
        email,
        nome,
        telefone,
        mensagem,
        list_id: listId,
      };

      // Enviar a solicitação POST para o servidor Node.js
      const response = await axios.post(serverURL, data, { headers });
      const responses = await Email(data);

      console.log("Resposta do servidor Node.js:", response.data);
      console.log("email enviado", responses.data);

      alert("Cadastro realizado com sucesso!");

      // Limpar os campos após o envio bem-sucedido (opcional)
      e.currentTarget.reset();
    } catch (error) {
      console.error("Erro ao enviar os dados para o servidor Node.js:", error);
    }
  };
  return (
    <section className="bg-[#102619] p-16">
      <div className="p-8 max-w-md mx-auto  rounded-lg ">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Deseja adquirir o seu lote assim que o loteamento for lançado?
        </h2>
        <h2 className="text-white mb-5 font-bold">
          Inscreva-se no formulário abaixo para ser informado das últimas
          notícias sobre o Residencial Amazonas!
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-white font-bold">
              Endereço de e-mail
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="seuemail@example.com"
            />
          </div>
          <div>
            <label htmlFor="nome" className="block text-white font-bold">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="Seu Nome"
            />
          </div>
          <div>
            <label htmlFor="telefone" className="block text-white font-bold">
              Telefone <span className="text-red-500">*</span>
            </label>
            <input
              id="telefone"
              type="tel"
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-white font-bold">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
              rows={4}
              placeholder="Digite sua mensagem aqui"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Price;

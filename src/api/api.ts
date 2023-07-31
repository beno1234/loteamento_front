import axios from "axios";

export const api = axios.create({
  baseURL: "https://loteamento.onrender.com/",
});

export const Email = async (values: any) => {
  return await api.post("/send-email", values);
};

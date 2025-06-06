export interface Solicitacao {
  nomeSolicitante: string;
  cpfCnpj: string;
  endereco: string;
  descricao: string;
  tipo: string;
}

const API_URL = "http://localhost:3000/solicitations";

export const createSolicitation = async ( solicitacao: Solicitacao ): Promise<Solicitacao> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(solicitacao),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar solicitação");
  }

  return response.json();
}

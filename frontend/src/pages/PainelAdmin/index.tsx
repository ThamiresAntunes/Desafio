import { getSolicitation } from "../../services/painelService";
import "./style.css";
import { useEffect, useState } from "react";

export default function PainelAdmin() {
  const [solicitacoes, setSolicitacoes] = useState([]);

  useEffect(() => {
    async function buscarSolicitacoes() {
      try {
        const data = await getSolicitation();
        console.log("Dados recebidos:", data);
        setSolicitacoes(data);
      } catch (error) {
        alert("Erro ao buscar solicitações");
      }
    }
    buscarSolicitacoes();
  }, []);

  return (
    <div>
      <h2>Solicitações Cadastradas</h2>
      <ul>
        {solicitacoes.map((solicitation: any) => (
          <li key={solicitation.id}>
            {solicitation.id} - {solicitation.tipo} - {solicitation.endereco} -{" "}
            {solicitation.status}
          </li>
        ))}
      </ul>
    </div>
  );
    console.log(solicitacoes);
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
    <div className="container">
      <h2>Solicitações Cadastradas</h2>
      <ul className="solicitacoes-list">
        {solicitacoes.map((solicitation: any) => (
          <li key={solicitation.id}>
            {solicitation.id} - {solicitation.tipo} - {solicitation.endereco} -{" "}
            {solicitation.status}
          </li>
        ))}
      </ul>
      <div>
        <h2></h2>
        <input name="" placeholder="" required />
      </div>
    </div>
  );
  console.log(solicitacoes);
}

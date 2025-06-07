import type { Solicitacao } from '../types/typeSolicitation';

const API_URL = 'http://localhost:3000/solicitations';

export const createSolicitation = async (solicitacao: Solicitacao): Promise<Solicitacao> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(solicitacao),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar solicitação');
  }

  return response.json();
};

// src/services/solicitationService.ts
export async function updateSolicitationStatus(id: number, status: string) {
  const token = localStorage.getItem('token');
  const response = await fetch(`http://localhost:3000/solicitations/${id}/status`, {
    method: 'PATCH',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) throw new Error('Erro ao atualizar status');
  return response.json();
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { updateSolicitationStatus } from '../../services/solicitationsService';
import { deleteSolicitation } from '../../services/deleteService';

const statusOptions = ['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO'];
const tipoOptions = [
  { label: 'Todos', value: '' },
  { label: 'Troca de Lâmpada', value: 'TROCA_LAMPADA' },
  { label: 'Tapa Buraco', value: 'TAPA_BURACO' },
];

function PainelAdmin() {
  const [solicitations, setSolicitations] = useState<any[]>([]);
  const [tipoFiltro, setTipoFiltro] = useState('');
  

  const fetchSolicitations = (tipo = '') => {
    const token = localStorage.getItem('token');
    const url = tipo
      ? `http://localhost:3000/solicitations?tipo=${tipo}`
      : 'http://localhost:3000/solicitations';
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) {
          alert('Sessão expirada. Faça login novamente.');
          return setSolicitations([]);
        }
        setSolicitations(data);
      })
      .catch(() => setSolicitations([]));
  };

  useEffect(() => {
    fetchSolicitations(tipoFiltro);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tipoFiltro]);

  const handleUpdateStatus = async (id: number, novoStatus: string) => {
    await updateSolicitationStatus(id, novoStatus);
    setSolicitations(solicitations =>
      solicitations.map(s =>
        s.id === id ? { ...s, status: novoStatus } : s
      )
    );
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir esta solicitação?')) return;
    await deleteSolicitation(id);
    setSolicitations(solicitations => solicitations.filter(s => s.id !== id));
  };

  return (
    <div>
      <h2>Solicitações</h2>
      <div style={{ marginBottom: 16 }}>
        <label>Filtrar por tipo: </label>
        <select
          value={tipoFiltro}
          onChange={e => setTipoFiltro(e.target.value)}
          style={{ marginLeft: 8 }}
        >
          {tipoOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <ul>
        {solicitations.map(s => (
          <li key={s.id}>
            {s.descricao} - Status: {s.status}
            <select
              value={s.status}
              onChange={e => handleUpdateStatus(s.id, e.target.value)}
              style={{ marginLeft: 8, marginRight: 8 }}
            >
              {statusOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <button
              onClick={() => handleDelete(s.id)}
              style={{ marginLeft: 8, color: 'white', background: 'red', border: 'none', borderRadius: 4, padding: '4px 8px', cursor: 'pointer' }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PainelAdmin;
import { useState } from 'react';
import { createSolicitation } from '../../services/solicitationsService';
import type { Solicitacao, TipoSolicitacao } from '../../types/typeSolicitation';
import './style.css';

export default function FormSolicitacao() {
  const [form, setForm] = useState<Solicitacao>({
    nomeSolicitante: '',
    cpfCnpj: '',
    endereco: '',
    descricao: '',
    tipo: 'TROCA_LAMPADA',
    status: 'PENDENTE',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === 'tipo' ? value as TipoSolicitacao : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createSolicitation(form);
      alert('Solicitação cadastrada com sucesso!');
      setForm({
        nomeSolicitante: '',
        cpfCnpj: '',
        endereco: '',
        descricao: '',
        tipo: 'TROCA_LAMPADA',
        status: 'PENDENTE',
      });
    } catch (error) {
      console.error('Erro ao cadastrar solicitação:', error);
      alert('Erro ao cadastrar solicitação. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Cadastre uma Solicitação</h2>
      <input name="nomeSolicitante" placeholder="Nome" value={form.nomeSolicitante} onChange={handleChange} required />
      <input name="cpfCnpj" placeholder="CPF/CNPJ" value={form.cpfCnpj} onChange={handleChange} required />
      <input name="endereco" placeholder="Endereço" value={form.endereco} onChange={handleChange} required />
      <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />

      <select name="tipo" value={form.tipo} onChange={handleChange} required>
        <option value='TROCA_LAMPADA'>Troca de lâmpada</option>
        <option value='TAPA_BURACO'>Tapa-buraco</option>
      </select>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

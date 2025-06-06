import './style.css'
import { useState } from 'react'
import { createSolicitation } from '../../services/solicitationsService';

function Home() {

  const [form, setForm] = useState({
    tipo: '',
    endereco: '',
    descricao: '',
    nomeSolicitante: '',
    cpfCnpj: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        tipo: '',
      });
    }
    catch (error) {
      console.error('Erro ao cadastrar solicitação:', error);
      alert('Erro ao cadastrar solicitação. Tente novamente.');
    }

    console.log('Dados enviados:', form);
  };

  return (
    <div className="container">
      <h1>Bem-vindo ao <strong>UrbanTech</strong></h1>
      <p>Cadastre sua solicitação de serviço urbano:</p>
      <form onSubmit={handleSubmit} className="form">
        <h2>Cadastre uma Solicitação</h2>
        <input name="nomeSolicitante" type='text' placeholder="Nome" value={form.nomeSolicitante} onChange={handleChange} required/>
        <input name="cpfCnpj" type='text'  placeholder="CPF/CNPJ do solicitante" value={form.cpfCnpj} onChange={handleChange} required/>
        <input name="endereco" type='text'  placeholder="Endereço" value={form.endereco} onChange={handleChange} required/>
        <input name="descricao" type='text' placeholder="Descrição" value={form.descricao} onChange={handleChange} required/>

        <select name="tipo" value={form.tipo} onChange={handleChange} required>
          <option value="">Selecione o tipo</option>
          <option value="troca-lampada">Troca de lâmpada</option>
          <option value="tapa-buraco">Tapa-buraco</option>
        </select>

        <button type='submit'>Cadastrar</button>
        
      </form>
    </div>
  )
}

export default Home

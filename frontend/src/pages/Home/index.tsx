import './style.css'
import { useState } from 'react'

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

    //chamada para o backend (services/solicitacao.ts)
    console.log('Dados enviados:', form);
  };

  return (
    <div className="container">
      <h1>Bem-vindo</h1>
      <p>Cadastre sua solicitação de serviço urbano:</p>
      <form onSubmit={handleSubmit} className="form">
        <h2>Cadastre uma Solicitação</h2>
        <input name="nome-solicitante" type='text' placeholder="Endereço" value={form.nomeSolicitante} onChange={handleChange} required/>
        <input name="cpf-solicitante" type='text'  placeholder="CPF/CNPJ do solicitante" value={form.cpfCnpj} onChange={handleChange} required/>
        <input name="endereco" type='text'  placeholder="Nome do solicitante" value={form.endereco} onChange={handleChange} required/>
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

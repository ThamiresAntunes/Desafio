import './style.css';
import { useState } from 'react';
import type { LoginAdmin } from '../../types/typeLoginAdmin';

export default function FormAdmin() {
  const [FormAdmin, setForm] = useState<LoginAdmin>({
    email: '',
    senha: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      alert('Administrador logado com sucesso!');
      setForm({
        email: '',
        senha: '',
      });
    } catch (error) {
      console.log(FormAdmin)
      console.error('Erro ao logar como administrador:', error);
      alert('Erro ao logar como administrador. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="email" placeholder="Email" value={FormAdmin.email} onChange={handleChange} required />
      <input name="senha" placeholder="Senha" value={FormAdmin.senha} onChange={handleChange} required />

      <button className="btn" type="submit">Entrar</button>
    </form>
  );

}

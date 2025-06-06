import "./style.css";
import { useState } from "react";
import type { LoginAdmin } from "../../types/typeLoginAdmin";
import { login } from "../../services/adminService";

export default function FormAdmin() {
  const [form, setForm] = useState<LoginAdmin>({ email: "", senha: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(form);
      localStorage.setItem("token", data.access_token);
      alert("Login realizado com sucesso!");
      setForm({ email: "", senha: "" });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao logar como administrador. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="senha"
        placeholder="Senha"
        type="password"
        value={form.senha}
        onChange={handleChange}
        required
      />
      <button className="btn" type="submit">
        Entrar
      </button>
    </form>
  );
}
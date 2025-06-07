import type { LoginAdmin } from '../types/typeLoginAdmin';

export async function login(data: LoginAdmin) {
  const response = await fetch('http://localhost:3000/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Erro ao fazer login');
  }

  return response.json();
}
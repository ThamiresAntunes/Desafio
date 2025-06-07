export async function deleteSolicitation(id: number) {
  const token = localStorage.getItem('token');
  const response = await fetch(`http://localhost:3000/solicitations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error('Erro ao excluir solicitação');
  return response.json();
}
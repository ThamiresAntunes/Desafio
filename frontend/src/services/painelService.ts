export async function getSolicitation() {
  const token = localStorage.getItem("token");
  const response = await fetch('http://localhost:3000/solicitations', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Erro ao buscar solicitações');
  }

  return response.json();
}
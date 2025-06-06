import FormAdmin from '../../components/FormAdmin';
import './style.css';

export default function LoginAdmin() {
  return (
    <>
      <button className='btn'>Login</button>
      <div className="container">
        <h1><strong>UrbanTech</strong></h1>
        <p>Entre para ter acesso ao painel de solicitações</p>
        <FormAdmin />
      </div>
    </>
  );
}

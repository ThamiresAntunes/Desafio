import FormSolicitacao from '../../components/FormSolicitation';
import { Link } from 'react-router-dom';
import './style.css';

export default function Home() {
  return (
    <>
      <Link to="/login" className='btn'>Login</Link>
      <div className="container">
        <h1>Bem-vindo ao <strong>UrbanTech</strong></h1>
        <FormSolicitacao />
      </div>
    </>
  );
}

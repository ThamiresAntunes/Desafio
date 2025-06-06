import FormSolicitacao from '../../components/FormSolicitation';
import './style.css';

export default function Home() {
  return (
    <div className="container">
      <h1>Bem-vindo ao <strong>UrbanTech</strong></h1>
      <p>Cadastre sua solicitação de serviço urbano:</p>
      <FormSolicitacao />
    </div>
  );
}

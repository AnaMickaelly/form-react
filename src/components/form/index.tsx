import { Container } from './styles';
import LoginImage from '../../assets/Images/Login.svg';
import { Input } from '../Input';

export function Form() {
  return (
    <Container>
      <div className="header">
        <div className="text-header">
          <h3>Welcome Back!</h3>
          <p>Sign in to continue</p>
        </div>
        <img src={LoginImage} alt="Login" />
      </div>
      <div className="form-container">
        <Input title="Nome" placeholder="nome" />
        <Input title="Data de nascimento" placeholder="00/00/0000" />
        <Input title="CPF" placeholder="000-000-000-00" />
        <Input title="CEP" placeholder="00-000-000" />
        <div className="button-container">
          <button>Enviar</button>
        </div>
      </div>
    </Container>
  );
}

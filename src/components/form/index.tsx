import { useState } from 'react';
import { Container } from './styles';
import LoginImage from '../../assets/Images/Login.svg';
import { Input } from '../Input';

export function Form() {
  const [name, setName] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  console.log(cep);
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
        <Input
          title="Nome"
          placeholder="nome"
          value={name}
          onChange={(event: any) => setName(event.target.value)}
        />
        <Input
          title="Data de nascimento"
          placeholder="00/00/0000"
          value={dateOfBirth}
          onChange={(event: any) => setdateOfBirth(event.target.value)}
        />
        <Input
          title="CPF"
          placeholder="000-000-000-00"
          value={cpf}
          onChange={(event: any) => setCpf(event.target.value)}
        />
        <Input
          title="CEP"
          placeholder="00-000-000"
          value={cep}
          onChange={(event: any) => setCep(event.target.value)}
        />
        <div className="button-container">
          <button>Enviar</button>
        </div>
      </div>
    </Container>
  );
}

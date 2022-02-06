import { useState } from 'react';
import { setCookie } from 'nookies';
import { Container } from './styles';
import { getAdressUser } from '../../service/getAdressUser';
import { Input } from '../Input';
import { formatterUserData } from './helper';
import { Header } from '../header';

export function Form() {
  const [name, setName] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');

  const handlerSaveDataStorageCookies = () => {
    const response = formatterUserData({ name, dateOfBirth, cpf, cep });
    localStorage.setItem('user', JSON.stringify(response, null, 2));
    setCookie(null, 'user', JSON.stringify(response));
  };

  return (
    <Container>
      <Header title="Welcome Back!" subtitle="Sign in to continue" />
      <div className="form-container">
        <Input
          title="Nome"
          placeholder="Nome"
          value={name}
          onChange={(event: any) => setName(event.target.value)}
        />
        <Input
          title="Data de nascimento"
          placeholder="00/00/0000"
          value={dateOfBirth}
          onChange={(event: any) => setdateOfBirth(event.target.value)}
          mask="99/99/9999"
        />
        <Input
          title="CPF"
          placeholder="000.000.000-00"
          mask="999.999.999-99"
          value={cpf}
          onChange={(event: any) => setCpf(event.target.value)}
        />
        <Input
          title="CEP"
          placeholder="00000-000"
          mask="99999-999"
          value={cep}
          onChange={(event: any) => setCep(event.target.value)}
        />
        <div className="button-container">
          <button onClick={() => handlerSaveDataStorageCookies()}>
            Enviar
          </button>
        </div>
      </div>
    </Container>
  );
}

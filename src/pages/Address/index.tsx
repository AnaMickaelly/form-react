import { useState, useEffect } from 'react';
import { Header } from '../../components/header';
import { getAdressUser } from '../../service/getAdressUser';
import { dataReturn } from './interfaces';
import { Container } from './style';

export function Address() {
  const [data, setData] = useState<dataReturn>({
    bairro: '',
    cep: '',
    complemento: '',
    localidade: '',
    logradouro: '',
    uf: '',
  });

  const handlerFormatterObjectLocal = () => {
    const dataUser: any = localStorage.getItem('user');
    const result = JSON.parse(dataUser);
    return {
      cep: result.cep.replace(/[^\d]+/g, ''),
      name: result.name,
    };
  };

  const { cep, name } = handlerFormatterObjectLocal();

  const handlerInfos = async () => {
    const response = await getAdressUser(cep);
    setData(response);
  };

  useEffect(() => {
    handlerInfos();
  }, []);

  return (
    <Container>
      <Header title={`Olá ${name}! `} subtitle="Aqui está o seu endereço: " />
      <div>
        <ul>
          <li>CEP: {data.cep}</li>
          <li>Logradouro: {data.logradouro}</li>
          {data.complemento && <li>Complemento: {data.complemento}</li>}
          <li>Bairro: {data.bairro}</li>
          <li>Cidade: {data.localidade}</li>
          <li>Estado: {data.uf}</li>
        </ul>
      </div>
    </Container>
  );
}

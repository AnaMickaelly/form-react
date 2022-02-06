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

  const handlerInfos = async () => {
    const response = await getAdressUser('65912340');
    setData(response);
  };

  useEffect(() => {
    handlerInfos();
  }, []);

  console.log(data);
  return (
    <Container>
      <Header title="Olá Ana! " subtitle="Aqui está o seu endereço" />
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

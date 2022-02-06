import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';
import { getAdressUser } from '../../service/getAdressUser';
import { dataReturn } from './interfaces';
import { Container } from './style';

import back from '../../assets/Images/left-arrow.png';
import { Disclaimer } from '../../components/disclaimer';

export function Address() {
  const [data, setData] = useState<dataReturn>({
    bairro: '',
    cep: '',
    complemento: '',
    localidade: '',
    logradouro: '',
    uf: '',
  });
  const navigate = useNavigate();

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
      <div className="content">
        <Header title={`Olá ${name}! `} subtitle="Aqui está o seu endereço: " />
        <div className="wrapper">
          <div className="list">
            <div className="text-info">
              <img onClick={() => navigate('/')} src={back} alt="Voltar" />
              <h2>Suas informações: </h2>
            </div>
            <ul>
              <span>CEP: </span>
              <li>{data.cep}</li>
              <span>Logradouro: </span>
              <li>{data.logradouro}</li>
              {data.complemento && (
                <>
                  <span>Complemento:</span>
                  <li>{data.complemento}</li>
                </>
              )}
              <span>Bairro: </span>
              <li>{data.bairro}</li>
              <span>Cidade: </span>
              <li>{data.localidade}</li>
              <span>Estado: </span>
              <li>{data.uf}</li>
            </ul>
          </div>
          <div className="disclaimer">
            <Disclaimer />
          </div>
        </div>
      </div>
    </Container>
  );
}

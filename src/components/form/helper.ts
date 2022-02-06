import { formatterUserDataProps } from './interfaces';

export const formatterUserData = ({
  name,
  dateOfBirth,
  cpf,
  cep,
}: formatterUserDataProps) => {
  const result = {
    name,
    dateOfBirth,
    cpf,
    cep,
  };
  return result;
};

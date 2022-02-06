import axios from 'axios';

export const getAdressUser = async (cep: string) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

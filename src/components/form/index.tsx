import { Formik, Form as FormFormik } from 'formik';
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
      <Formik
        initialValues={{
          name: '',
          dateOfBirth: '',
          cpf: '',
          cep: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <div className="form-container">
          <FormFormik>
            <Input title="Nome" name="name" placeholder="nome" id="name" />
            <Input
              title="Data de nascimento"
              placeholder="00/00/0000"
              name="dateOfBirth"
              id="dateOfBirth"
            />
            <Input
              title="CPF"
              name="cpf"
              placeholder="000-000-000-00"
              id="cpf"
            />
            <Input title="CEP" name="cep" placeholder="00-000-000" id="cep" />
            <div className="button-container">
              <button>Enviar</button>
            </div>
          </FormFormik>
        </div>
      </Formik>
    </Container>
  );
}

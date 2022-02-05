import { Field } from 'formik';
import { Container } from './styles';
import { InputProps } from './interfaces';

export function Input({ title, placeholder, id, name }: InputProps) {
  return (
    <Container>
      <h4>{title}</h4>
      <Field id={id} name={name} type="text" placeholder={placeholder} />
    </Container>
  );
}

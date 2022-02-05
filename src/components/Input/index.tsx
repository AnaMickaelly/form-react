import { Container } from './styles';
import { InputProps } from './interfaces';

export function Input({ title, placeholder }: InputProps) {
  return (
    <Container>
      <h4>{title}</h4>
      <input type="text" placeholder={placeholder} />
    </Container>
  );
}

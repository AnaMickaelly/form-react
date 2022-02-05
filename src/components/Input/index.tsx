import { Container } from './styles';
import { InputProps } from './interfaces';

export function Input({ title, placeholder, value, onChange }: InputProps) {
  return (
    <Container>
      <h4>{title}</h4>
      <input
        onChange={onChange}
        value={value}
        type="text"
        placeholder={placeholder}
      />
    </Container>
  );
}

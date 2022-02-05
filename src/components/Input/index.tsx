import InputMask from 'react-input-mask';

import { Container } from './styles';
import { InputProps } from './interfaces';

export function Input({
  title,
  placeholder,
  mask,
  onChange,
  value,
}: InputProps) {
  return (
    <Container>
      <h4>{title}</h4>
      {mask ? (
        <InputMask
          mask={mask}
          onChange={onChange}
          value={value}
          type="text"
          placeholder={placeholder}
        />
      ) : (
        <input
          type="text"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      )}
    </Container>
  );
}

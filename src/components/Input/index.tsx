import { Container } from './styles';

interface Props {
  title: string;
  placeholder: string;
}
export function Input(props: Props) {
  return (
    <Container>
      <h4>{props.title}</h4>
      <input type="text" placeholder={props.placeholder} />
    </Container>
  );
}

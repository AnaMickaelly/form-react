import LoginImage from '../../assets/Images/Login.svg';
import { HeaderProps } from './interfaces';
import { Container } from './style';

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <Container>
      <div className="header">
        <div className="text-header">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <img src={LoginImage} alt="Login" />
      </div>
    </Container>
  );
}

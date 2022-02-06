import styled from 'styled-components';

export const Container = styled.div`
  max-width: 651px;
  width: 100%;
  height: 584px;
  font-family: 'Poppins', sans-serif;
  border-radius: 4px;

  .form-container {
    background-color: #fff;
    padding: 28px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        color: #fff;
        max-width: 395px;
        width: 100%;
        height: 36px;
        border: none;
        background-color: #556ee6;
        border-radius: 4px;
      }
    }
  }
`;

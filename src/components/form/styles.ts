import styled from 'styled-components';

export const Container = styled.div`
  width: 451px;
  height: 584px;
  font-family: 'Poppins', sans-serif;
  border-radius: 4px;

  .header {
    display: flex;
    justify-content: space-between;
    background-color: #9df0a3;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    .text-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 24px;
      h3 {
        font-weight: 500;
        font-size: 16.25px;
        line-height: 19px;
        color: #556ee6;
      }
      p {
        font-size: 13px;
        line-height: 19px;
        color: #556ee6;
      }
    }
  }

  .form-container {
    background-color: #fff;
    padding: 28px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    .button-container {
      button {
        color: #fff;
        width: 395px;
        height: 36px;
        border: none;
        background-color: #556ee6;
        border-radius: 4px;
      }
    }
  }
`;

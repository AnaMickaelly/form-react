import styled from 'styled-components';

export const Container = styled.div`
  .header {
    width: 100%;

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
`;

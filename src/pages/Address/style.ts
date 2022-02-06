import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
  width: 100vw;
  height: 100vh;

  .content {
    width: 100%;
    max-width: 651px;
  }

  .wrapper {
    margin-top: 1px;
    width: 100%;
    height: 100%;
    background-color: #fff;

    .list {
      padding: 16px;
      display: flex;

      flex-direction: column;

      .text-info {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        h2 {
          color: #556ee6;
        }

        img {
          cursor: pointer;
          position: absolute;
          left: 5px;
        }
      }

      span {
        font-size: 18px;
        color: #556ee6;
        font-weight: 500;
      }

      li {
        list-style: none;
        margin-left: 5px;
        padding: 3px;
      }
    }
  }

  .disclaimer {
    margin-top: 24px;
    margin-bottom: -50px;
    display: flex;
    justify-content: center;
  }
`;

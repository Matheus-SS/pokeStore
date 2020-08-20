import styled from 'styled-components';

export const Container = styled.div``;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  height: 250px;

  box-shadow: 2px 2px 4px -2px #000;
  transition: transform 0.3s;

  display: flex;
  flex-direction: column;

  p {
    margin-top: auto;
  }

  .moves {
    margin-top: 5px;
    border-radius: 0;
  }
`;
export const Header = styled.div`
  position: relative;

  span {
    border-radius: 0;
  }
  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Bio = styled.div`
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
  }
  .header {
    border-radius: 0;
  }
`;

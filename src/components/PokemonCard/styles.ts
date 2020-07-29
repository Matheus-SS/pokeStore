import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;

  cursor: pointer;
  box-shadow: 2px 2px 4px -2px #000;
  transition: transform 0.3s;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    color: #fff;
    background-color: #f44e3f;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    object-fit: cover;
    filter: drop-shadow(4px 2px 2px #000);
  }
`;

export const Bio = styled.span`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 10px;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      background-color: #e47369;
      margin-top: 3px;
      padding: 2px 8px 2px;
    }
  }
`;

import styled from 'styled-components';

import { darken } from 'polished';

interface IContainerProps {
  isOpen: boolean;
}
export const Container = styled.div<IContainerProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background: rgba(0, 0, 0, 0.4);
`;

export const ContainerCart = styled.div`
  height: 100%;
  width: 350px;
  margin-left: auto;
  background-color: #fefefe;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    margin-right: auto;
    margin-top: 5px;
    background-color: transparent;
    border: 0;
  }

  img {
    width: 40px;
    height: 40px;
  }

  h3 {
    margin-top: 5px;
  }
`;

export const PokemonContainer = styled.div`
  height: 350px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
`;

export const PokemonContainerList = styled.ul`
  list-style: none;
  margin: 10px 0;

  overflow-y: auto;
  li {
    margin: 0 30px;
  }
  li + li {
    margin-top: 8px;
  }
`;

export const PokemonItemCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: #c9c9c9;

  span {
    display: flex;

    align-items: center;

    p {
      margin-left: 5px;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
  span.action {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    word-break: break-all;
    width: 50%;
    margin: 0 5px;
  }
  button {
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  p {
    display: flex;
    justify-content: space-between;
  }

  span {
    margin-top: 20px;

    display: flex;
    justify-content: center;

    button {
      width: 100%;
      padding: 10px;
      background-color: #78c850;
      border: 0;
      border-radius: 4px;

      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transition: background-color 0.3s;

      &:hover {
        background-color: ${darken(0.15, '#78c850')};
      }
    }
  }
`;

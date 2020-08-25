import styled from 'styled-components';

interface ContainerProps {
  windowSize?: number;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #000;
  height: 60px;
  box-shadow: 0px 3px 9px 2px #000;

  position: fixed;
  bottom: 0;

  display: none;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-around;
    flex: 1;
  }

  /* Resize the window according to the size that was passed through the properties */
  @media (max-width: ${props => props.windowSize}px) {
    display: flex;
  }
`;

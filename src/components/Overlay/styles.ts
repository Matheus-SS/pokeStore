import styled from 'styled-components';

interface IContainerProps {
  isOpen?: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background: rgba(0, 0, 0, 0.4);
`;

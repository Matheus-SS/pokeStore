import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { ContainerButton, Container, AmountItems } from './styles';

interface IFloatingCartProps {
  setIsOpen: () => void; // this function change the state to open the pokemon cart
}
const FloatingCart: React.FC<IFloatingCartProps> = ({ setIsOpen }) => {
  return (
    <ContainerButton type="button" onClick={setIsOpen}>
      <Container>
        <FiShoppingCart size={24} color="#396bba" />

        <AmountItems>
          <p>3</p>
        </AmountItems>
      </Container>
    </ContainerButton>
  );
};

export default FloatingCart;

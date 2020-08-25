import React, { useMemo, useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { ContainerButton, Container, AmountItems } from './styles';

import { useCart } from '../../hooks/cartHook';

interface IFloatingCartProps {
  setIsOpen: () => void; // this function change the state to open the pokemon cart
  visible: boolean;
}
const FloatingCart: React.FC<IFloatingCartProps> = ({ setIsOpen, visible }) => {
  const [widthWindow, setWidthWindow] = useState(0);
  const [visibility, setVisibility] = useState(visible);

  const { products } = useCart();

  const handleSetwidth = () => {
    const width = window.innerWidth;
    setWidthWindow(width);
  };

  // When the window smaller than 700px the floating cart on top disappears and the floating cart on bottom pops up
  useEffect(() => {
    window.addEventListener('resize', handleSetwidth);

    if (widthWindow <= 700) {
      setVisibility(!visible); // change the visibility of cart
    }

    return () => {
      window.removeEventListener('resize', handleSetwidth);
    };
  }, [visible, widthWindow]);

  const totalItensInCart = useMemo(() => {
    const quantityTotal = products.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return quantityTotal;
  }, [products]);

  return (
    <ContainerButton type="button" onClick={setIsOpen} visible={visibility}>
      <Container>
        <FiShoppingCart size={24} color="#396bba" />

        <AmountItems>
          <p>{totalItensInCart}</p>
        </AmountItems>
      </Container>
    </ContainerButton>
  );
};

export default FloatingCart;

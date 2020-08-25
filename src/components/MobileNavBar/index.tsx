import React from 'react';

import { Container } from './styles';

import FloatingCart from '../FloatingCart';

interface MobileNavBarProps {
  windowSize?: number;
  setIsOpen: () => void;
  visible: boolean;
}
const MobileNavBar: React.FC<MobileNavBarProps> = ({
  windowSize = 700,
  setIsOpen,
  visible,
}: MobileNavBarProps) => {
  return (
    <Container windowSize={windowSize}>
      <nav>
        <FloatingCart setIsOpen={setIsOpen} visible={visible} />
      </nav>
    </Container>
  );
};

export default MobileNavBar;

import React, { useState, useEffect } from 'react';

import { Container } from './styles';

interface IOverlayProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Overlay: React.FC<IOverlayProps> = ({ children, isOpen }) => {
  const [overlay, setOverlay] = useState(isOpen);

  useEffect(() => {
    setOverlay(isOpen);
  }, [isOpen]);

  return <Container isOpen={overlay}>{children}</Container>;
};

export default Overlay;

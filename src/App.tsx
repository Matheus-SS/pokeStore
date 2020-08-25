import React from 'react';

import GlobalStyle from './styles/global';
import Home from './pages/Home';
import { CartProvider } from './hooks/cartHook';

const App: React.FC = () => {
  return (
    <CartProvider>
      <GlobalStyle />
      <Home />
    </CartProvider>
  );
};
export default App;

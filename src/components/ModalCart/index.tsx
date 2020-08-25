import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from 'react';

import { MdClose, MdRemoveShoppingCart } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';

import { useCart } from '../../hooks/cartHook';

import Overlay from '../Overlay';
import { formatValue } from '../../utils/formatValue';

import pokedex from '../../assets/pokedex.png';

import {
  ContainerCart,
  Header,
  PokemonContainer,
  PokemonContainerList,
  EmptyCart,
  PokemonItemCart,
  ActionContainer,
  Payment,
} from './styles';

interface ICartProps {
  setIsOpen: () => void;
  isOpen: boolean;
}
const ModalCart: React.FC<ICartProps> = ({ setIsOpen, isOpen }) => {
  const [openModal, setOpenModal] = useState(isOpen);

  const { products, increment, decrement } = useCart();

  const containerCart = useRef<HTMLDivElement>(null);

  // Disable button when cart is empty
  const disable = useMemo(() => {
    if (products.length === 0) {
      return true;
    }
    return false;
  }, [products.length]);

  // close the modal when click in the overlay
  const handleClickOutside = useCallback(
    (ev: Event) => {
      ev.stopPropagation();
      const contain = containerCart.current?.contains(ev.target as Node);
      if (contain) {
        return;
      }

      // verifyies if the modal is open, then close it
      if (isOpen === true) {
        setIsOpen(); // change the state "modalCart" in Home page
      }
    },
    [isOpen, setIsOpen],
  );

  // add a function handleClickOutside when the component loads
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    setOpenModal(isOpen);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isOpen]);

  function handleIncrement(id: number): void {
    increment(id);
  }

  function handleDecrement(id: number): void {
    decrement(id);
  }

  const cartTotal = useMemo(() => {
    const valorTotal = products.reduce((accumulator, product) => {
      const subTotal = product.quantity * product.weight;

      return accumulator + subTotal;
    }, 0);

    return formatValue(valorTotal);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const quantityTotal = products.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return quantityTotal;
  }, [products]);

  return (
    <Overlay isOpen={openModal}>
      <ContainerCart ref={containerCart}>
        <Header>
          <button type="button" onClick={setIsOpen}>
            <MdClose size={24} color="#000" />
          </button>
          <img src={pokedex} alt="pokedex" />
          <h3>Cart</h3>
        </Header>

        <PokemonContainer>
          {products.length !== 0 ? (
            <PokemonContainerList>
              {products.map(product => (
                <li key={product.id}>
                  <PokemonItemCart>
                    <span>
                      <img
                        src={product.sprites.front_default}
                        alt="pokemonimage"
                      />
                      <p>{product.name}</p>
                    </span>
                    <span className="action">
                      <p>{product.priceFormatted}</p>

                      <ActionContainer>
                        <button
                          type="button"
                          onClick={() => handleDecrement(product.id)}
                        >
                          <FiMinus size={15} />
                        </button>
                        <p>{product.quantity}</p>
                        <button
                          type="button"
                          onClick={() => handleIncrement(product.id)}
                        >
                          <FiPlus size={15} />
                        </button>
                      </ActionContainer>
                    </span>
                  </PokemonItemCart>
                </li>
              ))}
            </PokemonContainerList>
          ) : (
              <EmptyCart>
                <MdRemoveShoppingCart size={100} />
                <p>Carrinho vazio</p>
              </EmptyCart>
            )}
        </PokemonContainer>

        <Payment>
          <div>
            <p>
              <strong>Quantitade de itens:</strong>
              <strong>{totalItensInCart}</strong>
            </p>
            <p>
              <strong>Total:</strong>
              <strong>{cartTotal}</strong>
            </p>
          </div>

          <span>
            <button type="button" disabled={disable}>
              Confirmar pagamento
            </button>
          </span>
        </Payment>
      </ContainerCart>
    </Overlay>
  );
};

export default ModalCart;

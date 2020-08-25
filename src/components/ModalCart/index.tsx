import React, { useRef, useEffect, useCallback, useState } from 'react';

import { MdClose } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Overlay from '../Overlay';
import {
  ContainerCart,
  Header,
  PokemonContainer,
  PokemonContainerList,
  PokemonItemCart,
  ActionContainer,
  Payment,
} from './styles';
import pokedex from '../../assets/pokedex.png';

interface ICartProps {
  setIsOpen: () => void;
  isOpen: boolean;
}
const ModalCart: React.FC<ICartProps> = ({ setIsOpen, isOpen }) => {
  const [openModal, setOpenModal] = useState(isOpen);

  const containerCart = useRef<HTMLDivElement>(null);

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
          <PokemonContainerList>
            <li>
              <PokemonItemCart>
                <span>
                  <img src={pokedex} alt="pokemonimage" />
                  <p>picachu</p>
                </span>
                <span className="action">
                  <p>R$ 30</p>

                  <ActionContainer>
                    <button type="button">
                      <FiMinus size={15} />
                    </button>
                    <p>1</p>
                    <button type="button">
                      <FiPlus size={15} />
                    </button>
                  </ActionContainer>
                </span>
              </PokemonItemCart>
            </li>

            <li>
              <PokemonItemCart>
                <span>
                  <img src={pokedex} alt="pokemonimage" />
                  <p>picachu</p>
                </span>
                <span className="action">
                  <p>R$ 30</p>

                  <ActionContainer>
                    <button type="button">
                      <FiMinus size={15} />
                    </button>
                    <p>1</p>
                    <button type="button">
                      <FiPlus size={15} />
                    </button>
                  </ActionContainer>
                </span>
              </PokemonItemCart>
            </li>

            <li>
              <PokemonItemCart>
                <span>
                  <img src={pokedex} alt="pokemonimage" />
                  <p>picachu</p>
                </span>
                <span className="action">
                  <p>R$ 30</p>

                  <ActionContainer>
                    <button type="button">
                      <FiMinus size={15} />
                    </button>
                    <p>1</p>
                    <button type="button">
                      <FiPlus size={15} />
                    </button>
                  </ActionContainer>
                </span>
              </PokemonItemCart>
            </li>
          </PokemonContainerList>
        </PokemonContainer>

        <Payment>
          <p>
            <strong>Total:</strong>
            <strong>R$3000</strong>
          </p>
          <span>
            <button type="button">Confirmar pagamento</button>
          </span>
        </Payment>
      </ContainerCart>
    </Overlay>
  );
};

export default ModalCart;

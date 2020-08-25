import React, { useState, useEffect, useCallback } from 'react';

import Pagination from 'react-js-pagination';
import PokeStoreLogo from '../../assets/PokeStoreLogo.png';
import pokemonApi from '../../services/api';

import PokemonStatusInterface from './IPokemonDTO';

import PokemonCardSkeleton from '../../skeletons/PokemonCardSkeleton';

import PokemonCard from '../../components/PokemonCard/PokemonCard';
import FloatingCart from '../../components/FloatingCart';
import ModalCart from '../../components/ModalCart';

import { Container, Banner, Logo, PokemonList, Pages } from './styles';
import MobileNavBar from '../../components/MobileNavBar';

interface PokemonInterface {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [pokemonStatus, setPokemonStatus] = useState<PokemonStatusInterface[]>(
    [],
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffSet] = useState(0);
  const [limit] = useState(18);
  const [loading, setLoading] = useState(true);

  const [modalCart, setModalCart] = useState(false);

  useEffect(() => {
    // load url and name of the pokemons
    async function LoadPokemons(): Promise<void> {
      const response = await pokemonApi.get(
        `pokemon?limit=${limit}&offset=${offset}`,
      );
      const pokemon = response.data.results;
      setPokemons(pokemon);
    }
    LoadPokemons();
  }, [offset, limit]);

  // return the data of pokemon
  const getPokemonData = useCallback(async url => {
    const response = await pokemonApi.get(`${url}`);
    return response.data;
  }, []);

  useEffect(() => {
    // load all info of the pokemons in the page
    async function loadPokemonStatus(): Promise<void> {
      setLoading(true);
      const arrayPokemon = pokemons.map(async poke => {
        const pokemon = await getPokemonData(`${poke.url}`);
        return pokemon;
      });
      const result = await Promise.all(arrayPokemon);

      setPokemonStatus(result);
      setLoading(false);
    }
    loadPokemonStatus();
  }, [getPokemonData, pokemons]);

  // change the page
  const handlePageChange = useCallback(
    page => {
      setCurrentPage(page);
      setOffSet(page * limit - limit);
      setLoading(true);
      window.scrollTo({ top: 0 });
    },
    [limit],
  );

  // open the pokemon cart
  function toggleModalCart(): void {
    setModalCart(!modalCart);
  }

  return (
    <>
      <Container>
        <Banner>
          <span>
            <FloatingCart setIsOpen={toggleModalCart} visible />
          </span>
          <Logo>
            <img src={PokeStoreLogo} alt="logo" />
          </Logo>
        </Banner>

        <PokemonList>
          {loading ? (
            <PokemonCardSkeleton />
          ) : (
              pokemonStatus.map(pokemon => (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
              ))
            )}
        </PokemonList>

        <Pages>
          <Pagination
            activePage={currentPage}
            totalItemsCount={800}
            onChange={handlePageChange}
            itemsCountPerPage={20}
          />
        </Pages>

        <ModalCart setIsOpen={toggleModalCart} isOpen={modalCart} />
      </Container>
      <MobileNavBar setIsOpen={toggleModalCart} visible={false} />
    </>
  );
};

export default Home;

import React, { useState, useEffect, useCallback } from 'react';
// testing
import Pagination from 'react-js-pagination';
import PokeStoreLogo from '../../assets/PokeStoreLogo.png';
import pokemonApi from '../../services/api';

import PokemonCard from '../../components/PokemonCard/PokemonCard';
import PokemonStatusInterface from './IPokemonDTO';

import PokemonCardSkeleton from '../../skeletons/PokemonCardSkeleton';

import { Container, Banner, PokemonList, Pages } from './styles';

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

  useEffect(() => {
    async function LoadPokemons(): Promise<void> {
      const response = await pokemonApi.get(
        `pokemon?limit=${limit}&offset=${offset}`,
      );
      const pokemon = response.data.results;
      setPokemons(pokemon);
    }
    LoadPokemons();
  }, [offset, limit]);

  const getPokemonData = useCallback(async url => {
    const response = await pokemonApi.get(`${url}`);
    return response.data;
  }, []);

  useEffect(() => {
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

  const handlePageChange = useCallback(
    page => {
      setCurrentPage(page);
      setOffSet(page * limit - limit);
      setLoading(true);
      window.scrollTo({ top: 0 });
    },
    [limit],
  );

  return (
    <Container>
      <Banner>
        <img src={PokeStoreLogo} alt="logo" />
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
    </Container>
  );
};

export default Home;

import React, { useState, useEffect, useCallback } from 'react';

import { Container, Banner, PokemonList } from './styles';

import PokeStoreLogo from '../../assets/PokeStoreLogo.png';
import pokemonApi from '../../services/api';

import PokemonCard from '../../components/PokemonCard/PokemonCard';
import PokemonStatusInterface from './IPokemonDTO';

interface PokemonInterface {
  name: string;
  url: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [pokemonStatus, setPokemonStatus] = useState<PokemonStatusInterface[]>(
    [],
  );

  useEffect(() => {
    async function LoadPokemons(): Promise<void> {
      const response = await pokemonApi.get('pokemon?limit=100&offset=100');
      const pokemon = response.data.results;
      setPokemons(pokemon);
    }
    LoadPokemons();
  }, []);

  const getPokemonData = useCallback(async url => {
    const response = await pokemonApi.get(`${url}`);
    return response.data;
  }, []);

  useEffect(() => {
    async function loadPokemonStatus(): Promise<void> {
      const arrayPokemon = pokemons.map(async poke => {
        const pokemon = await getPokemonData(`${poke.url}`);
        return pokemon;
      });
      const result = await Promise.all(arrayPokemon);

      setPokemonStatus(result);
    }
    loadPokemonStatus();
  }, [getPokemonData, pokemons]);

  console.log(pokemonStatus);
  return (
    <Container>
      <Banner>
        <img src={PokeStoreLogo} alt="logo" />
      </Banner>
      <PokemonList>
        {pokemonStatus.map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </PokemonList>
    </Container>
  );
};

export default Home;

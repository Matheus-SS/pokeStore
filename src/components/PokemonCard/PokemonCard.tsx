import React, { useMemo } from 'react';

import { FaCartPlus } from 'react-icons/fa';
import { Card, Header, Bio } from './styles';
import { formatValue } from '../../utils/formatValue';
import { IPokemonCardDTO } from './IPokemonCardDTO';

const amountMoves: number[] = [1, 2, 3, 4];

const PokemonCard: React.FC<IPokemonCardDTO> = ({ pokemon }) => {
  const FormattedPrice = useMemo(() => {
    return formatValue(pokemon.weight);
  }, [pokemon.weight]);

  const CapitalizePokemonName = useMemo(() => {
    if (typeof pokemon.name !== 'string') return '';
    return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  }, [pokemon.name]);

  return (
    <Card>
      <Header pokemonType={pokemon.types[0].type.name}>
        <button type="button">
          <FaCartPlus size={25} />
        </button>

        <div>
          <img src={pokemon.sprites.front_default} alt="pokemon" />
          <strong>{FormattedPrice}</strong>
        </div>
      </Header>
      <Bio pokemonType={pokemon.types[0].type.name}>
        <strong>{CapitalizePokemonName}</strong>
        <strong>Moves</strong>
        <div>
          {amountMoves.map((moves, index) => (
            <p key={moves}>
              {pokemon.moves[index] ? pokemon.moves[index].move.name : '-'}
            </p>
          ))}
        </div>
      </Bio>
    </Card>
  );
};

export default PokemonCard;

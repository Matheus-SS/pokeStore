import React, { useMemo } from 'react';

import { Card, Header, Bio } from './styles';
import { formatValue } from '../../utils/formatValue';
import IPokemonCardDTO from './IPokemonCardDTO';

const amountMoves: number[] = [1, 2, 3, 4];
const PokemonCard: React.FC<IPokemonCardDTO> = ({ pokemon }) => {
  const FormattedPrice = useMemo(() => {
    return formatValue(pokemon.weight);
  }, [pokemon.weight]);

  return (
    <Card>
      <Header>
        <div>
          <img src={pokemon.sprites.front_default} alt="pokemon" />
          <strong>{FormattedPrice}</strong>
        </div>
      </Header>
      <Bio>
        <strong>{pokemon.name}</strong>
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

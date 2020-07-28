import React from 'react';

import { Card } from './styles';

import IPokemonCardDTO from './IPokemonCardDTO';

const PokemonCard: React.FC<IPokemonCardDTO> = ({ pokemon }) => {
  return (
    <Card>
      <h2>{pokemon.name}</h2>
      <h2>{pokemon.weight}</h2>
      <h2>{pokemon.moves[0].move.name}</h2>
    </Card>
  );
};

export default PokemonCard;

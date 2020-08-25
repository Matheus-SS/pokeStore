import React, { useMemo } from 'react';

import { FaCartPlus } from 'react-icons/fa';
import { Card, Header, Bio } from './styles';
import { formatValue, CapitalizePokemonName } from '../../utils/formatValue';
import { IPokemonCardDTO } from './IPokemonCardDTO';
import { useCart } from '../../hooks/cartHook';

const amountMoves: number[] = [1, 2, 3, 4];

// same types that function addToCart on hooks receives
interface IProduct {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
}

const PokemonCard: React.FC<IPokemonCardDTO> = ({ pokemon }) => {
  const { addToCart } = useCart();

  const FormattedPrice = useMemo(() => {
    return formatValue(pokemon.weight);
  }, [pokemon.weight]);

  const FormattedName = useMemo(() => {
    return CapitalizePokemonName(pokemon.name);
  }, [pokemon.name]);

  function handleAddToCart(item: IProduct): void {
    addToCart(item);
  }
  return (
    <Card>
      <Header pokemonType={pokemon.types[0].type.name}>
        <button type="button" onClick={() => handleAddToCart(pokemon)}>
          <FaCartPlus size={25} />
        </button>

        <div>
          <img src={pokemon.sprites.front_default} alt="pokemon" />
          <strong>{FormattedPrice}</strong>
        </div>
      </Header>
      <Bio pokemonType={pokemon.types[0].type.name}>
        <strong>{FormattedName}</strong>
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

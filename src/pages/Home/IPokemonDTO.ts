interface AbilityPokemonInterface {
  ability: {
    name: string;
  };
}

interface MovePokemonInterface {
  move: {
    name: string;
  };
}

export default interface PokemonStatusInterface {
  id: number;
  name: string;
  weight: number;
  moves: MovePokemonInterface[];
  sprites: {
    front_default: string;
  };
  ability: AbilityPokemonInterface[];
}

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

export interface PokemonStatusInterface {
  id: number;
  name: string;
  weight: number;
  moves: MovePokemonInterface[];
  sprites: {
    front_default: string;
  };
  ability: AbilityPokemonInterface[];
  types: Array<{
    type: {
      name:
      | 'bug'
      | 'fire'
      | 'grass'
      | 'normal'
      | 'water'
      | 'dark'
      | 'dragon'
      | 'electric'
      | 'fairy'
      | 'fighting'
      | 'flying'
      | 'ghost'
      | 'ground'
      | 'ice'
      | 'poison'
      | 'psychic'
      | 'rock'
      | 'steel';
    };
  }>;
}

export interface IPokemonCardDTO {
  pokemon: PokemonStatusInterface;
}

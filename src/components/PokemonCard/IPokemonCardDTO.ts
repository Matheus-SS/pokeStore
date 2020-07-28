interface MovePokemonInterface {
  move: {
    name: string;
  };
}

interface PokemonStatusInterface {
  name: string;
  weight: number;
  moves: MovePokemonInterface[];
}

export default interface IPokemonCardDTO {
  pokemon: PokemonStatusInterface;
}

import styled, { css } from 'styled-components';

interface IPokemonTypeProps {
  pokemonType:
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
}

const pokemonTypeVariation = {
  bug: css`
    background: #a8b820;
  `,
  fire: css`
    background: #f08030;
  `,
  grass: css`
    background: #78c850;
  `,
  normal: css`
    background: #a8a878;
  `,
  water: css`
    background: #6890f0;
  `,
  dark: css`
    background: #2a252d;
  `,
  dragon: css`
    background: #7038f8;
  `,
  electric: css`
    background: #f8d030;
  `,
  fairy: css`
    background: #f0b6bc;
  `,
  fighting: css`
    background: #c03028;
  `,
  flying: css`
    background: #a890f0;
  `,
  ghost: css`
    background: #705898;
  `,
  ground: css`
    background: #e0c068;
  `,
  ice: css`
    background: #98d8d8;
  `,
  poison: css`
    background: #a040a0;
  `,
  psychic: css`
    background: #f85888;
  `,
  rock: css`
    background: #b8a038;
  `,
  steel: css`
    background: #b8b8d0;
  `,
};
export const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;

  box-shadow: 2px 2px 4px -2px #000;
  transition: transform 0.3s;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.header<IPokemonTypeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${props => pokemonTypeVariation[props.pokemonType] || 'normal'}

  button {
    background: transparent;
    border: 0;
    margin-right: 20px;

    transition: color 0.2s;

    &:hover {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      color: ${props => (props.pokemonType === 'dark' ? '#fff' : '#211f1f')};
    }

    img {
      object-fit: cover;
      filter: drop-shadow(4px 2px 2px #000);
    }
  }
`;

export const Bio = styled.span<IPokemonTypeProps>`
  display: flex;
  flex-direction: column;

  strong {
    margin-top: 10px;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      ${props => pokemonTypeVariation[props.pokemonType] || 'normal'}

      margin-top: 3px;
      padding: 2px 8px 2px;
    }
  }
`;

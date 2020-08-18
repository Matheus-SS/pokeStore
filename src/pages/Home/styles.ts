import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Banner = styled.div`
  background: #000;
  height: 40vh;
  width: 100%;
  padding: 10px;
  box-shadow: 2px 2px 6px -1px #000;

  display: flex;
  justify-content: center;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const PokemonList = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;

  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* overflow: hidden;  when overlay is open */
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;

  background: #000;
  height: 40vh;
  width: 100%;
  padding: 10px;
  box-shadow: 2px 2px 6px -1px #000;

  span {
    align-self: flex-end;
    margin-top: 10px;
    margin-right: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  height: 30vh;
  img {
    object-fit: contain;
    width: 100%;
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

export const Pages = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  ul {
    max-width: 300px;
    display: flex;
    height: 60px;
    list-style: none;
    justify-content: center;

    li a {
      padding: 5px 10px;
      background: #000;
      text-decoration: none;
      border-radius: 4px;
      color: #fff;
    }
    li + li {
      margin-left: 5px;
    }

    li.active a {
      color: #ffef2c;
    }
  }

  li.disabled a {
    background: #928484cc;
  }
`;

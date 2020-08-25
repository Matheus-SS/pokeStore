import styled from 'styled-components';

export const ContainerButton = styled.button`
  height: 30px;
  width: 30px;

  /* background: transparent;
  border: 0; */
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`;

export const AmountItems = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 17px;
  width: 17px;
  border-radius: 50%;

  background: #f8d030;

  p {
    white-space: nowrap;
    overflow: hidden; /* "overflow" value must be different from "visible" */
    text-overflow: ellipsis;
    font-size: 12px;
    font-weight: bolder;
  }
`;

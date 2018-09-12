import styled from "styled-components";

export const AppShell = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    padding: 1rem;
  }
`;

export const BodyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const Cell = styled.div`
  width: 10rem;
  height: 10rem;
  display: block;
  font-size: 0;
  background-color: #e8e8e8;
  opacity: 0.4;
  border: 1px dashed black;
  box-sizing: border-box;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    //background-color: #d7d7d7;
    opacity: 1;
  }
`;

export const P1Cell = styled(Cell)`
  background-color: #00bfbc;
`;

export const P2Cell = styled(Cell)`
  background-color: #ea4335;
`;

export const BoardContainer = styled.div`
  font-size: 0;
  max-width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  border: 2px solid black;
`;

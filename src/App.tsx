import React from "react";
import styled from "styled-components";
import { Header } from "./components/header/Header";
import { Board } from "./components/board/Board";
import { Button } from "./components/button/Button";

const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 0;
  align-items: center;
  flex-direction: column;
`;

const App: React.FC = () => {

  


  return (
    <Container>
      <Header headerText="Minesweeper Emoji" />
      <Board />
      <Button buttonText="New Game" />
    </Container>
  );
};

export default App;

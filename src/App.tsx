import React from "react";
import styled from "styled-components";
import { Header } from "./components/header/Header";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const App: React.FC = () => (
  <Container>
    <Header headerText="Minesweeper Emoji" />
  </Container>
);

export default App;

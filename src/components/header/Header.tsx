import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  font-size: 2.4em;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  font-family: "Fredoka One", cursive;
`;

interface HeaderProps {
  headerText: string;
}

export const Header: React.FC<HeaderProps> = ({ headerText }) => {
  return <StyledHeader>{headerText}</StyledHeader>;
};

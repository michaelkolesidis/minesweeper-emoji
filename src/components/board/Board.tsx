import React from "react";
import styled from "styled-components";
import { Cell } from "../cell/Cell";

const StyledBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin-top: 4px;
    max-width: fit-content;
`;



export const Board: React.FC = () => {
  return <StyledBoard>
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
    <Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell /><Cell />
  </StyledBoard>;
};

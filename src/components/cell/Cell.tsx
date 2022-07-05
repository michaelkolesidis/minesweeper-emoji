import React from "react";
import styled from "styled-components";

let size = `38px`

const StyledCell = styled.div`
    width: ${size};
    height: ${size};
    line-height: ${size};
    font-size: ${size};
    margin: 1px;
    padding: 0;
    text-align: center;
    display: flex;
  justify-content: center;
  align-items: center;
`;

const EMPTY: string = "🔲";

export const Cell: React.FC = () => {
  return <StyledCell>{EMPTY}</StyledCell>;
};

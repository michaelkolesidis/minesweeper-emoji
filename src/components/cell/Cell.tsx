import React, { useState } from "react";
import styled from "styled-components";

let size = `38px`;

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

// const EMPTY = "🔲";
// const MINE = "💣";
// const FLAG = "🚩";
// const DIGITS = ["⬜️", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];

type emoji =
  | "🔲"
  | "💣"
  | "🚩"
  | "⬜️"
  | "1️⃣"
  | "2️⃣"
  | "3️⃣"
  | "4️⃣"
  | "5️⃣"
  | "6️⃣"
  | "7️⃣"
  | "8️⃣"
  | "😃"
  | "😵";

interface CellProps {
  cellContent: emoji;

}

export const Cell: React.FC<CellProps> = ({ cellContent }) => {

  const [revealed, setRevealed] = useState(false);
  const [mine, setMine] = useState(false);
  const [minesAround, setMinesAround] = useState(0);
  


  return <StyledCell>{cellContent}</StyledCell>;
};

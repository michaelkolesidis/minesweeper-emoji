import React from "react";
import styled from "styled-components";
import { Cell } from "../cell/Cell";

let columns = 10;
let rows = 10;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  margin-top: 4px;
`;

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

const EMPTY = "🔲";
const MINE = "💣";
const FLAG = "🚩";
const DIGITS: Array<emoji> = [
  "⬜️",
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
];

DIGITS[0] = "😃";

export const Board: React.FC = () => {
  return (
    <StyledBoard>
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />

      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />

      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />

      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />

      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />

      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />

      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />

      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />

      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />

      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
      <Cell cellContent={EMPTY} />
    </StyledBoard>
  );
};

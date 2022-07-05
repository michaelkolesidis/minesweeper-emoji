import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  font-family: sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 12px;
  padding: 0.6rem 0.8rem;
  border-radius: 40px;
  white-space: nowrap;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(15, 15, 15);
  border: 4px solid rgb(15, 15, 15);

  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(15, 15, 15);
    border: 4px dotted rgb(15, 15, 15);
  }

  &:active {
    transform: scale(0.98);
  }
`;

interface ButtonProps {
  buttonText: string;
  onClick?: void;
}

export const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  return <StyledButton>{buttonText}</StyledButton>;
};

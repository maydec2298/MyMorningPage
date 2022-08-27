import React from "react";
import styled from "styled-components";

const Button = ({children, background, color}) => {
  return (
    <StyledButton color={color} background={background}>{children}</StyledButton>);
};

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
`;
export default Button;

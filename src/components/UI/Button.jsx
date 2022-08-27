import React from "react";
import styled,{css} from "styled-components";

const Button = ({children, ...props}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  margin: 10px;
  border: 1px solid lightgray;

  ${(props) =>
  props.add &&
  css`
    color: gray;
    background-color: white;
    border-color: lightgray;
  `
  }

  ${(props) =>
  props.cancel &&
  css`
    color: black;
    background-color: #999;
    border-color: lightgray;
  `
  }

  ${(props) =>
  props.delete &&
  css`
    color: #9c2121;
    background-color: #fff;
    border-color: lightgray;
  `
  }

  ${(props) =>
  props.edit &&
  css`
    color: gray;
    background-color: #B2F4FE;
    border-color: #302E69;
  `
  }
`;
export default Button;

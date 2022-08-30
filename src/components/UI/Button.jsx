import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  margin: 10px;
  border: 1px solid lightgray;

  //작성하기,추가하기
  ${(props) =>
    props.add &&
    css`
      color: gray;
      background-color: white;
      border-color: lightgray;
    `}

  //취소하기
  ${(props) =>
    props.cancel &&
    css`
      color: black;
      background-color: #999;
      border-color: lightgray;
    `}

//삭제하기
  ${(props) =>
    props.delete &&
    css`
      color: #9c2121;
      background-color: #fff;
      border-color: lightgray;
    `}

//수정하기
  ${(props) =>
    props.edit &&
    css`
      color: gray;
      background-color: #b2f4fe;
      border-color: #302e69;
    `}
`;
export default Button;

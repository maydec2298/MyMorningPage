import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsBook } from "react-icons/bs";

const Logo = () => {
  let navigate = useNavigate();

  return (
    <LogoBox>
      <BsBook
        onClick={() => {
          navigate("/");
        }}
        className="logo"
      />
    </LogoBox>
  );
};

const LogoBox = styled.div`
  width: 40px;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;

  .logo {
    font-size: 30px;
    color: #13335c;
  }
`;

export default Logo;

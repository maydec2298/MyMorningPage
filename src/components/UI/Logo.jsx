import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  let navigate = useNavigate();

  return (
    <LogoBox
      src="http://localhost:3000/Logo.png"
      alt="logo image"
      onClick={() => {
        navigate("/");
      }}
    />
  );
};

const LogoBox = styled.img`
  width: 50px;
  cursor: pointer;
`;
export default Logo;

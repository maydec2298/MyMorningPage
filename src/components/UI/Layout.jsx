import React from "react";
import styled from "styled-components";
import Logo from "./Logo"

const Layout = (props) => {
  return (
    <LayoutBox>
      <Logo />
      {props.children}
    </LayoutBox>
  );
};

const LayoutBox = styled.div`
  max-width: 1200px;
  min-width: 400px;
  overflow: hidden;
  margin: auto;
 
`

export default Layout;

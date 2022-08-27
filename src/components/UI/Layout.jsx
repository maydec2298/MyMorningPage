import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import TitleHeader from "./TitleHeader";

const Layout = (props) => {
  return (
    <LayoutBox>
      <Logo />
      <TitleHeader title={props.title} />
      {props.children}
    </LayoutBox>
  );
};

const LayoutBox = styled.div`
  max-width: 1200px;
  min-width: 400px;
  overflow: hidden;
  margin: auto;
`;

export default Layout;

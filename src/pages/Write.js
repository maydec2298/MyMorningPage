import React from "react";
import Layout from "../components/UI/Layout"
import Container from "../components/UI/Container"
import Button from "../components/UI/Button";
import TitleHeader from "../components/UI/TitleHeader";

const Write = () => {
  return (
    <Layout>
      <TitleHeader>글쓰기</TitleHeader>
       <Button color="white" background="gray">취소하기</Button>
      <Container/>
    </Layout>
  );
};

export default Write;

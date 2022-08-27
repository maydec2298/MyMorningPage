import React from "react";
import Layout from "../components/UI/Layout"
import Container from "../components/UI/Container"
import TitleHeader from "../components/UI/TitleHeader";
import PostForm from "../components/Posts/PostForm"

const Write = () => {


  return (
    <Layout>
      <TitleHeader>글쓰기</TitleHeader>

      <Container>
        <PostForm/>
      </Container>
    </Layout>
  );
};

export default Write;

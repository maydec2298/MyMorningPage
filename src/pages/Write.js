import React from "react";
import Layout from "../components/UI/Layout"
import Container from "../components/UI/Container"
import Button from "../components/UI/Button";
import TitleHeader from "../components/UI/TitleHeader";
import { useNavigate } from "react-router-dom";


const Write = () => {
  const navigate = useNavigate()


  return (
    <Layout>
      <TitleHeader>글쓰기</TitleHeader>

      <Container>
        <Button cancel onClick={()=>{navigate('/')}}>취소하기</Button>
      </Container>
    </Layout>
  );
};

export default Write;

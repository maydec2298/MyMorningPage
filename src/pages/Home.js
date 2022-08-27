import React from "react";
import Layout from "../components/UI/Layout"
import Container from "../components/UI/Container"
import Button from "../components/UI/Button"
import TitleHeader from "../components/UI/TitleHeader";
import PostList from "../components/Posts/PostList"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <TitleHeader>My Morning Page</TitleHeader>
      <Button add onClick={()=>{navigate('/write')}}>추가하기</Button>

      <Container>
        <PostList/>
      </Container>
 
    </Layout>
  );
};


export default Home;

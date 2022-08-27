import React from "react";

import Layout from "../components/UI/Layout"
import Container from "../components/UI/Container"
import Button from "../components/UI/Button"
import TitleHeader from "../components/UI/TitleHeader";


const Home = () => {
  return (
    <Layout>
      <TitleHeader>My Morning Page</TitleHeader>
      <Button>추가하기</Button>
      <Container/>
    </Layout>
  );
};


export default Home;

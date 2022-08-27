import React from "react";

import Layout from "../components/UI/Layout";
import Container from "../components/UI/Container";
import Button from "../components/UI/Button";

const Home = () => {
  return (
    <Layout title="My Morning Page">
      <Container>
        <Button>글쓰기</Button>
      </Container>
    </Layout>
  );
};

export default Home;

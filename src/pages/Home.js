import React from "react";

import Layout from "../components/UI/Layout";
import Container from "../components/UI/Container";
import Button from "../components/UI/Button";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout title="My Morning Page">
      <Container>
        <Button
          add
          onClick={() => {
            navigate("/write");
          }}
        >
          글쓰기
        </Button>
      </Container>
    </Layout>
  );
};

export default Home;

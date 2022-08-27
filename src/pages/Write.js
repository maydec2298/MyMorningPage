import React from "react";
import Layout from "../components/UI/Layout";
import Container from "../components/UI/Container";
import Button from "../components/UI/Button";

const Write = () => {
  return (
    <Layout title="Write My Thinking">
      <Button color="white" background="gray">
        취소하기
      </Button>
      <Container />
    </Layout>
  );
};

export default Write;

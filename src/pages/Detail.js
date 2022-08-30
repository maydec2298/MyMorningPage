import React from 'react';
import Layout from '../components/UI/Layout';
import CommentList from '../components/Comments/CommentList';
import Container from '../components/UI/Container';
const Detail = () => {
  return (
    <Layout title='See Details'>
      <Container>
        <CommentList></CommentList>
      </Container>
    </Layout>
  );
};

export default Detail;

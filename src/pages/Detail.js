import React from 'react';
import Layout from '../components/UI/Layout';
import Container from '../components/UI/Container';
import PostDetail from '../components/Posts/PostDetail';
import CommentList from '../components/Comments/CommentList';
const Detail = () => {
  return (
    <Layout title='See Details'>
      <Container>
        <PostDetail></PostDetail>
        <CommentList></CommentList>
      </Container>
    </Layout>
  );
};

export default Detail;

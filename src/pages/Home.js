import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../redux/modules/postsSlice";
// import Components
import Layout from "../components/UI/Layout";
import Container from "../components/UI/Container";
import Button from "../components/UI/Button";
import PostList from "../components/Posts/PostList";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

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
        <div>
          {/* {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))} */}
        </div>
        <PostList />
      </Container>
    </Layout>
  );
};

export default Home;

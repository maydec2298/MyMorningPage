import React from "react";
import Container from "../components/UI/Container";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../redux/modules/postsSlice";

const Home = () => {
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  const onAddHandler = () => {
    dispatch(
      addPost({
        postId: 4,
        userId: "추가확인",
        title: "추가되는지...",
        content: "확인중",
        editToggle: false,
      })
    );
  };

  const onDeleteHandler = () => {
    dispatch(deletePost(2));
  };

  console.log(posts);

  return (
    <Container>
      <h1>폰트적용 잘됐나?</h1>
      <button onClick={onAddHandler}>추가?</button>
      <button onClick={onDeleteHandler}>2번글을 없애볼게</button>
    </Container>
  );
};

export default Home;

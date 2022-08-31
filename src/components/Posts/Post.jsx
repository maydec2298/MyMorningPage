import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Post = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div>
      <ContainerDiv
        onClick={() => {
          navigate(`/detail/${post.id}`);
        }}
      >
        <SpanTitle>{post.title}</SpanTitle>
        <SpanName>{post.userId}</SpanName>
      </ContainerDiv>
    </div>
  );
};

const ContainerDiv = styled.div`
  display: flex;
  margin: 20px 0;
  padding: 20px 0;
  justify-content: center;
  border: 1px solid lightblue;
  cursor: pointer;
`;
const SpanTitle = styled.div`
  width: 900px;
  // border: 1px solid red;
  margin: 0 5px;
  padding: 0 10px;
`;
const SpanName = styled.div`
  width: 300px;
  // border: 1px solid #000;
  padding: 0 10px;
  text-align: right;
`;
export default Post;

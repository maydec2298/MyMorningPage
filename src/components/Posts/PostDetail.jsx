import styled from "styled-components";
import Button from "../UI/Button";

const PostDetail = ({ editMode, setEditMode, post }) => {
  return (
    <div>
      <TitleDiv>{post.title}</TitleDiv>
      {!editMode ? (
        <ContentDiv>{post.content}</ContentDiv>
      ) : (
        <>/*여기에 수정을 눌렀을 때 보여질 input 태그 만들어주세요*/</>
      )}
      <ButtonDiv>
        <Button edit onClick={() => setEditMode(!editMode)}>
          {editMode ? "취소" : "수정"}
        </Button>
        <Button delete>삭제</Button>
      </ButtonDiv>
    </div>
  );
};

const TitleDiv = styled.h2`
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid lightblue;
`;

const ContentDiv = styled.div`
  width: 100%;
  margin: auto;
  padding: 30px 20px;
  text-align: left;
  border: 1px solid lightblue;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;
`;
export default PostDetail;

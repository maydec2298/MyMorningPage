import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const Comment = ({ comment }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <CommentStyle>
      <NameDiv>
        <MarginSpan>{comment.userId}</MarginSpan>
      </NameDiv>
      <CommentDiv>
        {!editMode ? (
          <MarginSpan>{comment.content}</MarginSpan>
        ) : (
          <>/*이 안에 comment 수정을 눌렀을때 뜰 input 태그 만들어 주세요. */</>
        )}
      </CommentDiv>
      <Button edit onClick={() => setEditMode(!editMode)}>
        {editMode ? "취소" : "수정"}
      </Button>
      <Button delete>삭제</Button>
    </CommentStyle>
  );
};

const Span = styled.div`
  display: inline-block;
  font-weight: bold;
`;

const NameDiv = styled.div`
  width: 150px;
  flex-grow: 1;
`;

const CommentDiv = styled.div`
  width: 500px;
  flex-grow: 7;
`;
const MarginSpan = styled.span`
  margin-left: 10px;
`;
const CommentStyle = styled.div`
  height: 50px;
  border: 1px solid lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
`;
export default Comment;

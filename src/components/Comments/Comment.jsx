import { useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const Comment = ({ comment }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <CommentStyle>
      <NameDiv>
        <MarginSpan>{comment.userId}</MarginSpan>
      </NameDiv>
      <CommentDiv>{!editMode ? <MarginSpan>{comment.content}</MarginSpan> : <Textarea>{comment.content}</Textarea>}</CommentDiv>
      <ButtonBox>
        <Button edit onClick={() => setEditMode(!editMode)}>
          {editMode ? '취소' : '수정'}
        </Button>
        <Button delete>{editMode ? '완료' : '삭제'}</Button>
      </ButtonBox>
    </CommentStyle>
  );
};

const CommentStyle = styled.div`
  width: 60%;
  border-bottom: 1px solid lightblue;
  display: flex;
  align-items: center;
  margin: 10px auto;
  overflow: hidden;
`;
const NameDiv = styled.div`
  /* flex-grow: 2; */
  /* border: 1px dashed red; */
  margin-right: 30px;
  width: 15%;
  text-align: right;
`;

const CommentDiv = styled.div`
  text-align: left;
  width: 60%;
`;

const ButtonBox = styled.div`
  /* text-align: right; */
  width: 25%;
  /* border: 1px solid red; */
`;
const MarginSpan = styled.span`
  margin-left: 10px;
`;

const Textarea = styled.textarea`
  width: 90%;
  resize: none;
`;
export default Comment;

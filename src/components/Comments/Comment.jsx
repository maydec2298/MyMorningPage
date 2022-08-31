import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  __deleteComment,
  __getComments,
} from "../../redux/modules/commentsSlice";
import Button from "../UI/Button";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  // const comment = useSelector((state) => state.comment.comment);

  const onDeleteHandler = (event) => {
    event.stopPropagation();
    const answer = window.confirm("이 댓글을 지울까요?");
    if (answer) {
      dispatch(__deleteComment(comment.id));
    } else {
      return;
    }
  };

  return (
    <CommentStyle>
      <NameDiv>
        <MarginSpan>{comment.userId}</MarginSpan>
      </NameDiv>
      <CommentDiv>
        {!editMode ? (
          <>
            <MarginSpan>{comment.content}</MarginSpan>
            <Button edit onClick={() => setEditMode(!editMode)}>
              수정
            </Button>
            <Button delete onClick={onDeleteHandler}>
              삭제
            </Button>
          </>
        ) : (
          <>
            <Textarea>{comment.content}</Textarea>
            <Button edit onClick={() => setEditMode(!editMode)}>
              취소
            </Button>
            <Button delete>완료</Button>
          </>
        )}
      </CommentDiv>
    </CommentStyle>
  );
};

// const Span = styled.div`
//   display: inline-block;
//   font-weight: bold;
// `;

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

const Textarea = styled.textarea`
  width: 90%;
  height: 20px;
  resize: none;
`;
export default Comment;

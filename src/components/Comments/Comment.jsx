import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  clearComment,
  globalEditModeToggle,
  __getComment,
} from "../../redux/modules/commentSlice";
import {
  __deleteComment,
  __updateComment,
} from "../../redux/modules/commentsSlice";
import Button from "../UI/Button";

const Comment = ({ comment }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [updateContent, setUpdateContent] = useState("");

  const { content } = useSelector((state) => state.comment.comment);
  const { globalEditMode } = useSelector((state) => state.comment);

  useEffect(() => {
    setUpdateContent(content);
  }, [content]);

  const onDeleteHandler = () => {
    const answer = window.confirm("이 댓글을 지울까요?");
    if (answer) {
      dispatch(__deleteComment(comment.id));
    } else {
      return;
    }
  };

  const onSaveHandler = () => {
    dispatch(
      __updateComment({
        id: +comment.id,
        content: updateContent,
        userId: comment.userId,
        postId: id,
      })
    );
    setEditMode(false);
    dispatch(globalEditModeToggle(false));
  };

  const onEditHandler = () => {
    setEditMode(true);
    dispatch(__getComment(comment.id));
    dispatch(globalEditModeToggle(true));
  };

  const onCancelHandler = () => {
    setEditMode(false);
    dispatch(clearComment());
    dispatch(globalEditModeToggle(false));
  };

  return (
    <CommentStyle>
      <NameDiv>
        <MarginSpan>{comment.userId}</MarginSpan>
      </NameDiv>
      <CommentDiv>
        {editMode ? (
          <>
            <Textarea
              type="text"
              value={updateContent}
              onChange={(event) => setUpdateContent(event.target.value)}
            />
            <Button edit onClick={onCancelHandler}>
              취소
            </Button>
            <Button delete onClick={onSaveHandler}>
              완료
            </Button>
          </>
        ) : (
          <>
            <MarginSpan>{comment.content}</MarginSpan>
            <Button edit disabled={globalEditMode} onClick={onEditHandler}>
              수정
            </Button>
            <Button delete disabled={globalEditMode} onClick={onDeleteHandler}>
              삭제
            </Button>
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

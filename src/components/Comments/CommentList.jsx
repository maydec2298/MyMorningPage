// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// Components
import CommentForm from './CommentForm';
import Comment from './Comment';
// Store
import { __getComments } from '../../redux/modules/commentsSlice';
import styled from 'styled-components';

const CommentList = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments, error } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(__getComments(postId));
  }, [dispatch]);

  if (error) return <div>알 수 없는 에러가 발생했습니다.</div>;

  return (
    <div>
      <CommentForm postId={postId}></CommentForm>
      {comments.length === 0 ? (
        <H2>
          아직 댓글이 없어요 😭
          <br />첫 댓글을 달아볼까요?
        </H2>
      ) : (
        comments.map((comment) => <Comment key={comment.id} comment={comment} />)
      )}
    </div>
  );
};

const H2 = styled.h2`
  text-align: center;
`;
export default CommentList;

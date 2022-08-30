import react, { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
const CommentList = () => {
  return (
    <div>
      <h1>댓글</h1>
      {/* <h1>댓글</h1> */}
      <CommentForm></CommentForm>
      <Comment></Comment>
      <Comment></Comment>
      <Comment></Comment>
    </div>
  );
};

export default CommentList;

//CommentForm과 map메소드Comment

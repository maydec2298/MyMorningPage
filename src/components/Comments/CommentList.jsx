import react, { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
const CommentList = () => {
  return (
    <div>
      <CommentForm></CommentForm>
      <Comment></Comment>
    </div>
  );
};

export default CommentList;

//CommentForm과 map메소드Comment

import react, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
const CommentList = ({ list }) => {
  return (
    <div>
      <h1>댓글</h1>
      <CommentForm></CommentForm>
      <div>
        {list.map((list, idx) => {
          return (
            <div key={idx}>
              <Comment list={list}></Comment>
              <button>수정</button>
              <button>삭제</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentList;

//CommentForm과 map메소드Comment

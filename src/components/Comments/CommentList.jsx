import react, { useState } from 'react';
import Comment from './Comment';
const CommentList = ({ list }) => {
  const deleteComment = () => {
    list.filter((com) => {
      return com.id == Comment.id;
    });
  };
  return (
    <div>
      <h1>댓글</h1>
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

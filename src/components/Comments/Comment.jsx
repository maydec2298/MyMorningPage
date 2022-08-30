import React from 'react';
import styled from 'styled-components';
// import CommentList from './CommentList';

const Comment = ({ list }) => {
  return (
    <div>
      <CommentStyle>
        <Divname>
          <Span>닉네임</Span> {list.name}
        </Divname>
        <DivComment>
          <Span>댓글</Span>
          {list.content}
        </DivComment>
      </CommentStyle>
    </div>
  );
};
const Span = styled.div`
  border: 1px solid blue;
  display: inline-block;
  font-weight: bold;
`;
const Divname = styled.div`
  width: 200px;
  flex-grow: 1;
`;
const DivComment = styled.div`
  width: 500px;
`;
const CommentStyle = styled.div`
  width: 500px;
  height: 50px;
  border: 1px solid lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export default Comment;

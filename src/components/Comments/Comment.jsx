import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const Comment = () => {
  return (
    <CommentStyle>
      <NameDiv>
        <Span>닉네임</Span>
        <MarginSpan>닉네임 들어갈부분</MarginSpan>
      </NameDiv>
      <CommentDiv>
        <Span>댓글</Span>
        <MarginSpan>댓글 들어갈 부분</MarginSpan>
      </CommentDiv>
      <Button edit>수정</Button>
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

import React from 'react';
import styled from 'styled-components';

const Post = () => {
  return (
    <div>
      <ContainerDiv>
        <SpanTitle>내용 넣는 부분입니다.</SpanTitle>
        <SpanName>작성자 닉네임 넣는 부분입니다.</SpanName>
      </ContainerDiv>
    </div>
  );
};

const ContainerDiv = styled.div`
  display: flex;
  margin: 20px 0;
  padding: 20px 0;
  justify-contents: center;
  border: 1px solid lightblue;
  cursor: pointer;
`;
const SpanTitle = styled.div`
  width: 900px;
  // border: 1px solid red;
  margin: 0 5px;
  padding: 0 10px;
`;
const SpanName = styled.div`
  width: 300px;
  // border: 1px solid #000;
  padding: 0 10px;
  text-align: right;
`;
export default Post;

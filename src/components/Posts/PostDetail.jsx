import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const PostDetail = () => {
  return (
    <div>
      <div>
        <TitleDiv>타이틀 테스트</TitleDiv>
        <ContentDiv>글 내용 들어갈 공간입니다.</ContentDiv>
      </div>
      <ButtonDiv>
        <Button edit>수정</Button>
        <Button delete>삭제</Button>
      </ButtonDiv>
    </div>
  );
};

const TitleDiv = styled.h2`
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid lightblue;
`;

const ContentDiv = styled.div`
  width: 100%;
  margin: auto;
  padding: 30px 20px;
  text-align: left;
  border: 1px solid lightblue;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;
`;
export default PostDetail;

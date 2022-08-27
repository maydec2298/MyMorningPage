import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const PostForm = () => {
  const navigate = useNavigate()

  return (
    <PostFormBox>
      <Button cancel onClick={() => { navigate('/') }}>취소하기</Button>
    </PostFormBox>
  )
};

const PostFormBox = styled.div`
  
`

export default PostForm;

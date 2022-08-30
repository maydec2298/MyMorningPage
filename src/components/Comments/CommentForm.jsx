import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';
import Button from '../UI/Button';
const CommentForm = () => {
  const [inputName, onChangeNameIdHandler] = useInput();
  const [inputContent, onChangeContentHandler] = useInput();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputName === '' || inputContent === '') return alert('빠짐 없이 입력해 주세요!');
  };

  return (
    <ContainerDiv>
      <form onSubmit={onSubmitHandler}>
        <FlexDiv>
          <InputDiv>
            <LabelDiv>닉네임</LabelDiv>
            <Input type='text' id='name' onChange={onChangeNameIdHandler} value={inputName} />
          </InputDiv>
          <InputDiv>
            <LabelDiv>댓글</LabelDiv>
            <TextArea name='' id='content' cols='40' rows='5' onChange={onChangeContentHandler} value={inputContent}></TextArea>
          </InputDiv>
          <ButtonDiv>
            <Button type='button' cancel>
              취소하기
            </Button>
            <Button type='submit' add>
              작성하기
            </Button>
          </ButtonDiv>
        </FlexDiv>
      </form>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  max-width: 800px;
  border: 1px solid lightblue;
  margin: 20px auto;
  padding: 10px;
  position: relative;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Input = styled.input`
  border-radius: 3px;
`;
const TextArea = styled.textarea`
  border-radius: 5px;
`;
const InputDiv = styled.div`
  // display: flex;
  align-items: center;
`;
const LabelDiv = styled.div`
  text-align: center;
  margin: 0 5px;
`;
const ButtonDiv = styled.div``;
export default CommentForm;

import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from "react-router-dom";
import useInput from '../../hooks/useInput';
import styled from 'styled-components';
import Button from '../UI/Button';
import { clearComment,__addComment } from "../../redux/modules/commentsSlice"

const CommentForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const isSuccess = useSelector((state) => state.comments.isSuccess);

  const [userId, onChangeNameIdHandler] = useInput();
  const [content, onChangeContentHandler] = useInput();


  useEffect(() => {
    if (!isSuccess) return;
    // if (isSuccess) navigate("/");

    return () => dispatch(clearComment());
  }, [dispatch, isSuccess]);

  const onSubmitHandler = () => {
    // e.preventDefault();

    dispatch(
      __addComment({
        userId,
        content,
        editToggle: false,
      })
    );

  };

  return (
    <ContainerDiv>
      <form onSubmit={onSubmitHandler}>
        <FlexDiv>
          <InputDiv>
            <LabelDiv>닉네임</LabelDiv>
            <Input type='text' onChange={onChangeNameIdHandler} value={userId} maxlength={'5'} required />
          </InputDiv>
          <InputDiv>
            <LabelDiv>댓글</LabelDiv>
            <TextArea name='content' cols='40' rows='5' onChange={onChangeContentHandler} value={content} required  maxlength={'100'}></TextArea>
          </InputDiv>
          <ButtonDiv>
            <Button type='submit' add >
              작성
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
  outline: none;
`;
const TextArea = styled.textarea`
  outline: none;
  border-radius: 5px;
  resize: none;
`;
const InputDiv = styled.div`
  // display: flex;
  align-items: center;
`;
const LabelDiv = styled.div`
  // text-align: center;
  margin: 0 5px;
  font-weight: bold;
`;
const ButtonDiv = styled.div``;
export default CommentForm;

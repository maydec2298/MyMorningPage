import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';
import Button from '../UI/Button';
import { __addComment } from '../../redux/modules/commentsSlice';

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [userId, onChangeNameIdHandler] = useInput();
  const [content, onChangeContentHandler] = useInput();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      __addComment({
        postId: +postId,
        userId,
        content,
      })
    );
  };

  return (
    <ContainerDiv>
      <form onSubmit={onSubmitHandler}>
        <GridDiv>
          <InputDiv>
            <LabelDiv>닉네임</LabelDiv>
            <Input type='text' onChange={onChangeNameIdHandler} value={userId} maxLength={'5'} required />
          </InputDiv>
          <InputDiv>
            <LabelDiv>댓글</LabelDiv>
            <TextArea name='content' onChange={onChangeContentHandler} value={content} required maxLength={'100'}></TextArea>
            <ButtonDiv>
              <Button type='submit' add>
                작성
              </Button>
            </ButtonDiv>
          </InputDiv>
        </GridDiv>
      </form>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
`;
const GridDiv = styled.div`
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  outline: none;
  padding: 5px;
  border: 1px solid #999;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  outline: none;
  border-radius: 10px;
  width: 400px;
  height: 50px;
  resize: none;
  padding: 2px 10px;
  border: 1px solid #999;
`;
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const LabelDiv = styled.div`
  text-align: left;
  margin: 0 5px;
  font-weight: bold;
  width: 50px;
`;
const ButtonDiv = styled.div`
  text-align: right;
  margin-left: 35px;
`;
export default CommentForm;

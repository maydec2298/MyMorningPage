import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';
import Button from '../UI/Button';
import { addComment } from '../../redux/modules/commentsSlice';
const CommentForm = () => {
  const dispatch = useDispatch();

  const [userId, onChangeNameIdHandler] = useInput();
  const [content, onChangeContentHandler] = useInput();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userId === '' || content === '') return alert('닉네임과 댓글을 입력해 주세요!');

    dispatch(
      addComment({
        postId: nanoid(),
        userId,
        content,
        editToggle: false,
      })
    );
  };

  return (
    <ContainerDiv>
      <form onSubmit={onSubmitHandler}>
        <GridDiv>
          <InputDiv>
            <LabelDiv>닉네임</LabelDiv>
            <Input type='text' id='name' onChange={onChangeNameIdHandler} value={userId} minlength='3' maxlength={'15'} required />
          </InputDiv>
          <InputDiv>
            <LabelDiv>댓글</LabelDiv>
            <TextArea name='' id='content' onChange={onChangeContentHandler} value={content} required></TextArea>
          </InputDiv>
          <ButtonDiv>
            <Button type='button' cancel>
              취소
            </Button>
            <Button type='submit' add>
              작성
            </Button>
          </ButtonDiv>
        </GridDiv>
      </form>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  max-width: 500px;
  border: 1px solid lightblue;
  margin: 20px auto;
  padding: 20px 20px 10px 20px;
`;
const GridDiv = styled.div`
  display: grid;
  // grid-template-rows: 5px 100px;
  row-gap: 10px;
  justify-content: left;
`;
const Input = styled.input`
  outline: none;
  padding: 2px 5px;
`;
const TextArea = styled.textarea`
  outline: none;
  border-radius: 5px;
  width: 400px;
  height: 80px;
  resize: none;
  padding: 2px 5px;
`;
const InputDiv = styled.div`
  display: flex;
  align-items: center;
`;
const LabelDiv = styled.div`
  text-align: right;
  margin: 0 5px;
  font-weight: bold;
  width: 50px;
`;
const ButtonDiv = styled.div`
  text-align: right;
`;
export default CommentForm;

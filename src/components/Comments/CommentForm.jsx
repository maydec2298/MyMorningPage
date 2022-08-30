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
        <FlexDiv>
          <InputDiv>
            <LabelDiv>닉네임</LabelDiv>
            <Input type='text' id='name' onChange={onChangeNameIdHandler} value={userId} minlength='3' maxlength='15' required />
          </InputDiv>
          <InputDiv>
            <LabelDiv>댓글</LabelDiv>
            <TextArea name='' id='content' cols='40' rows='5' onChange={onChangeContentHandler} value={content} required pattern='[a-zA-Z0-9]+'></TextArea>
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

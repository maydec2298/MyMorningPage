import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
import Button from "../UI/Button";
import { __addComment } from "../../redux/modules/commentsSlice";

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
            <Input
              type="text"
              onChange={onChangeNameIdHandler}
              value={userId}
              maxlength={"5"}
              required
            />
          </InputDiv>
          <InputDiv>
            <LabelDiv>댓글</LabelDiv>
            <TextArea
              name="content"
              cols="40"
              rows="5"
              onChange={onChangeContentHandler}
              value={content}
              required
              maxlength={"100"}
            ></TextArea>
          </InputDiv>
          <ButtonDiv>
            <Button type="submit" add>
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

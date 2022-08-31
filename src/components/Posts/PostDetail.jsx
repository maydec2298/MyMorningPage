import styled from 'styled-components';
import Button from '../UI/Button';

const PostDetail = ({ editMode, setEditMode, post }) => {
  return (
    <div>
      <TitleDiv>{post.title}</TitleDiv>
      {!editMode ? (
        <ContentDiv>{post.content}</ContentDiv>
      ) : (
        <ContentDiv>
          <TextArea type='text'>{post.content}</TextArea>
        </ContentDiv>
      )}
      <ButtonDiv>
        <Button edit onClick={() => setEditMode(!editMode)}>
          {editMode ? '취소' : '수정'}
        </Button>
        <Button delete>{editMode ? '완료' : '삭제'}</Button>
      </ButtonDiv>
    </div>
  );
};

const TitleDiv = styled.h2`
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid lightblue;
`;

const ContentDiv = styled.div`
  margin: auto;
  padding: 30px 20px;
  text-align: left;
  border: 1px solid lightblue;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;
`;

const TextArea = styled.textarea`
  width: 99%;
  height: 200px;
  margin: auto;
  resize: none;
`;
export default PostDetail;

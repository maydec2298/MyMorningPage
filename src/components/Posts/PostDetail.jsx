import styled from 'styled-components';
import Button from '../UI/Button';

const PostDetail = ({ editMode, setEditMode, post }) => {
  return (
    <PostDetailBox>
      <TitleDiv>{post.title}</TitleDiv>
      <IdBox>작성자: {post.userId}</IdBox>
      {!editMode ? (
        <ContentDiv>
          <ContentBox>{post.content}</ContentBox>
        </ContentDiv>
      ) : (
        <TextArea type='text'>{post.content}</TextArea>
      )}
      <ButtonDiv>
        <Button edit onClick={() => setEditMode(!editMode)}>
          {editMode ? '취소' : '수정'}
        </Button>
        <Button delete>{editMode ? '완료' : '삭제'}</Button>
      </ButtonDiv>
    </PostDetailBox>
  );
};
const PostDetailBox = styled.div`
  width: 60%;
  margin: auto;
`;

const TitleDiv = styled.h2`
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid lightblue;
`;

const ContentDiv = styled.div`
  margin: auto;
  padding: 30px 20px;
  text-align: left;
  border-bottom: 1px solid lightblue;
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;
`;

const TextArea = styled.textarea`
  width: 96%;
  height: 200px;
  margin: 10px auto;
  resize: none;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 10px;
`;
const ContentBox = styled.div`
  max-width: 800px;
`;
const IdBox = styled.div`
  font-weight: bold;
  text-align: right;
`;
export default PostDetail;

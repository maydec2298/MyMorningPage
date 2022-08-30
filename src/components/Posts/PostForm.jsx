import React from 'react';
import Button from '../UI/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/modules/postsSlice';

const PostForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userId, onChangeUserIdHandler] = useInput();
  const [title, onChangeTitleHandler] = useInput();
  const [content, onChangeContentHandler] = useInput();

  // 홈 페이지로 이동
  const gotoHome = () => {
    navigate('/');
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userId === '' || title === '' || content === '') return alert('모든 항목을 입력해주세요');

    dispatch(
      addPost({
        postId: nanoid(),
        userId,
        title,
        content,
        editToggle: false,
      })
    );

    gotoHome();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <PostFormBox>
        <NameBox>
          <AllTitleFont>Name</AllTitleFont>
          <AllInputBox>
            <NameInput type='text' value={userId} onChange={onChangeUserIdHandler} placeholder='닉네임을 입력해주세요.( 5자 이내 )' />
          </AllInputBox>
        </NameBox>
        <TitleBox>
          <AllTitleFont>Title</AllTitleFont>
          <AllInputBox>
            <TitleInput type='text' value={title} onChange={onChangeTitleHandler} placeholder='제목을 입력해주세요.( 50자 이내 )' />
          </AllInputBox>
        </TitleBox>

        <ContentBox>
          <AllTitleFont>Content</AllTitleFont>
          <AllInputBox>
            <ContentInput type='text' value={content} onChange={onChangeContentHandler} placeholder='내용을 입력해주세요.( 200자 이내 )' />
          </AllInputBox>
        </ContentBox>

        <FormButtonbox>
          <Button cancel onClick={gotoHome}>
            취소
          </Button>
          <Button add>작성</Button>
        </FormButtonbox>
      </PostFormBox>
    </form>
  );
};

const PostFormBox = styled.div`
  margin: auto;
  width: 60%;
  min-width: 400px;
  overflow: hidden;
  padding: 20px;
`;

const AllTitleFont = styled.h3`
  font-family: 'IM_Hyemin-Bold';
  width: 150px;
  height: 30px;
  line-height: 30px;
`;
const AllInputBox = styled.div`
  width: 100%;
  margin-right: 15px;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;
const TitleBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const ContentBox = styled.div`
  display: flex;
`;

const NameInput = styled.input`
  border: 1px solid #999;
  border-radius: 10px;
  width: 40%;
  min-width: 250px;
  height: 20px;
  margin-top: 17px;
  float: left;
  padding: 10px 0 10px 15px;
  font-size: 15px;
  font-family: 'IM_Hyemin-Regular';
`;

const TitleInput = styled.input`
  border: 1px solid #999;
  border-radius: 10px;
  width: 100%;
  height: 20px;
  margin-top: 17px;
  padding: 10px 0 10px 15px;
  font-size: 15px;
  font-family: 'IM_Hyemin-Regular';
`;
const ContentInput = styled.textarea`
  border: 1px solid #999;
  border-radius: 10px;
  width: 100%;
  height: 200px;
  margin: 17px 0;
  padding: 10px 15px;
  line-height: 1.8;
  font-size: 15px;
  font-family: 'IM_Hyemin-Regular';
`;

const FormButtonbox = styled.div`
  float: right;
  margin: 10px 0;
`;
export default PostForm;

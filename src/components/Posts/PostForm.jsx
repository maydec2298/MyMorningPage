import React, {useCallback} from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/modules/postsSlice"


const PostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nanoidId = nanoid();

  // CustumHook:useInput
  const [userId, onChangeUserIdHandler] = useInput()
  const [title, onChangeTitleHandler] = useInput()
  const [content, onChangeContentHandler] = useInput()

// onSubmit
  const onSubmitHandler = (e) => {
    e.preventDefault()
    
    dispatch(
      addPost({
        postId: nanoidId,
        userId,
        title,
        content,
        editToggle: false,
      })
    );
   
    //작성한 post의 상세 페이지로 이동
    navigate(`/detail/${nanoidId}`) 
  };

  return (

    <form onSubmit={onSubmitHandler}>
      <PostFormBox>

{/* 이름 */}
        <NameBox>
          <AllTitleFont>Name</AllTitleFont>
          <AllInputBox>
            <NameInput
              type="text"
              value={userId}
              name="userId"
              onChange={onChangeUserIdHandler}
              placeholder="닉네임을 입력해주세요.( 5자 이내 )"  
              required
              maxLength={'5'}
            />
          </AllInputBox>
        </NameBox>

{/* 제목 */}
        <TitleBox>
          <AllTitleFont>Title</AllTitleFont>
          <AllInputBox>
            <TitleInput
              type="text"
              value={title}
              onChange={onChangeTitleHandler}
              placeholder="제목을 입력해주세요.( 50자 이내 )"  
              required
              maxLength={'50'}
            />
          </AllInputBox>
        </TitleBox>

{/* 내용 */}
        <ContentBox>
          <AllTitleFont>Content</AllTitleFont>
          <AllInputBox>
            <ContentInput
              type="text"
              value={content}
              onChange={onChangeContentHandler}
              placeholder="내용을 입력해주세요.( 200자 이내 )"  
              required
              maxLength={'200'}
            />
          </AllInputBox>
        </ContentBox>

{/* 버튼 */}
        <FormButtonbox>
          <Button cancel onClick={useCallback(() => {navigate('/')}, [navigate])}>취소</Button>
          <Button add >작성</Button>
        </FormButtonbox>
        
      </PostFormBox>
    </form>
    
  )
};

const PostFormBox = styled.div`
  margin:auto;
  width:60%;
  min-width:400px;
  overflow:hidden;
  padding:20px;
`


const AllTitleFont = styled.h3`
  font-family: "IM_Hyemin-Bold";
  width:150px;
  height:30px;
  line-height:30px;
`
const AllInputBox = styled.div`
  width:100%;
  margin-right:15px;
`


const NameBox = styled.div`
  display:flex;
  flex-direction: row;
  margin:10px 0;
`
const TitleBox = styled.div`
  display:flex;
  margin-bottom:10px;
`
const ContentBox = styled.div`
  display:flex;
`


const NameInput = styled.input`
  border:1px solid #999;
  border-radius: 10px;
  width:40%;
  min-width:250px;
  height:20px;
  margin-top:17px;
  float:left;
  padding:10px 0 10px 15px;
  font-size:15px;
  font-family: "IM_Hyemin-Regular";
`

const TitleInput = styled.input`
  border:1px solid #999;
  border-radius: 10px;
  width:90%;
  height:20px;
  margin-top:17px;
  padding:10px 15px;
  font-size:15px;
  font-family: "IM_Hyemin-Regular";
`
const ContentInput = styled.textarea`
  border:1px solid #999;
  border-radius: 10px;
  width:90%;
  height:200px;
  margin:17px 0;
  padding:10px 15px;
  line-height:1.8;
  font-size:15px;
  font-family: "IM_Hyemin-Regular";
`


const FormButtonbox = styled.div`
  float:right;
  margin : 0px 23px;
`
export default PostForm;

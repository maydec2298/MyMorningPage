import React, {useState} from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const PostForm = () => {
  const navigate = useNavigate()

  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (userId === "" || title === "" || content === "") return alert("빠짐없이 입력해주세요!")
    
}
  
  return (

    <form onSubmit={onSubmitHandler}>
      <PostFormBox>
        <NameBox>
          <AllTitleFont>Name</AllTitleFont>
          <AllInputBox>
          <NameInput
          type="text"
          value={userId}
          onChange={(e)=> {
            setUserId(e.target.value);
          }}
            />
            </AllInputBox>
        </NameBox>

        <TitleBox>
          <AllTitleFont>Title</AllTitleFont>
                    <AllInputBox>
        <TitleInput
          type="text"
          value={title}
          onChange={(e)=> {
          setTitle(e.target.value);
          }}
            />
            </AllInputBox>
        </TitleBox>
        
          <ContentBox>
          <AllTitleFont>Content</AllTitleFont>
          <AllInputBox>
        <ContentInput
          type="text"
          value={content}
          onChange={(e)=> {
          setContent(e.target.value);
          }}
            />
            </AllInputBox>
        </ContentBox>


      <FormButtonbox>
        <Button cancel onClick={() => { navigate('/') }}>취소하기</Button>
        <Button add onClick={() => { navigate('/') }}>작성하기</Button>
      </FormButtonbox>
        
      </PostFormBox>
     </form>
    
  )
};

const PostFormBox = styled.div`
  margin:auto;
  width:60%;
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
  margin-right:10px;
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
  min-width:150px;
  height:30px;
  margin-top:17px;
  float:left;
`
const TitleInput = styled.input`
  border:1px solid #999;
  border-radius: 10px;
  width:100%;
  height:30px;
  margin-top:17px;
`
const ContentInput = styled.input`
  border:1px solid #999;
  border-radius: 10px;
  width:100%;
  height:200px;
  margin:17px 0;
`


const FormButtonbox = styled.div`
  float:right;
`
export default PostForm;

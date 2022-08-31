import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import { __deletePost } from "../../redux/modules/postsSlice";
import {
  clearPost,
  __getPostById,
  __updatePost,
} from "../../redux/modules/postSlice";
import { useEffect, useState } from "react";

const PostDetail = ({ editMode, setEditMode, postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateContent, setUpdateContent] = useState("");
  const post = useSelector((state) => state.post.post);

  useEffect(() => {
    dispatch(__getPostById(postId));
    return () => dispatch(clearPost());
  }, [dispatch, postId]);

  useEffect(() => {
    setUpdateContent(post.content);
  }, [post]);

  const onDeleteHandler = (event) => {
    event.stopPropagation();
    const answer = window.confirm("이 게시글을 지울까요?");
    if (answer) {
      dispatch(__deletePost(post.id));
      return navigate("/");
    } else {
      return;
    }
  };

  const onSaveHandler = () => {
    dispatch(
      __updatePost({
        ...post,
        content: updateContent,
      })
    );
    setEditMode(false);
  };

  return (
    <div>
      <TitleDiv>{post.title}</TitleDiv>
      {!editMode ? (
        <ContentDiv>{post.content}</ContentDiv>
      ) : (
        <ContentDiv>
          <TextArea
            type="text"
            value={updateContent}
            onChange={(event) => {
              setUpdateContent(event.target.value);
            }}
          />
        </ContentDiv>
      )}
      <ButtonDiv>
        {!editMode ? (
          <>
            <Button edit onClick={() => setEditMode(!editMode)}>
              수정
            </Button>
            <Button delete onClick={onDeleteHandler}>
              삭제
            </Button>
          </>
        ) : (
          <>
            <Button edit onClick={() => setEditMode(!editMode)}>
              취소
            </Button>
            <Button delete onClick={onSaveHandler}>
              완료
            </Button>
          </>
        )}
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

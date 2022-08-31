// Hooks
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Components
import Layout from "../components/UI/Layout";
import Container from "../components/UI/Container";
import PostDetail from "../components/Posts/PostDetail";
import CommentList from "../components/Comments/CommentList";
// Store
import { __getPostById, clearPost } from "../redux/modules/postSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(__getPostById(id));
    return () => dispatch(clearPost);
  }, [dispatch, id]);

  return (
    <Layout title="See Details">
      <Container>
        <PostDetail
          editMode={editMode}
          setEditMode={setEditMode}
          postId={id}
        ></PostDetail>
        {editMode ? <></> : <CommentList postId={id}></CommentList>}
      </Container>
    </Layout>
  );
};

export default Detail;

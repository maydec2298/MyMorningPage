// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../../redux/modules/postsSlice";
// Components
import Post from "./Post";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (posts.length === 0)
    return (
      <div>
        <h2>
          게시글이 없어요😭 <br /> 첫번째 글의 주인공이 되어 보시는건 어떨까요?{" "}
        </h2>
      </div>
    );

  if (error) return <div>알 수 없는 에러가 발생했습니다.</div>;

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

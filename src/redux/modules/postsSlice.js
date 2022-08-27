import { createSlice } from "@reduxjs/toolkit";

/* post property - postId, userId, content, editToggle
  const post = {
    postId: "",
    userId: "",
    title: "",
    content: "", 
    editToggle: false
  }
*/

const initialState = {
  posts: [
    {
      postId: 1,
      userId: "으아아",
      title: "안녕하세요",
      content: "test입니다.",
      editToggle: false,
    },
    {
      postId: 2,
      userId: "뾰로롱",
      title: "hihi",
      content: "test2입니다.",
      editToggle: false,
    },
    {
      postId: 3,
      userId: "제곧네",
      title: "제목이곧...",
      content: "ㅈㄱㄴ",
      editToggle: false,
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload]; // payload: 새로운 게시글 객체
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.postId !== action.payload
      ); //payload: 삭제될 게시글의 postId
    },

    editToggleComment: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.postId === action.payload
          ? { ...post, editToggle: !post.editToggle }
          : post
      );
    },
  },
});

export const { addPost, deletePost, editToggle } = postsSlice.actions;
export default postsSlice.reducer;

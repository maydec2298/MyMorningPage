import { createSlice } from "@reduxjs/toolkit";

/* comment property -postId, Id, userId, content, editToggle 
    const comment = {
      postId: postId, 
      id: "", 
      userId: userId, 
      content: commentContent, 
      editToggle: false
    }
    */

const initialState = {
  comments: [
    {
      postId: 1,
      id: 1,
      userId: "1에 댓글",
      content: "무플방지위원회",
      editToggle: false,
    },
    {
      postId: 2,
      id: 1,
      userId: "userId",
      content: "commentContent",
      editToggle: false,
    },
    {
      postId: 1,
      id: 2,
      userId: "userId",
      content: "commentContent",
      editToggle: false,
    },
  ],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload]; //payload:새로운 댓글 객체
    },

    deleteComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload // payload: commentId
      );
    },

    editToggleComment: (state, action) => {
      // payload: 댓글 id
      state.comments = state.comments.map((comment) =>
        comment.id === action.payload
          ? { ...comment, editToggle: !comment.editToggle }
          : comment
      );
    },
  },
});

export const { addComment, deleteComment, editToggleComment } =
  commentsSlice.actions;
export default commentsSlice.reducer;

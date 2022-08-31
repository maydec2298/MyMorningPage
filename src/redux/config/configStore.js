import { configureStore } from "@reduxjs/toolkit";
// module import
import postSlice from "../modules/postSlice";
import postsSlice from "../modules/postsSlice";
import commentsSlice from "../modules/commentsSlice";
import commentSlice from "../modules/commentSlice";

const store = configureStore({
  reducer: {
    post: postSlice,
    posts: postsSlice,
    comment: commentSlice,
    comments: commentsSlice,
  },
});

export default store;

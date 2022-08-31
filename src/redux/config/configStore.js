import { configureStore } from "@reduxjs/toolkit";
// module import
import postSlice from "../modules/postSlice";
import postsSlice from "../modules/postsSlice";
import commentsSlice from "../modules/commentsSlice";

const store = configureStore({
  reducer: { post: postSlice, posts: postsSlice, comments: commentsSlice },
});

export default store;

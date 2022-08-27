import { configureStore } from "@reduxjs/toolkit";
// module import
import postsSlice from "../modules/postsSlice";
import commentsSlice from "../modules/commentsSlice";

const store = configureStore({
  reducer: { posts: postsSlice, comments: commentsSlice },
});

export default store;

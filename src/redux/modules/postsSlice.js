import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import produce from "immer";
// import React from "react";
// import { isDev, serverUrl } from ".";

// const useImmerReducer = (reducer, initial) =>
//   React.useReducer(produce(reducer), initial);

/* post property - postId, userId, content, editToggle
  const post = {
    postId: "",
    userId: "",
    title: "",
    content: "", 
  }
*/

export const __getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPost = createAsyncThunk(
  "posts/addPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/posts", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "posts/deletePost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`http://localhost:3001/posts/${postId}`)
    }
  }
)

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  isSuccess: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearTodo: (state, action) => {
      state.isSuccess = false
    }
  },
  extraReducers: {
    // getPosts : posts 전체 목록을 가지고 옴
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // addPost : post를 db에 추가
    [__addPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...state.posts, action.payload];
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // deletePost : postId가 일치하는 객체를 삭제
    [__deletePost.pending]: (state) => {
      state.isLoading = true
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => post.postId !== action.payload)
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;

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
    editToggle: false
  }
*/

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

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

export const __addPosts = createAsyncThunk(
  "posts/addPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/posts", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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

    // addPosts : post를 db에 추가
    [__addPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...state.posts, action.payload];
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getPost, addPost, deletePost, editToggle } = postsSlice.actions;
export default postsSlice.reducer;

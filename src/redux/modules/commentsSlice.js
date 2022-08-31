import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { isDev, serverUrl } from ".";

/* comment property -postId, Id, userId, content, editToggle 
    const comment = {
      postId: postId, 
      id: "", 
      userId: userId, 
      content: commentContent, 
    }
    */

// thunk 함수 정의
// 특정 postId를 가진 댓글만 가져오기
export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/comments?postId=${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "comments/addComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/comments",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/comments/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: [],
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComment: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [__getComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.error = action.payload;
    },

    // addComment : comment를 db에 추가
    [__addComment.pending]: (state) => {},
    [__addComment.fulfilled]: (state, action) => {
      state.comments.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;

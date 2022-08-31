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
        "http://localhost:3001/comments", payload
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
  isLoading: false,
  isSuccess: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearComment: (state, action) => {
      state.isSuccess = false;
    },

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

    extraReducers: {
    
    // addComment : comment를 db에 추가
    [__addComment.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});

export const { clearComment, addComment, deleteComment, editToggleComment } =
  commentsSlice.actions;
export default commentsSlice.reducer;

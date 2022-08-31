import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// thunk 함수 정의
export const __getPostById = createAsyncThunk(
  "posts/getPostById",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/posts/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  post: {
    userId: "",
    title: "",
    content: "",
    id: 0,
  },
  error: null,
  isLoading: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost: (state) => {
      state.post = {
        userId: "",
        title: "",
        content: "",
        id: 0,
      };
    },
  },
  extraReducers: {
    // id가 일치하는 post를 가지고 옴
    [__getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPostById.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export const { clearPost } = postSlice.actions;
export default postSlice.reducer;

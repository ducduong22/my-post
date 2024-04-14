import { createSlice } from "@reduxjs/toolkit";

// state mac dinh
const initialState = {
  posts: [],
  comments: [],
  postId: 0,
  postdetail: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const { payload } = action;
      state.posts = payload;
    },
    setComments: (state, action) => {
      // state.comments = action.payload;
      const { payload } = action;
      state.comments = payload;
    },
    setPostId: (state, action) => {
      // state.postId = action.payload;
      const { payload } = action;
      state.postId = payload;
    },
    setpostdetail: (state, action) => {
      const { payload } = action;
      state.postdetail = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, setComments, setPostId, setpostdetail } =
  postSlice.actions;

export default postSlice.reducer;

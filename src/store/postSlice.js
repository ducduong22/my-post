import { createSlice } from "@reduxjs/toolkit";

// state mac dinh
const initialState = {
  posts: [],
  comments: [],
  postId: 0,
  postDetail: {},
  // trong js thì dùng là obj còn styercripts dùng là null
  // APi trả về là mảng nhưng bên trong mảng chưa con là object thì dùng object rỗng, còn nếu chưa s con là mảng thì mới dùng mảng rỗng
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
      const { payload } = action;
      state.comments = payload;
    },
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
    setPostDetail: (state, action) => {
      state.postDetail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, setComments, setPostId, setPostDetail } =
  postSlice.actions;

export default postSlice.reducer;

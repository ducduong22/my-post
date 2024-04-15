import { createSlice } from '@reduxjs/toolkit'

// state mac dinh
const initialState = {
  posts: [],
  comments: [],
  postId: 0,
  postDetail: null,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const { payload } = action
      state.posts = payload
    },
    setComments: (state, action) => {
      const { payload } = action
      state.comments = payload
    },
    setPostId: (state, action) => {
      // state.postId = action.payload;
      const { payload } = action
      state.postId = payload
    },
    setPostDetail: (state, action) => {
      state.postDetail = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, setComments, setPostId, setPostDetail } =
  postSlice.actions

export default postSlice.reducer

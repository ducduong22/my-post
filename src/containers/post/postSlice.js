import { createSlice } from '@reduxjs/toolkit'

// state mac dinh
const initialState = {
  posts: [],
  postId: 0,
  postDetail: null,
  loading: false,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state) => {
      state.loading = true
    },
    setPostsSuccess: (state, action) => {
      const { payload } = action
      state.posts = payload
      state.loading = false
    },
    setPostsFailed: (state) => {
      state.posts = []
      state.loading = false
    },

    ////////////////////////////////////////////////////
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
export const {
  setPosts,
  setPostsSuccess,
  setPostsFailed,
  setPostId,
  setPostDetail,
} = postSlice.actions

export default postSlice.reducer

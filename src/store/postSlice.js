import { createSlice } from '@reduxjs/toolkit'

// state mac dinh 
const initialState = {
  posts: [],
  comments: [],
  postId: 0
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const { payload } = action
      state.posts = payload
    },
    setComments: (state) => {

    },
    setPostId: (state, action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, setComments, setPostId } = postSlice.actions

export default postSlice.reducer
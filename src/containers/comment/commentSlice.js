import { createSlice } from '@reduxjs/toolkit'

// state mac dinh
const initialState = {
  comments: [],
  loading: false,
  error: '',
}

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getComments: (state, action) => {
      state.loading = true
      state.error = ''
    },
    getCommentsSuccess: (state, action) => {
      const { payload } = action
      state.comments = payload
      state.loading = false
    },
    getCommentsFailed: (state, action) => {
      const { payload } = action
      state.comments = []
      state.error = payload
      state.loading = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { getComments, getCommentsSuccess, getCommentsFailed } =
  commentSlice.actions

export default commentSlice.reducer

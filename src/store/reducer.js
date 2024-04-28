import { combineReducers } from '@reduxjs/toolkit'
import postReducer from '../containers/post/postSlice'
import commentReducer from '../containers/comment/commentSlice'

const rootReducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
  // add other reducers here
})

export default rootReducer

import { combineReducers } from '@reduxjs/toolkit'
import postReducer from './postSlice'

const rootReducer = combineReducers({
  post: postReducer,
})

export default rootReducer

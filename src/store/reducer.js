import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import commentReducer from "./postSlice";
import postDetailReducer from "./postSlice";

const rootReducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
  postDetail: postDetailReducer,
});

export default rootReducer;

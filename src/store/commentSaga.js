import { getComment } from "./api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  setComments,
  setCommentsSuccess,
  setCommentsFailed,
} from "./postSlice";

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* fetchComment(action) {
  try {
    const comments = yield call(getComment);
    yield put(setCommentsSuccess(comments));
    console.log(comments);
  } catch (e) {
    yield put(setCommentsFailed());
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* commentSaga() {
  yield takeLatest(setComments.type, fetchComment);
}

export default commentSaga;

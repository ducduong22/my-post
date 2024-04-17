import { getPost } from './api'
import { call, put, takeEvery } from 'redux-saga/effects'
import { setPosts, setPostsSuccess, setPostsFailed } from './postSlice'

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchPost(action) {
  try {
    const posts = yield call(getPost)
    yield put(setPostsSuccess(posts))
  } catch (e) {
    yield put(setPostsFailed())
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* postSaga() {
  yield takeLatest(setPosts.type, fetchPost)
}

export default postSaga

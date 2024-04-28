import { getCommentAPI } from '../../store/api'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  getComments,
  getCommentsSuccess,
  getCommentsFailed,
} from './commentSlice'

function* fetchComment({ payload: id }) {
  try {
    const comments = yield call(() => getCommentAPI(id))
    yield put(getCommentsSuccess(comments))
  } catch (error) {
    yield put(getCommentsFailed('There is something wrong on the server'))
  }
}

// hung action tu comment reduce
function* commentSaga() {
  yield takeLatest(getComments.type, fetchComment)
}

export default commentSaga

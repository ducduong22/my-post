import { all } from 'redux-saga/effects'
import postSaga from '../containers/post/postSaga'
import commentSaga from '../containers/comment/commentSaga'

function* rootSaga() {
  yield all([
    postSaga(),
    commentSaga(),
    // Add other sagas here
  ])
}

export default rootSaga

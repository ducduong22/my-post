import { all } from 'redux-saga/effects'
import postSaga from './postSaga'

function* rootSaga() {
  yield all([
    postSaga(),
    // Add other sagas here
  ])
}

export default rootSaga

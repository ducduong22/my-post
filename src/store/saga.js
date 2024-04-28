import { all } from "redux-saga/effects";
import postSaga from "./postSaga";
import commentSaga from "./commentSaga";

function* rootSaga() {
  yield all([
    postSaga(),

    // Add other sagas here
  ]);
  yield all([
    commentSaga(),
    // Add other sagas here
  ]);
}

export default rootSaga;

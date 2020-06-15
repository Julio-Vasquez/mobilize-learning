import { fork, all } from "redux-saga/effects";
import AuthSaga from "./../services/auth/saga";

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}

import { put, takeLatest, all } from "redux-saga/effects";

import Api from "./../../common/Api/Api";
import { FunctionToken } from "./../../common/token";
import { auth } from "./actions";
import History from "./../../common/history";
function* FetchLogin(dataForm) {
  const res = yield Api.POST("auth/login", dataForm.payload).catch(
    (err) => err
  );
  console.log(res.payload);
  if (res.payload.sucess) {
    localStorage.setItem("mltoken", res.payload.token);
    console.log(FunctionToken.Decode(res.payload.token));
    yield put(auth.loginSuccess(res.payload.token));
    History.push("/admin");
  } else if (res.payload.error) {
    yield put(auth.loginFailed(`${res.payload.detail}`));
  } else {
    const err = new TypeError("ERROR_LOGIN");
    yield put(auth.loginFailed(err));
  }
}
/*
function* FetchSignup(dataForm) {}

function* FetchForgotPassword(dataForm) {}
*/
const FetchLogout = () => localStorage.clear();

function* ActionWatcher() {
  yield takeLatest(auth.login, FetchLogin);
  yield takeLatest(auth.logout, FetchLogout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}

import { put, takeLatest, all } from "redux-saga/effects";
import { stopSubmit } from "redux-form";

import Api from "./../../common/Api/Api";
import { FunctionToken } from "./../../common/token";
import { LOGIN_ACTION, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "./constans";

function* FetchLogin(dataForm) {
  const res = yield Api.POST("auth/login", {
    userName: dataForm.userName,
    password: dataForm.password,
  }).catch((err) => err);

  if (res.payload.sucess) {
    localStorage.setItem("mltoken", res.payload.token);
    console.log(FunctionToken.Decode(res.payload.token))
    yield put({
      type: LOGIN_SUCCESS,
      token: res.payload,
    });
  } else if (res.payload.error) {
    yield put({ type: LOGIN_FAILED });
    yield put(
      stopSubmit("login", { _error: `${res.payload.detail}` })
    );
  } else {
    yield put({ type: LOGIN_FAILED });
    yield put(
      stopSubmit("login", {
        _error: "Tenemos un problema, intentalo más tarde",
      })
    );
  }

}

function* FetchSignup(dataForm) { }

function* FetchForgotPassword(dataForm) { }

const FetchLogout = () => localStorage.clear();

function* ActionWatcher() {
  yield takeLatest(LOGIN_ACTION, FetchLogin);
  yield takeLatest(LOGOUT, FetchLogout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}

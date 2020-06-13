import { put, takeLatest, all } from "redux-saga/effects";
import { stopSubmit } from "redux-form";

import { POST } from "./../../common/Api";
import { FunctionToken } from "./../../common/token";
import { LOGIN_ACTION, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "./constans";

function* FetchLogin(dataForm) {
  const res = yield POST("auth/login", {
    userName: dataForm.userName,
    password: dataForm.password,
  }).catch((err) => err);

  if (res.payload.sucess) {
    localStorage.setItem("mltoken", res.payload);
    yield put({
      type: LOGIN_SUCCESS,
      token: res.payload,
      token_decode: FunctionToken.decode(),
    });
  } else if (res.payload.error === "USER_INVALID") {
    yield put({ type: LOGIN_FAILED });
    yield put(
      stopSubmit("login", { _error: "El usuario o contraseña no coinciden" })
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

function* FetchSignup(dataForm) {}

function* FetchForgotPassword(dataForm) {}

const FetchLogout = () => localStorage.clear();

function* ActionWatcher() {
  yield takeLatest(LOGIN_ACTION, FetchLogin);
  yield takeLatest(LOGOUT, FetchLogout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}

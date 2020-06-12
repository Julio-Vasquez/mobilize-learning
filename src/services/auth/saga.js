import { put, takeLatest, all } from "redux-saga/effects";
import { stopSubmit } from "redux-form";

import { GET, POST, DELETE, PUT } from "./../../common/Api";
import { FunctionToken } from "./../../common/token";
import {
  LOGIN_ACTION,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_ACTION,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGOUT,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
} from "./constans";

function* FetchLogin(dataForm) {
  const res = POST("/auth", { email: dataForm.email, pwd: dataForm.password });

  if (res.success) {
    localStorage.setItem("mltoken", res.payload);
    yield put({
      type: LOGIN_SUCCESS,
      token: res.payload,
      token_decode: FunctionToken.decode(),
    });
  } else if (res.error === "USER_INVALID") {
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

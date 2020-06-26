import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";

import Api from "./../../common/Api/Api";
import { FunctionToken } from "./../../common/token";
import { auth } from "./actions";
import History from "./../../common/history";

function* FetchLogin(dataForm) {
  try {
    const res = yield Api.POST("auth/login", dataForm.payload);

    console.log(res.payload);
    if (res.payload.sucess) {
      FunctionToken.SetToken(res.payload.token, "");

      console.log(FunctionToken.Decode(res.payload.token));
      yield put(auth.loginSuccess(res.payload.token));
      History.push("/admin/dashboard");
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`, {});
      yield put(auth.loginFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      const err = new TypeError("ERROR_LOGIN");
      yield put(auth.loginFailed({ error: err }));
    }
  } catch (e) {
    message.error(`Error Desconocido`);
    const err = new TypeError("ERROR_LOGIN");
    yield put(auth.loginFailed({ error: err }));
  }
}
/*
function* FetchSignup(dataForm) {}
*/
function* FetchNewPassword({ payload }) {
  try {
    const res = yield Api.PUT("auth/forgot-password", payload);

    console.log(res.payload);

    if (res.payload.success) {
      console.log(res.payload.success);
      yield put(auth.newPasswordSuccess("ok"));
      History.push("/login");
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`, 5);
      yield put(auth.newPasswordFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      const err = new TypeError("ERROR_RESET_PASSWORD");
      yield put(auth.newPasswordFailed({ error: err }));
    }
  } catch (e) {
    message.error(`Error Desconocido`);
    const err = new TypeError("ERROR_RESET_PASSWORD");
    yield put(auth.newPasswordFailed({ error: err }));
  }
}

const FetchLogout = () => localStorage.clear();

function* FetchForgotPassword({ payload }) {
  try {
    const res = yield Api.POST("auth/request-forgot-password", payload);
    console.log(res.payload);
    if (res.payload.success) {
      console.log(res.payload.success);
      yield put(auth.resetPasswordSuccess("ok"));
      History.push("/");
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`, 3000);
      yield put(auth.resetPasswordFailed(`${res.payload.detail}`));
    } else {
      message.error(`Error Desconocido`);
      const err = new TypeError("ERROR_RESET_PASSWORD");
      yield put(auth.resetPasswordFailed({ error: err }));
    }
  } catch (e) {
    message.error(`Error Desconocido`);
    const err = new TypeError("ERROR_RESET_PASSWORD");
    yield put(auth.resetPasswordFailed({ error: err }));
  }
}
function* ActionWatcher() {
  yield takeLatest(auth.login, FetchLogin);
  yield takeLatest(auth.logout, FetchLogout);
  yield takeLatest(auth.resetPassword, FetchForgotPassword);
  yield takeLatest(auth.newPassword, FetchNewPassword);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}

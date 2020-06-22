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

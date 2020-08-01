import { put, takeLatest, all } from "redux-saga/effects";
import { message } from 'antd';

import Api from './../../common/Api/Api';
import { account, profile } from './actions';
import { FailedConnectionServer } from './../Util/FailedConnectionServer';


function* FetchGetProfile({ payload }) {
  try {
    const res = yield Api.POST("user/profile", payload);
    if (res && res.payload.success)
      yield put(profile.getProfileSuccess(res.payload.payload));
    else if (res.payload.error)
      yield put(profile.getProfileFailed(res.payload.detail));
    else {
      message.error(`Error Desconocido`);
      yield put(profile.getProfileFailed(new TypeError("ERROR_GET_PROFILE")));
    }
  } catch (e) {
    yield put(profile.getProfileFailed({ error: FailedConnectionServer() }));
  }
}

function* ActionWatcher() {
  console.log(account)
  yield takeLatest(profile.getProfile, FetchGetProfile);
}

export default function* AccountSaga() {
  yield all([ActionWatcher()]);
}
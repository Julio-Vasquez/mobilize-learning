import { put, takeLatest, all } from 'redux-saga/effects';
import { message } from 'antd';

import Api from './../../common/Api/Api';
import { score } from './actions';
import { FailedConnectionServer } from '../Util/FailedConnectionServer';

function* FetchGetScore({ payload: userName }) {
  try {
    const res = yield Api.POST(`score/getscore`, userName);
    if (res && res.payload.success) {
      console.log(res.payload.payload)
      yield put(score.getScoreSuccess(res.payload.payload))
    } else if (res.payload.error) {
      message.error(`${res.payload.detail}`, 5);
      yield put(score.getScoreFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`);
      const err = new TypeError("ERROR_GET_SCORE");
      yield put(score.getScoreFailed(err));
    }
  } catch (e) {
    console.log(e)
    yield put(score.getScoreFailed(FailedConnectionServer()));
  }
}

function* ActionWatcher() {
  yield takeLatest(score.getScore, FetchGetScore);
}

export default function* ScoreSaga() {
  yield all([ActionWatcher()]);
}
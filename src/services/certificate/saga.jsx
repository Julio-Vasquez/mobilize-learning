import { put, takeLatest, all } from "redux-saga/effects";

import Api from './../../common/Api/Api';
import { certificate } from './actions';
import History from './../../common/history';
import { FailedConnectionServer } from './../Util/FailedConnectionServer';

function* FetchGetCertificate() {
  try {
    const res = yield Api.GET('');
    if (res) {
      //yield put();
      History.push('');
    }
  } catch (e) {
    yield put(certificate.getCertificateFailed({ error: FailedConnectionServer() }));
  }
}

function* ActionWatcher() {
  yield takeLatest(certificate.getCertificate, FetchGetCertificate);
}

export default function* CertificateSaga() {
  yield all([ActionWatcher()]);
}
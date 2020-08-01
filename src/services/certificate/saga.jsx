import { put, takeLatest, all } from "redux-saga/effects";
import { message } from 'antd';

import Api from './../../common/Api/Api';
import { certificate } from './actions';
import { FailedConnectionServer } from './../Util/FailedConnectionServer';

function* FetchGetCertificate({ payload }) {
  try {
    const res = yield Api.POST('certificate/generate', payload);
    if (res && res.payload.success) {
      yield put(certificate.getCertificateSuccess(res.payload.payload));
    } else if (res.payload.error) {
      yield put(certificate.getCertificateFailed(`${res.payload.detail}`))
    } else {
      message.error(`Error Desconocido`);
      const err = new TypeError("ERROR_GET_CERTIFICATE");
      yield put(certificate.getCertificateFailed(err));
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
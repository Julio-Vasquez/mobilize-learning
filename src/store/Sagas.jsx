import { fork, all } from 'redux-saga/effects';

import AuthSaga from "./../services/auth/saga";
import CoursesSaga from './../services/course/saga';
import CertificateSaga from './../services/certificate/saga';
import ScoreSaga from './../services/score/saga';

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(CoursesSaga),
    fork(CertificateSaga),
    fork(ScoreSaga)
  ]);
}

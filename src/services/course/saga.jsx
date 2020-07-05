import { put, takeLatest, all } from "redux-saga/effects";

import Api from './../../common/Api/Api';
import { courses } from './actions';
import History from './../../common/history';
import { FailedConnectionServer } from '../Util/FailedConnectionServer';

function* FetchGetCourses() {
  try {
    const res = yield Api.GET();
    if (res) {
      yield put();
      History.push('');
    }
  } catch (e) {

    yield put(courses.getCoursesFailed({ error: FailedConnectionServer() }));
  }
}


function* ActionWatcher() {
  yield takeLatest(courses.getCourses, FetchGetCourses);
}

export default function* CoursesSaga() {
  yield all([ActionWatcher()]);
}
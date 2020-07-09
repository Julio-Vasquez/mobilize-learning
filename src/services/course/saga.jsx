import { put, takeLatest, all } from "redux-saga/effects";

import Api from './../../common/Api/Api';
import { courses } from './actions';
//import History from './../../common/history';
import { FailedConnectionServer } from '../Util/FailedConnectionServer';

function* FetchGetCourses({ payload: type }) {
  try {
    const res = yield Api.GET(`module/${type.type}`);
    if (res.payload.success) {
      console.log(res.payload.payload)
      yield put(courses.getCoursesSuccess(res.payload.payload))
    }
    console.log(res.payload.payload)
  } catch (e) {
    console.log(e)
    yield put(courses.getCoursesFailed({ error: FailedConnectionServer() }));
  }
}


function* ActionWatcher() {
  yield takeLatest(courses.getCourses, FetchGetCourses);
}

export default function* CoursesSaga() {
  yield all([ActionWatcher()]);
}
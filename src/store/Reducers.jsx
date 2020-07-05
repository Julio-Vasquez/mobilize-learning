import { combineReducers } from 'redux';

import reducerAuth, { INITIAL_STATE as initialAuth } from './../services/auth/reducer';
import reducerCourses, { INITIAL_STATE as initialCourses } from './../services/course/reducer';
import reducerCertificate, { INITIAL_STATE as initialCertificate } from '../services/certificate/reducer';

const appReducer = combineReducers({
  Auth: reducerAuth,
  Courses: reducerCourses,
  Certificate: reducerCertificate
});

const rootReducer = (state, action) => {
  if (action.type === "AUTH/LOGOUT")
    state = {
      auth: initialAuth,
      course: initialCourses,
      certificate: initialCertificate
    };
  return appReducer(state, action);
};

export default rootReducer;

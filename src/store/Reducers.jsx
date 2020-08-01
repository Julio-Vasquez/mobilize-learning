import { combineReducers } from 'redux';

import reducerAuth, { INITIAL_STATE as initialAuth } from './../services/auth/reducer';
import reducerCourses, { INITIAL_STATE as initialCourses } from './../services/course/reducer';
import reducerCertificate, { INITIAL_STATE as initialCertificate } from '../services/certificate/reducer';
import reducerScore, { INITIAL_STATE as initialScore } from '../services/score/reducer';
import reducerAccount, { INITIAL_STATE as initialAccount } from '../services/account/reducer';

const appReducer = combineReducers({
  Auth: reducerAuth,
  Courses: reducerCourses,
  Certificate: reducerCertificate,
  Score: reducerScore,
  Account: reducerAccount
});

const rootReducer = (state, action) => {
  if (action.type === "AUTH/LOGOUT")
    state = {
      Auth: initialAuth,
      Courses: initialCourses,
      Certificate: initialCertificate,
      Score: initialScore,
      Account: initialAccount
    };
  return appReducer(state, action);
};

export default rootReducer;

import { combineReducers } from "redux";

import reducerAuth from "./../services/auth/reducer";
import { auth } from "./../services/auth/actions";

const appReducer = combineReducers({
  Auth: reducerAuth,
});

const rootReducer = (state, action) => {
  if (action.type === auth.logout()) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;

import { combineReducers } from "redux";

import reducerAuth from "./../services/auth/reducer";
import { LOGOUT } from "./../services/auth/constans";

const appReducer = combineReducers({
  Auth: reducerAuth,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;

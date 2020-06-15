import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import reducerAuth from "./../services/auth/reducer";
import { LOGOUT } from "./../services/auth/constans";

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    Auth: reducerAuth,
  });

const rootReducer = (history) => (state, action) => {
  if (action.type === LOGOUT) state = undefined;
  return appReducer(history)(state, action);
};

export default rootReducer;

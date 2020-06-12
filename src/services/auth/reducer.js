import {
  LOGIN_ACTION,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_ACTION,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGOUT,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
} from "./constans";

import { FunctionToken } from "./../../common/token";

const initState = {
  authentication: FunctionToken.isToquenValid(),
  rol: FunctionToken.isToquenValid()
    ? FunctionToken.decode().rol()
    : ["invitado"],
};

const reducerAuth = (state = initState, action) => {
  switch (Action) {
    case LOGIN_ACTION:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        authentication: true,
        loading: false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        authentication: false,
      };

    default:
      return state;
  }
};

export default reducerAuth;

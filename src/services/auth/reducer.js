import { LOGIN_ACTION, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "./constans";

import { FunctionToken } from "./../../common/token";

const initState = {
  authentication: FunctionToken.isTokenValid(),
  rol: FunctionToken.isTokenValid()
    ? FunctionToken.decode().rol()
    : ["invitado"],
};

const reducerAuth = (state = initState, action) => {
  switch (action) {
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
    case LOGOUT:
      return {
        ...state,
        authentication: false,
        rols: ["invited"],
        token_decode: undefined,
        token: undefined,
      };

    default:
      return state;
  }
};

export default reducerAuth;

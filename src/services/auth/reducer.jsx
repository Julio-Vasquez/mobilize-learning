import { handleActions } from "redux-actions";

import { FunctionToken } from "./../../common/token";

export const INITIAL_STATE = {
  authentication: FunctionToken.IsTokenValid(),
  loading: false,
  errorLogin: false,
};

const reducerAuth = handleActions(
  {
    AUTH: {
      LOGIN: (state, { payload }) => ({
        ...state,
        loading: true,
        errorLogin: false,
      }),
      LOGIN_SUCCESS: {
        next(state, { payload: { token } }) {
          console.log(`hola amigo : ${token}`);
          return {
            ...state,
            authentication: true,
            token: token,
            loading: false,
          };
        },
      },
      LOGIN_FAILED: (state, action) => ({
        ...state,
        errorLogin: true,
        loading: false,
      }),
      LOGOUT: (state, { payload }) => ({ ...state, authentication: false }),
    },
  },
  INITIAL_STATE
);

export default reducerAuth;

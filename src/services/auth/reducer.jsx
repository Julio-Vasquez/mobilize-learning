import { handleActions } from "redux-actions";

import { FunctionToken } from "./../../common/token";

export const INITIAL_STATE = {
  authentication: FunctionToken.IsTokenValid(),
  loading: false,
  errorLogin: undefined,
  error: { login: undefined, signup: undefined, ResetPassword: undefined },
  success: {
    ResetPassword: undefined,
  },
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
      LOGIN_FAILED: (state, { payload: { error } }) => ({
        ...state,
        errorLogin: error,
        loading: false,
      }),
      LOGOUT: (state, { payload }) => ({ ...state, authentication: false }),
      RESET_PASSWORD: (state) => ({
        ...state,
        loading: true,
        success: { ...state.success, ResetPassword: false },
        error: { ...state.error, ResetPassword: false },
      }),
      RESET_PASSWORD_SUCCESS: {
        next(state, { payload }) {
          return {
            ...state,
            success: { ...state.success, ResetPassword: true },
            loading: false,
          };
        },
      },
      RESET_PASSWORD_FAILED: (state, { payload: { message } }) => ({
        ...state,
        loading: false,
        error: { ...state.error, ResetPassword: message },
      }),
    },
  },
  INITIAL_STATE
);

export default reducerAuth;

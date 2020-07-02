import { handleActions } from "redux-actions";

import { FunctionToken } from "./../../common/token";
console.log(FunctionToken.IsTokenValid());
export const INITIAL_STATE = {
  authentication: FunctionToken.IsTokenValid(),
  loading: false,
  error: {
    login: undefined,
    signup: undefined,
    ResetPassword: undefined,
    signup: undefined,
  },
  success: {
    ResetPassword: undefined,
    newPassword: undefined,
    login: undefined,
    signup: undefined,
  },
};

const reducerAuth = handleActions(
  {
    AUTH: {
      LOGIN: (state, { payload }) => ({
        ...state,
        loading: true,
        error: { ...state.error, login: false },
      }),

      LOGIN_SUCCESS: {
        next(state, { payload: { token } }) {
          return {
            ...state,
            authentication: true,
            token: token,
            loading: false,
            success: { ...state.success, login: true },
            error: { ...state.error, login: false },
          };
        },
      },

      LOGIN_FAILED: (state, { payload: { error } }) => ({
        ...state,
        error: { ...state.error, login: true },
        success: { ...state.success, login: false },
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
            error: { ...state.error, ResetPassword: false },
            loading: false,
          };
        },
      },

      RESET_PASSWORD_FAILED: (state, { payload: { message } }) => ({
        ...state,
        loading: false,
        success: { ...state.success, ResetPassword: false },
        error: { ...state.error, ResetPassword: message },
      }),

      NEW_PASSWORD: (state, { payload }) => ({
        ...state,
        loading: true,
        success: { ...state.success, newPassword: false },
        error: { ...state.error, newPassword: false },
      }),

      NEW_PASSWORD_SUCCESS: {
        next(state, { payload }) {
          return {
            ...state,
            loading: false,
            success: { ...state.success, newPassword: true },
          };
        },
      },

      NEW_PASSWORD_FAILED: (state, { payload: { message } }) => ({
        ...state,
        loading: false,
        error: { ...state.error, newPassword: message },
      }),

      SIGNUP: (state, { payload }) => ({
        ...state,
        loading: true,
        success: { ...state.success, signup: false },
        error: { ...state.error, signup: false },
      }),

      SIGNUP_SUCCESS: {
        next(state, { payload }) {
          return {
            ...state,
            loading: false,
            success: { ...state.success, signup: true },
            error: { ...state.error, signup: false },
          };
        },
      },

      SIGNUP_FAILED: (state, { payload: { message } }) => ({
        ...state,
        loading: false,
        error: { ...state.error, signup: message },
        success: { ...state.success, signup: false },
      }),
    },
  },
  INITIAL_STATE
);

export default reducerAuth;

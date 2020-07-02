import { createActions } from "redux-actions";

export const { auth } = createActions({
  AUTH: {
    LOGIN: (userName, password) => ({ userName, password }),
    LOGIN_SUCCESS: (token) => ({ token }),
    LOGIN_FAILED: (error) => ({ error }),

    LOGOUT: () => ({}),

    RESET_PASSWORD: (userName) => ({ userName }),
    RESET_PASSWORD_SUCCESS: (success) => ({ success }),
    RESET_PASSWORD_FAILED: (error) => ({ error }),

    NEW_PASSWORD: (token, password) => ({ token, password }),
    NEW_PASSWORD_SUCCESS: (success) => ({ success }),
    NEW_PASSWORD_FAILED: (error) => ({ error }),

    SIGNUP: (payload) => ({ payload }),
    SIGNUP_SUCCESS: (success) => ({ success }),
    SIGNUP_FAILED: (error) => ({ error }),
  },
});

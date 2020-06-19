import { createActions } from "redux-actions";

export const { auth } = createActions({
  AUTH: {
    LOGIN: (userName, password) => ({ userName, password }),
    LOGIN_SUCCESS: (token) => ({ token }),
    LOGIN_FAILED: () => ({}),
    LOGOUT: () => ({}),
  },
});

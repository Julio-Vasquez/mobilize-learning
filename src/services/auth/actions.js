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

export const loginAction = (email, password) => ({
  type: LOGIN_ACTION,
  email,
  password,
});

export const onLoginSucess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});

export const onLoginFailed = (err) => ({
  type: LOGIN_FAILED,
  err,
});

export const singupAction = (data) => ({
  type: SIGNUP_ACTION,
  data,
});

export const onSignupSucess = (data) => ({
  type: SIGNUP_SUCCESS,
  data,
});

export const onSignupFailed = (data) => ({
  type: SIGNUP_FAILED,
  data,
});

export const forgotPassword = (email) => ({
  type: FORGOT_PASSWORD,
  email,
});

export const forgotPasswordSucess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordFailed = (err) => ({
  type: FORGOT_PASSWORD_FAILED,
  err,
});

export const logout = () => ({
  type: LOGOUT,
});

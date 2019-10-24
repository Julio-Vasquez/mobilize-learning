import * as Action from './constans';

export const loginAction = (email, password) => ({
  type: Action.LOGIN_ACTION,
  email,
  password,
});

export const onLoginSucess = data => ({
  type: Action.LOGIN_SUCCESS,
  data,
});

export const onLoginFailed = err => ({
  type: Action.SIGNUP_FAILED,
  err,
});

export const singupAction = data => ({
  type: Action.SIGNUP_ACTION,
  data,
});

export const onSignupSucess = data => ({
  type: Action.SIGNUP_SUCCESS,
  data
});

export const onSignupFailed = data => ({
  type: Action.SIGNUP_FAILED,
  data,
});

export const forgotPassword = email => ({
  type: Action.FORGOT_PASSWORD,
  email,
});

export const forgotPasswordSucess = () => ({
  type: Action.FORGOT_PASSWORD_SUCCESS
});

export const forgotPasswordFailed = err => ({
  type: Action.FORGOT_PASSWORD_FAILED,
  err,
});

export const logout = () => ({
  type: Action.LOGOUT
});

export const finishSignup = () => ({
  type: Action.FINISH_SIGNUP
});
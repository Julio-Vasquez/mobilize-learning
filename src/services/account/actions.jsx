import { createActions } from 'redux-actions';

export const { profile, account } = createActions({
  PROFILE: {
    GET_PROFILE: (userName) => ({ userName }),
    GET_PROFILE_SUCCESS: (data) => ({ data }),
    GET_PROFILE_FAILED: (error) => ({ error }),
  },
  ACCOUNT: {
    GET_ACCOUNT: (userName) => ({ userName }),
    GET_ACCOUNT_SUCCESS: (data) => ({ data }),
    GET_ACCOUNT_FAILED: (error) => ({ error }),
  }
});
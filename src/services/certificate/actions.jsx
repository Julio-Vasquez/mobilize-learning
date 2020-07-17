import { createActions } from 'redux-actions';

export const { certificate } = createActions({
  CERTIFICATE: {
    GET_CERTIFICATE: (userName) => ({ userName }),
    GET_CERTIFICATE_SUCCESS: (data) => ({ data }),
    GET_CERTIFICATE_FAILED: (error) => ({ error })
  }
});
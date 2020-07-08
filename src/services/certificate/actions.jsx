import { createActions } from 'redux-actions';

export const { certificate } = createActions({
  CERTIFICATE: {
    GET_CERTIFICATE: () => ({}),
    GET_CERTIFICATE_SUCCESS: () => ({}),
    GET_CERTIFICATE_FAILED: () => ({})
  }
});
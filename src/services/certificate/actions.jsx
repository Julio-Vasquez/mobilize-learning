import { createActions } from 'redux-actions';

export const { certificate } = createActions({
  COURSES: {
    GET_CERTIFICATE: () => ({}),
    GET_CERTIFICATE_SUCCESS: () => ({}),
    GET_CERTIFICATE_FAILED: () => ({})
  }
});
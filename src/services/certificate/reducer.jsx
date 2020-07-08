import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: true,
  error: false,
  success: true
}

const reducerCertificate = handleActions(
  {
    CERTIFICATE: {
      GET_CERTIFICATE: () => ({}),
      GET_CERTIFICATE_SUCCESS: () => ({}),
      GET_CERTIFICATE_FAILED: () => ({})
    }
  },
  INITIAL_STATE
);


export default reducerCertificate;
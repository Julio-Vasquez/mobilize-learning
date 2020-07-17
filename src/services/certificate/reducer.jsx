import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: true,
  error: {
    type: undefined,
    error: undefined
  },
  success: true,
  certificateData: []
}

const reducerCertificate = handleActions(
  {
    CERTIFICATE: {
      GET_CERTIFICATE: (state, { payload }) => ({
        ...state,
        loading: true,
        error: { ...state.error, error: false, type: undefined },
        success: false
      }),

      GET_CERTIFICATE_SUCCESS: {
        next(state, { payload: { data } }) {
          return {
            loading: false,
            error: {
              ...state.error, error: false, type: undefined
            },
            success: true,
            certificateData: data
          };
        }
      },

      GET_CERTIFICATE_FAILED: (state, { payload: { error } }) => ({
        ...state,
        loading: false,
        error: {
          ...state.error, error: true, type: error
        },
        success: false
      })

    }
  },
  INITIAL_STATE
);


export default reducerCertificate;
import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: true,
  error: {
    error: undefined,
    type: undefined
  },
  success: undefined,
  scoreData: []
};


const reducerScore = handleActions(
  {
    SCORE: {
      GET_SCORE: (state, { payload }) => ({
        ...state,
        loading: true,
        error: { ...state.error, error: false, type: undefined },
        success: undefined
      }),

      GET_SCORE_SUCCESS: {
        next(state, { payload: { data } }) {
          return {
            ...state,
            loading: false,
            error: { ...state, error: false, type: undefined },
            success: true,
            scoreData: data
          }
        }
      },

      GET_SCORE_FAILED: (state, { error }) => ({
        ...state,
        loading: false,
        error: { ...state.error, error: true, type: error },
        success: false
      })
    }
  },
  INITIAL_STATE
);

export default reducerScore;
import { createActions } from 'redux-actions';

export const { score } = createActions({
  SCORE: {
    GET_SCORE: (userName) => ({ userName }),

    GET_SCORE_SUCCESS: (data) => ({ data }),

    GET_SCORE_FAILED: (error) => ({ error })
  }
});
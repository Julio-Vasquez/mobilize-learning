import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: true,
  error: {
    error: undefined,
    type: undefined
  },
  success: undefined,
  content: []
}

const reducerCourses = handleActions(
  {
    COURSES: {
      GET_COURSES: (state, { payload }) => ({
        ...state,
        loading: true,
        error: { ...state.error, error: false, type: undefined },
        success: false
      }),

      GET_COURSES_SUCCESS: {
        next(state, { payload: { data } }) {
          return {
            ...state,
            loading: false,
            error: { ...state.error, error: false, type: undefined },
            success: true,
            content: data
          }
        }
      },

      GET_COURSES_FAILED: (state, { payload }) => ({
        ...state,
        loading: false,
        error: { ...state.error, error: true, type: payload },
        success: false
      })
    }
  },
  INITIAL_STATE
);


export default reducerCourses;
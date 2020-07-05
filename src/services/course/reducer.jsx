import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: true,
  error: {},
  success: {}
}

const reducerCourses = handleActions(
  {
    COURSES: {
      GET_COURSES: () => ({}),
      GET_COURSES_SUCCESS: () => ({}),
      GET_COURSES_FAILED: () => ({})
    }
  },
  INITIAL_STATE
);


export default reducerCourses;
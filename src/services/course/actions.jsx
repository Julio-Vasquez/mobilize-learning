import { createActions } from 'redux-actions';

export const { courses } = createActions({
  COURSES: {
    GET_COURSES: (type) => ({ type }),
    GET_COURSES_SUCCESS: (data) => ({ data }),
    GET_COURSES_FAILED: (error) => ({ error })
  }
});
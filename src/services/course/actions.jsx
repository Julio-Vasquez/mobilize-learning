import { createActions } from 'redux-actions';

export const { courses } = createActions({
  COURSES: {
    GET_COURSES: () => ({}),
    GET_COURSES_SUCCESS: () => ({}),
    GET_COURSES_FAILED: () => ({})
  }
});
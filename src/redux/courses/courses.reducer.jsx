import CourseActionTypes from "./courses.types";
import { enrollCourse } from "./courses.utils";

const INITIAL_STATE = {
  courses: null,
  isFetching: false,
  errorMessage: undefined,
  myCourses: [],
  filteredCourses: [],
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CourseActionTypes.FETCH_COURSES_START:
      return {
        ...state,
        isFetching: true,
      };
    case CourseActionTypes.FETCH_COURSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        courses: action.payload,
      };
    case CourseActionTypes.FETCH_COURSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case CourseActionTypes.ENROLL_COURSE:
      return {
        ...state,
        myCourses: enrollCourse(state.myCourses, action.payload),
        courses: enrollCourse(state.courses, action.payload),
      };
    default:
      return state;
  }
};

export default coursesReducer;

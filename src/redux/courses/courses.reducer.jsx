import COURSES_DATA from "./courses.data.json";
import CourseActionTypes from "./courses.types";
import { enrollCourse, quitFromCourse } from "./courses.utils";

const INITIAL_STATE = {
  courses: COURSES_DATA.data,
  enroll: false,
  myCourses: [],
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CourseActionTypes.ENROLL_COURSE:
      return {
        ...state,
        enroll: !state.enroll,
        myCourses: enrollCourse(state.myCourses, action.payload),
      };
    case CourseActionTypes.REMOVE_COURSE:
      return {
        ...state,
        enroll: state.enroll,
        myCourses: quitFromCourse(state.myCourses, action.payload),
      };
    default:
      return state;
  }
};

export default coursesReducer;

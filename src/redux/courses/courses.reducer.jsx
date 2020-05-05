import COURSES_DATA from "./courses.data.json";
import CourseActionTypes from "./courses.types";
import { enrollCourse } from "./courses.utils";

const INITIAL_STATE = {
  courses: COURSES_DATA.data,
  myCourses: [],
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

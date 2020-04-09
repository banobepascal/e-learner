import COURSES_DATA from "./courses.data";

const INITIAL_STATE = {
  courses: COURSES_DATA,
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default coursesReducer;
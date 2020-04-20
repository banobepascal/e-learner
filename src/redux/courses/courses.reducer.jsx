import COURSES_DATA from "./courses.data.json";

const INITIAL_STATE = {
  courses: COURSES_DATA.data,
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default coursesReducer;
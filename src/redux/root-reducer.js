import { combineReducers } from "redux";

import coursesReducer from "./courses/courses.reducer";

export default combineReducers({
  courses: coursesReducer,
});

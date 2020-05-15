import { combineReducers } from "redux";

import coursesReducer from "./courses/courses.reducer";
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
  courses_data: coursesReducer,
});

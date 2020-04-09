import { combineReducers } from "redux";

import categoriesReducer from "./categories/categories.reducer";
import coursesReducer from "./courses/courses.reducer";

export default combineReducers({
  categories: categoriesReducer,
  courses: coursesReducer,
});

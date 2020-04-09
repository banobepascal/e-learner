import { createSelector } from "reselect";

const selectCourses = (state) => state.courses;

export const selectCoursesSections = createSelector(
  [selectCourses],
  (courses) => courses.courses
);

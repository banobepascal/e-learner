import { createSelector } from "reselect";

const selectCourses = (state) => state.courses;

const COURSES_MAP_ID = {};

export const selectCoursesSections = createSelector(
  [selectCourses],
  (courses) => courses.courses
);

export const selectCourse = (coursesUrlParam) =>
  createSelector([selectCoursesSections], (courses) =>
    courses.find((course) => course.id === COURSES_MAP_ID[coursesUrlParam])
  );

import { createSelector } from "reselect";

const selectCourses = (state) => state.courses;

const COURSES_MAP_ID = {
  programming: 1,
  graphicdesign: 2,
  marketing: 3,
  webdevelopment: 4,
  languagespeech: 5,
  business: 6,
};

export const selectCoursesSections = createSelector(
  [selectCourses],
  (courses) => courses.courses
);

export const selectCourse = (coursesUrlParam) =>
  createSelector([selectCoursesSections], (courses) =>
    courses.find((course) => course.id === COURSES_MAP_ID[coursesUrlParam])
  );

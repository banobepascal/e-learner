import { createSelector } from "reselect";

const selectCourses = (state) => state.courses_data;

export const selectCoursesData = createSelector(
  [selectCourses],
  (courses_data) => courses_data.courses
);

export const selectCoursesSections = createSelector(
  [selectCoursesData],
  (courses) => (courses ? Object.keys(courses).map((key) => courses[key]) : [])
);

export const selectCourse = (coursesUrlParam) =>
  createSelector([selectCoursesSections], (courses) =>
    courses.find((course) => course.slug === coursesUrlParam)
  );

export const selectMyCourses = createSelector(
  [selectCourses],
  (courses) => courses.myCourses
);

export const selectIsFetchingCourses = createSelector(
  [selectCourses],
  (courses_data) => courses_data.isFetching
);

export const selectIsCoursesLoaded = createSelector(
  [selectCourses],
  (courses_data) => !!courses_data.courses
);

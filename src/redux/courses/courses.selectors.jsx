import { createSelector } from "reselect";

const selectCourses = (state) => state.courses;

export const selectCoursesSections = createSelector(
  [selectCourses],
  (courses) => courses.courses
);

export const selectCourse = (coursesUrlParam) =>
  createSelector([selectCoursesSections], (courses) =>
    courses.find((course) => course.slug === coursesUrlParam)
  );

export const selectMyCourses = createSelector(
  [selectCourses],
  (courses) => courses.myCourses
);

export const searchCourse = (searchInput) =>
  createSelector([selectCourses], (courses) =>
    courses.filter((course) =>
      course.title.toLowerCase().includes(searchInput.toLowerCase())
    )
  );

export const selectIsFetchingCourses = createSelector(
  [selectCourses],
  (courses) => courses.isFetching
);

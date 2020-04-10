import { createSelector } from "reselect";

const selectCourses = (state) => state.courses;

const selectCategory = (state) => state.courses.categories;

export const selectCoursesSections = createSelector(
  [selectCourses],
  (courses) => courses.courses
);

export const selectCoursesCategories = (coursesUrlParam) =>
  createSelector([selectCoursesSections], (courseCategories) =>
    courseCategories.find(
      (courseCategory) =>
        courseCategory.category === selectCategory[coursesUrlParam]
    )
  );

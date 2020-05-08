import CourseActionTypes from "./courses.types";

export const enrollInCourse = (course) => ({
  type: CourseActionTypes.ENROLL_COURSE,
  payload: course,
});

export const searchCourses = (courses) => ({
  type: CourseActionTypes.SEARCH_COURSES,
  payload: courses,
})
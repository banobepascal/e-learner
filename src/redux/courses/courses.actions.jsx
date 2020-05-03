import CourseActionTypes from "./courses.types";

export const enrollInCourse = (course) => ({
  type: CourseActionTypes.ENROLL_COURSE,
  payload: course,
});

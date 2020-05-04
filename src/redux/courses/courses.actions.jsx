import CourseActionTypes from "./courses.types";

export const enrollInCourse = (course) => ({
  type: CourseActionTypes.ENROLL_COURSE,
  payload: course,
});

export const startLesson = (course) => ({
  type: CourseActionTypes.START_LESSON,
  payload: course,
});

export const enrollCourse = (myCourses, courseToEnroll) => {
  const existingCourse = myCourses.find(
    (course) => course.id === courseToEnroll.id
  );

  if (existingCourse) {
    return myCourses.map((course) =>
      course.id === courseToEnroll.id
        ? { ...course, enroll: !course.enroll }
        : course
    );
  }

  return [...myCourses, { ...courseToEnroll, enroll: false }];
};

export const startLesson = (courses, courseEnrolled, lessonToStart) => {
  const existingCourse = courses.find(
    (course) => course.id === courseEnrolled.id
  );

  if (existingCourse) {
    return courses.map((course) =>
      course.id === courseEnrolled.id
        ? {
            ...course,
            lessonToStart: course.courseContent.map((lesson) =>
              lesson.id ? { ...lesson, start: !lesson.start } : lesson
            ),
          }
        : course
    );
  }

  return [...courses, { ...courseEnrolled }];
};

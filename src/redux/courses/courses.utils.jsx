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

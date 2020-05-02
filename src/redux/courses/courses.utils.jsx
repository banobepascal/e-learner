export const enrollCourse = (myCourses, courseToAdd) => {
  const existingCourse = myCourses.find(
    (course) => course.id === courseToAdd.id
  );

  if (existingCourse) {
    return myCourses;
  }

  return [...myCourses, { ...courseToAdd }];
};

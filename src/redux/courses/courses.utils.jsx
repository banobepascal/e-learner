export const enrollCourse = (myCourses, courseToAdd) => {
  const existingCourse = myCourses.find(
    (course) => course.id === courseToAdd.id
  );

  if (existingCourse) {
    return myCourses;
  }

  return [...myCourses, { ...courseToAdd }];
};

export const quitFromCourse = (myCourses, courseToQuit) => {
  const existingCourse = myCourses.find(
    (course) => course.id === courseToQuit.id
  );

  if (existingCourse) {
    return myCourses.filter((course) => course.id !== courseToQuit.id);
  }

  return [...myCourses, {...courseToQuit}]
};

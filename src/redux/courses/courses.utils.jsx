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

export const searchCourse = (courses, searchInput) => {
  courses.filter((course) =>
    course.title.toLowerCase().includes(searchInput.toLowerCase())
  );
};

const filterTodo =(e) =>
 { 
 var updatedList = this.state.todosInit;
 updatedList = updatedList.filter((item =>{
 return item.toLowerCase().search(
 e.target.value.toLowerCase()) !== -1;
 }) );
 this.setState({ 
 todos: updatedList,
 });
 if (updatedList == 0 ) {
 this.setState({ 
 message: true,
 });
 } else {
 this.setState({ 
 message: false,
 });
 }
 }
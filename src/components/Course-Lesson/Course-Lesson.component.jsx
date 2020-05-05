import React from "react";

import { CourseContent } from "./Course-Lesson.styles";

const CourseLesson = ({ lesson}) => {
  return (
    <CourseContent>
      <p>{lesson}</p>
    </CourseContent>
  );
};

export default CourseLesson;

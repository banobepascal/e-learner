import React from "react";

import CustomButton from '../Custom-Button/Custom-Button.component';
import { CourseContent } from "./Course-Lesson.styles";

const CourseLesson = ({ lesson}) => {
  return (
    <CourseContent>
      <p>{lesson}</p>
      <CustomButton isLogin>preview</CustomButton>
    </CourseContent>
  );
};

export default CourseLesson;

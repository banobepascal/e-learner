import React from "react";
import {Button} from 'react-bootstrap';

import { CourseContent } from "./Course-Lesson.styles";

const CourseLesson = ({ lesson}) => {
  return (
    <CourseContent>
      <p>{lesson}</p>
      <Button>preview</Button>
    </CourseContent>
  );
};

export default CourseLesson;

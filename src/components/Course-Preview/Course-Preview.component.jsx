import React from "react";

import Course from "../Course/Course.component";
import {CoursePreviews} from './Course-Preview.styles';

const CoursePreview = ({ courses }) => {
  return (
    <CoursePreviews>
      {courses.map(({id, ...courseProps}) => (
        <Course key={id} {...courseProps} />
      ))}
    </CoursePreviews>
  );
};

export default CoursePreview;
